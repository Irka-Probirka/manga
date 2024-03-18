'use client';


import {useContext} from "react";
import {Chapters} from "@/app/read/[name]/page";

const Picture = ({chapters, title}) => {

    const { indexChapter } = useContext(Chapters);
    const img = chapters.find(item => item.id === Number(indexChapter));

    return (
        <div className={'flex justify-center my-[80px]'}>
            <img alt={'comics'} src={`/${title}/${img.img}`} className={'select-none'}/>
        </div>
    );
};

export default Picture;