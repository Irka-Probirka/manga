import NextAuth from "next-auth";
import YandexProvider from "next-auth/providers/yandex";
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from "next-auth/providers/credentials";
import {getUserById, getUserByName} from "@/app/api/getAllData";


export const {handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        // YandexProvider({
        //     clientId: process.env.YANDEX_CLIENT_ID,
        //     clientSecret: process.env.YANDEX_CLIENT_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                login: {label: 'Логин', type: 'text', placeholder: 'Введите логин'},
                password: {label: 'Пароль', type: 'password', placeholder: 'Введите пароль'},
            },
            async authorize(credentials) {
                if (!credentials?.login || !credentials.password) return null

                let user = null;
                user = await getUserByName(credentials.login);

                if (!user) throw new Error("User not found.");

                if (user.password !== credentials.password) return null

                return user
            }
        }),
    ],
    callbacks: {
        async session({ session, token }){

            if (session.user && token.role) {
                session.user.role = token.role;
            }

            return session
        },
        async jwt({ token }) {

            // Для проверки авторизации через Гугл
            if (!/^\d+$/.test(token.sub)){
                token.role = 'user';
                return token
            }

            // Для авторизации через БД (пока что файл getAllData)
            const user = await getUserById(token.sub);
            if (!user) return token

            token.role = user.role;

            return token
        },
    },
    pages: {
        // signIn: '/auth/signin',
        // error: '/error'
    }
});