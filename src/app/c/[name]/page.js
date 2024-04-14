import Image from 'next/image'
import {
    getChapterWithTitle,
    getFirstChapter,
    getGenreByTitleId,
    getHashtagById,
    getTeamById,
    getTitle
} from "@/app/api/getAllData";
import ContainerWithBgImage from "@/components/containerWithBgImage";
import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import Link from "next/link";
import dynamic from "next/dynamic";
import EditPanel from "@/app/c/[name]/components/editPanel";


export async function generateMetadata({params}) {
    const title = await getTitle(params.name);

    return {
        title: {
            absolute: title.title
        },
    }
}


const ChaptersLoader = dynamic(() => import('@/app/c/[name]/components/chaptersSkeleton'));
const Chapters = dynamic(() => import('./components/chapters'), {
    ssr: false,
    loading: () => <ChaptersLoader/>,
})


const ButtonSelect = ({children}) => {
    return (
        <div
            className={'flex items-center h-[48px] w-max my-[10px] px-[16px] border-b-2 border-b-blue-500 select-none cursor-pointer uppercase'}
        >
            {children}
        </div>
    )
}

const Bookmarks = ({bookmarks}) => {
    return (
        <div className={'relative group/item flex items-center gap-[6px] select-none'}>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="rgb(9,9,9)"
                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
            </svg>
            <p className={'text-2xl leading-5 text-[rgb(9,9,9)] dark:text-[rgb(181,181,186)]'}>
                {bookmarks}
            </p>
            <span
                className={'absolute top-[calc(100%+12px)] right-[-8px] opacity-0 transition-all ease-linear group-hover/item:top-[calc(100%+8px)] group-hover/item:opacity-100 group-hover/item:visible w-max font-normal bg-[rgba(0,0,0,.8)] text-white pt-[2px] pb-[4px] px-[24px] select-none rounded'}
            >
                Добавили в закладки
            </span>
        </div>
    )
}

const Page = async ({params}) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const title = await getTitle(params.name);
    const chapters = await getChapterWithTitle(title.id);
    const firstChapter = await getFirstChapter(title.engTitle);
    const genre = await getGenreByTitleId(title.id);
    const team = await getTeamById(title.team_id);

    return (
        <ContainerWithBgImage bgLayer={title.backgroundLarge}>
            <div>
                <Image src={title?.backgroundLarge} alt={'Фотка комикса'} width={300} height={450}
                       className={'rounded mb-2'}/>
                <Link href={`/read/${title.engTitle}?chapter=${firstChapter}`}
                      className={'flex items-center justify-center w-full h-[42px] text-white font-semibold bg-[rgb(42,91,190)] dark:bg-[rgb(86,72,178)] rounded'}>
                    Начать читать
                </Link>
                <Section>
                    <SectionTitle fontSizeMd={true}>Переводчики</SectionTitle>
                    <Link href={`/t/${title.team_id}`}
                          className={'flex gap-[16px] hover:bg-[rgba(0,0,0,.05)] hover:dark:bg-[rgba(255,255,255,.15)] rounded'}>
                        <Image src={team?.img} alt={'фото команды'} width={48} height={48} className={'rounded-md'}/>
                        <div className={'leading-5'}>
                            <p className={'text-2xl font-bold'}>{team?.name}</p>
                            <small
                                className={'text-[rgba(0,0,0,.38)] dark:text-[rgba(255,255,255,.5)] ml-px'}>Команда</small>
                        </div>
                    </Link>
                </Section>
            </div>
            <div>
                <div className={'grid grid-cols-[auto_100px] gap-4 h-full'}>
                    <section className={'flex flex-col gap-5 mb-10'}>
                        <div className={'flex flex-col gap-[8px]'}>
                            <span className={'text-gray-900 leading-3'}>{genre.genre} ⸱ {title?.year}</span>
                            <p className={'text-3xl font-bold'}>{title?.title}</p>
                            <ul className={'flex'}>
                                <li className={'flex items-center px-[12px] mr-[8px] h-[24px] text-[12px] tracking-tighter text-[rgb(255,152,0)] font-bold rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)] select-none'}>
                                    {title?.age}+
                                </li>
                                {title.hashtags?.map((id_hashtag, index) => {
                                    const hashtag = getHashtagById(id_hashtag);
                                    return (
                                        <li key={index}
                                            className={'px-[12px] mx-[8px] h-[24px] text-sm rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)] font-semibold select-none'}
                                        >
                                            {hashtag.tag}
                                        </li>
                                    )
                                })}
                            </ul>
                            <p className={'leading-5 tracking-tight'}>{title.about}</p>
                        </div>
                        <div className={'flex text-[rgb(9,9,9)] dark:text-[rgb(236,236,236)] uppercase'}>
                            <ButtonSelect>Главы</ButtonSelect>
                            {/*<ButtonSelect>Коментарии</ButtonSelect>*/}
                        </div>
                        <>
                            {/*  Коментарии и Главы  */}
                            <Chapters chapters={chapters} title_name={title.engTitle}/>
                        </>
                    </section>
                    <section className={'flex flex-col gap-5 font-bold'}>
                        <span className={'text-green-500 text-5xl'}>
                            {title.rating}
                        </span>
                        <Bookmarks bookmarks={title?.bookmarks} />
                        <EditPanel titleHref={title.engTitle}/>
                    </section>
                </div>
            </div>
        </ContainerWithBgImage>
    );
};

export default Page;