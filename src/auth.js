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

            // if (session.user) {
            //     session.user = token.user;
            // }
            // console.log('SESSION: ', session);
            // console.log('TOKEN: ', token);

            return session
        },
        async jwt({ token }) {
            // if (!token.sub) return token
            //
            // const user = await getUserById(token.sub)
            // if (!user) return token
            //
            // token.user = user;

            // console.log('TOKEN_USER: ', token?.user, ' date: ', Date.now());

            return token
        },
        async signIn({ user }) {
            /*
            * Выводит данные типа:
            * USER:  {
                id: '97655cbe-e083-404b-8925-e1fc0d56e4a1',
                name: 'Андрей',
                email: 'ankuznetsov42@gmail.com',
                image: 'https://lh3.googleusercontent.com/a/ACg8ocLDsW78zphlJkfAdBLAmHyVZEf_GnMlfydog515ejqWBnC3dso=s96-c'
              }
            * */
            // console.log("USER: ", user);

            return true
        }
    },
    pages: {
        // signIn: '/auth/signin',
        // error: '/error'
    }
});