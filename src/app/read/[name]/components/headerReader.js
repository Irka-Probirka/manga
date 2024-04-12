'use client';


import Link from "next/link";
import Image from "next/image";
import ChangeThemeButton from "@/components/changeThemeButton/changeTheme";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";


const Back = ({currentChapter, first_chapter, func}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
             stroke="currentColor"
             className={`w-[48px] h-[48px] p-[15px] ${currentChapter === first_chapter ? 'stroke-gray-400 dark:stroke-gray-600' : 'hover:cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[rgba(255,255,255,.15)]'} transition duration-100`}
             onClick={() => func()}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
    )
}

const Next = ({currentChapter, last_chapter, func}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
             stroke="currentColor"
             className={`w-[48px] h-[48px] p-[15px] ${currentChapter === last_chapter ? 'stroke-gray-400 dark:stroke-gray-600' : 'hover:cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[rgba(255,255,255,.15)]'} transition duration-100`}
             onClick={() => func()}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
        </svg>
    )
}

const Settings = () => {
    return (
        <div className={'hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[rgba(255,255,255,.15)] cursor-pointer'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"
                 className="w-[48px] h-[48px] p-[11px] hover:animate-spin-slow">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
        </div>
    )
}

const HeaderReader = ({titleName, chapterName, back, next, firstChapter, lastChapter, currentChapter}) => {
    const params = useParams();
    const [isHide, setIsHide] = useState(false);

    function handlerHideHeader(e) {
        if (e.deltaY > 0) {
            setIsHide(true);
        } else {
            setIsHide(false);
        }
    }

    useEffect(() => {
        window.addEventListener('wheel', handlerHideHeader);

        return () => {
            window.removeEventListener('wheel', handlerHideHeader);
        }
    });


    return (
        <header
            className={`fixed z-10 top-0 left-0 right-0 grid items-center grid-cols-[1fr_auto_1fr] h-[48px] px-[10px] bg-[rgba(255,255,255,.9)] dark:bg-[rgba(0,0,0,.9)] ${isHide ? 'opacity-0' : 'opacity-100'} transition duration-100`}>
            <div className={'flex items-center'}>
                <Link href={'/'} className={'rounded-full overflow-hidden'}>
                    <Image alt={'logo'} src={'/logo.jpg'} width={40} height={40}/>
                </Link>
                <Link href={`/c/${params.name}`} className={'select-none'}>
                    <h1 className={'font-semibold text-md mx-[20px] truncate'}>
                        {titleName}
                    </h1>
                </Link>
            </div>
            <nav className={'flex items-center'}>
                <Back currentChapter={currentChapter} first_chapter={firstChapter} func={back}/>
                <p className={'flex items-center font-semibold tracking-wider h-[48px] px-[15px] select-none hover:cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[rgba(255,255,255,.15)] transition duration-100'}>
                    {chapterName}
                </p>
                <Next currentChapter={currentChapter} last_chapter={lastChapter} func={next}/>
            </nav>
            <div className={'flex justify-end h-auto'}>
                <ChangeThemeButton
                    className={'w-[48px] h-[48px] py-[10px] px-[12px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[rgba(255,255,255,.15)] cursor-pointer transition'}/>
                <Settings/>
            </div>
        </header>
    );
};

export default HeaderReader;