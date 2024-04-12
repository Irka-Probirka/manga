import Link from "next/link";
import React from "react";

const classNameSvg = 'w-[16px] h-[16px] text-[16px] m-[4px]';

const SvgClose = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor"
             className={`${classNameSvg} stroke-red-600`}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
        </svg>
    )
}

const SvgOpen = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor"
             className={`${classNameSvg}`}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
        </svg>
    )
}

const SvgLike = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth={1.5} stroke="currentColor"
             className="w-[16px] h-[16px] text-[16px] mr-[4px] stroke-red-500 dark:stroke-red-400">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
        </svg>
    )
}

const Chapters = async ({chapters, title_name}) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <ul className={'flex flex-col-reverse'}>
            {chapters.map((chapter, index) => {
                return (
                    <li key={index} className={'mb-[8px]'}>
                        <Link
                            href={{pathname: `/read/${title_name}`, query: { chapter: chapter.id }}}
                            className={'flex items-center h-[48px] px-[8px] bg-[rgb(240,242,250)] dark:bg-[rgb(18,17,23)] hover:bg-[rgb(230,232,240)] dark:hover:bg-[rgb(38,37,43)]'}
                        >
                            {(chapter.status === 'close') &&
                                <SvgClose/>
                            }
                            {(chapter.status === 'open') &&
                                <SvgOpen/>
                            }
                            <span className={'ml-[8px] text-xs uppercase font-semibold'}>
                            {chapter.name}
                        </span>
                            <div className={'grow flex justify-end font-semibold'}>
                                <div className={'flex text-red-500 dark:text-red-400 text-xs min-w-[40px]'}>
                                    <SvgLike/>
                                    {chapter.likes}
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default Chapters;