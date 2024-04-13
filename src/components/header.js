'use client';


import Image from 'next/image'
import Link from "next/link";
import ChangeThemeButton from "@/components/changeThemeButton/changeTheme";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {signOut} from 'next-auth/react';
import {useCurrentUser} from "@/hooks/useCurrentUser";


const NavElem = ({href, children}) => {
    const pathname = usePathname();
    const [expandedClass, setExpandedClass] = useState('hover:bg-indigo-500 hover:text-white')

    useEffect(() => {
        if (pathname === href) {
            setExpandedClass('bg-indigo-500 text-white')
        } else {
            setExpandedClass('hover:bg-indigo-500 hover:text-white')
        }
    }, [pathname])

    return (
        <li>
            <Link href={href} className={`p-2 mx-2 rounded transition ${expandedClass}`}>
                {children}
            </Link>
        </li>
    )
}


const Header = () => {
    const pathname = usePathname();
    const [bgBlur, setBgBlur] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const regComics = /^\/c\/[a-zA-Z0-9_-]+$/;
    const regTeam = /^\/t\/[0-9]+$/;
    const regReaderMode = /^\/read\/[a-zA-Z0-9_-]+$/;

    const user = useCurrentUser();

    function handleScroll() {
        if (Math.round(document.documentElement.scrollTop) === 0)
            setBgBlur(true);
        else
            setBgBlur(false);
    }

    // Блюр, когда перешли на страницу типа /c/[name]
    useEffect(() => {
        if (pathname.match(regComics) || pathname.match(regTeam)) {
            window.addEventListener('scroll', handleScroll);
            setBgBlur(true);
        }

        if (pathname.match(regReaderMode)) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            setBgBlur(false);
        }
    }, [pathname]);


    return (
        <header
            className={`${isHidden && 'hidden'} font-semibold fixed top-0 left-0 right-0 py-[2px] flex ${bgBlur ? 'bg-[rgba(255,255,255,0)] dark:rgba(0,0,0,0)' : 'bg-[rgb(240,242,250)] dark:bg-[rgb(18,17,23)]'} dark:shadow-[rgba(255,255,255,.15)] transition z-20`}
        >
            <div className={'flex items-center w-full max-w-7xl mx-auto'}>
                <Link href={'/'} className={'rounded-full overflow-hidden'}>
                    <Image src={'/logo.jpg'} alt={'logo'} width={45} height={45}/>
                </Link>
                <ul className={'flex'}>
                    <NavElem href={'/catalog'}>Каталог</NavElem>
                    <NavElem href={'/popular'}>Популярное</NavElem>
                </ul>
                <div
                    className={'flex items-center grow-1 ml-auto bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)]'}>
                    <input type="text" placeholder={'Я найду...'}
                           className={'p-2 bg-transparent focus:outline-0 w-[350px]'}/>
                    <button className={'mx-1.5'}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                        </svg>
                    </button>
                </div>
                <ChangeThemeButton/>
                {
                    user ?
                        <Link
                            href={'/profile'}
                            className={'p-1 mx-1'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                            </svg>
                        </Link>
                        :
                        <Link
                            href={'/api/auth/signin'}
                            className={'ml-[10px] px-[10px] py-[4px] bg-indigo-600 rounded text-white'}
                        >
                            Войти
                        </Link>
                }
            </div>
        </header>
    );
};

export default Header;