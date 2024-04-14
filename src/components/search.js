'use client';


import {useEffect, useState} from "react";
import {getTitles} from "@/app/api/getAllData";
import Image from 'next/image'
import Link from "next/link";


const Bg = ({setIsPressed}) => {
    const titles = getTitles(10);

    return (
        <div
            className={`
                fixed top-0 left-0 w-full h-full min-h-[450px] z-[30] pt-32
                bg-[rgba(255,255,255,.9)] dark:bg-[rgba(0,0,0,.9)]
            `}
            onClick={() => {
                setIsPressed(false);
            }}
        >
            <div
                className={`
                    grid grid-cols-[repeat(4,_minmax(200px,_1fr))] columns-[150px] gap-6 
                    max-w-[1000px] w-full mx-auto
                `}
            >
                {titles.map(title => {
                    return (
                        <Link
                            href={`/c/${title.engTitle}`}
                            className={`
                                w-full h-[325px] overflow-hidden
                                bg-white dark:bg-slate-900 
                                rounded border-[3px] dark:border-2 border-indigo-500 dark:border-amber-200
                            `}
                        >
                            <div className={'relative w-full h-full max-h-[290px]'}>
                                <Image
                                    src={title.backgroundLarge} alt={''} fill
                                    className={'object-cover object-top'}
                                />
                            </div>
                            <p className={'p-1 pl-2 truncate'}>
                                {title.title}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}


const Search = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlerPressed = () => {
        setIsPressed(true);
    }

    useEffect(() => {
        if (isPressed) document.querySelector('body').style.overflow = 'hidden';
        else document.querySelector('body').style.overflow = 'scroll';

        return () => {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }, [isPressed]);

    return (
        <>
            <div
                className={`
                    ${isPressed
                    ? 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[31] border-[3px] dark:border-2 border-indigo-600 dark:border-amber-300 rounded'
                    : ''
                } 
                    flex items-center grow-1 ml-auto mr-2 
                    ${isPressed
                    ? 'dark:bg-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.4)] text-white'
                    : 'bg-[rgba(255,255,255,0.4)] dark:bg-[rgba(0,0,0,0.4)] text-black'
                }
                `}
            >
                <input
                    type="text"
                    placeholder={'Я найду...'}
                    className={`
                        p-2 focus:outline-0
                        ${isPressed
                        ? 'w-[500px] text-white bg-white dark:bg-black'
                        : 'w-[350px] text-black bg-transparent'
                    }
                    `}
                    onClick={handlerPressed}
                />
                <button
                    className={`
                        py-2 px-1.5
                        ${isPressed
                        ? 'bg-white dark:bg-black'
                        : ''
                    }
                    `}
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </button>
            </div>
            {
                isPressed && <Bg setIsPressed={setIsPressed}/>
            }
        </>
    );
};

export default Search;