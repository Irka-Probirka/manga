'use client';

import {getChapterWithTitle, getTitle} from "@/api/getAllData";
import HeaderReader from "@/components/headerReader";
import Picture from "@/app/read/[name]/components/picture";
import {createContext, useState} from "react";

export const Chapters = createContext(null);

const Page = ({params}) => {

    const title = getTitle(params.name);
    const chapters = getChapterWithTitle(title);
    const chaptersLength = chapters.length;
    const [indexChapter, setIndexChapter] = useState(1)

    function next() {
        if (indexChapter === chapters.length) return indexChapter
        else setIndexChapter(prev => prev + 1)
    }

    function back() {
        if (indexChapter === 1) return indexChapter
        else setIndexChapter(prev => prev - 1)
    }

    return (
        <Chapters.Provider value={{indexChapter, next, back, chaptersLength}}>
            <HeaderReader />
            <Picture title={title.engTitle} chapters={chapters} />
        </Chapters.Provider>
    );
};

export default Page;