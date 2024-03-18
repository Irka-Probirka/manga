'use client';

import {getChapterWithTitle, getFirstChapter, getTitle} from "@/api/getAllData";
import HeaderReader from "@/app/read/[name]/components/headerReader";
import Picture from "@/app/read/[name]/components/picture";
import {createContext, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

export const Chapters = createContext(null);

const Page = ({params}) => {

    const searchParams = useSearchParams();

    const title = getTitle(params.name);
    const chapters = getChapterWithTitle(title);
    const chaptersLength = chapters.length;
    const first_chapter = getFirstChapter(params.name);
    const last_chapter = first_chapter + chaptersLength - 1;

    let defaultValue;
    if (searchParams.has('chapter')){
        defaultValue = Number(searchParams.get('chapter'));
    }
    else {
        defaultValue = getFirstChapter(params.name);
    }

    const [indexChapter, setIndexChapter] = useState(defaultValue);

    const next = () => {
        if (indexChapter === chapters.length) return indexChapter
        else setIndexChapter(prev => prev + 1)
    }

    const back = () => {
        if (indexChapter === 1) return indexChapter
        else setIndexChapter(prev => prev - 1)
    }

    useEffect(() => {
        document.documentElement.scrollTop = 0;
    });

    return (
        <Chapters.Provider value={{indexChapter, next, back, first_chapter, last_chapter}}>
            <HeaderReader />
            <Picture title={title.engTitle} chapters={chapters} />
        </Chapters.Provider>
    );
};

export default Page;