'use client';


import {getChapterById, getTitle} from "@/app/api/getAllData";
import {useRouter, useSearchParams} from "next/navigation";
import HeaderReader from "@/app/read/[name]/components/headerReader";
import {Suspense} from "react";
import ImgLoader from "@/app/read/[name]/components/imgLoader";


const Page = ({ params }) => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const chapterId = +searchParams.get('chapter');
    const chapter = getChapterById(chapterId);

    const title = getTitle(params.name);

    const firstChapter = title.chapters[0];
    const lastChapter = title.chapters[title.chapters.length - 1];
    const indexCurrentChapter = title.chapters.findIndex(item => item === chapterId);

    const next = () => {
        if (chapterId !== lastChapter) {
            const idNextChapter = title.chapters[indexCurrentChapter + 1];
            router.replace(`?chapter=${idNextChapter}`);
        }
    }

    const back = () => {
        if (chapterId !== firstChapter) {
            const idPrevChapter = title.chapters[indexCurrentChapter - 1];
            router.replace(`?chapter=${idPrevChapter}`);
        }
    }

    return (
        <>
            <HeaderReader
                titleName={title.name}
                chapterName={chapter.name}
                back={e => back(e)}
                next={e => next(e)}
                currentChapter={chapterId}
                firstChapter={firstChapter}
                lastChapter={lastChapter}
            />
            <div className={'flex flex-col items-center my-[80px] main'}>
                <Suspense fallback={<ImgLoader/>}>
                    {chapter.images.map((item, index) => {
                        const img = new Image();
                        img.src = `/${title.engTitle}/${chapterId}/${item}`;

                        return (
                            <img
                                key={index}
                                alt={'comics'}
                                src={`/${title.engTitle}/${chapterId}/${item}`}
                                className={`w-[${img.width}px] max-w-[1000px] select-none`}
                            />
                        )
                    })}
                </Suspense>
            </div>
        </>
    );
};

export default Page;