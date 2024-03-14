import './globals.css';
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
    title: "Манга",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={'flex flex-col dark:text-white min-h-[100vh] h-full'}>
        <Header/>
        <main className={'grow bg-white dark:bg-[rgb(11,11,15)]'}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
