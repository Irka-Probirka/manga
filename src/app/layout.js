import './globals.css';
import {mainFont} from "@/app/ui/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {SessionProvider} from "next-auth/react";
import {auth} from "@/auth";

export const metadata = {
    title: {
        template: 'Haren | %s',
        default: 'Haren', // a default is required when creating a template
    },
    icons: {
        icon: '/logo.jpg',
    },
}

export default async function RootLayout({children}) {

    const session = await auth();

    return (
        <html lang="en">
        <SessionProvider session={session}>
            <body className={`${mainFont.className} flex flex-col dark:text-white min-h-[100vh] h-full`}>
            <Header/>
            <main className={'grow bg-white dark:bg-[rgb(11,11,15)]'}>
                {children}
            </main>
            <Footer/>
            </body>
        </SessionProvider>
        </html>
    );
}
