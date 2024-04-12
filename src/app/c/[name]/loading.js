import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import ChaptersSkeleton from "@/app/c/[name]/components/chaptersSkeleton";


const Loading = () => {
    return (
        <div className={'max-w-7xl pt-20 mx-auto grid gap-[24px] grid-cols-[300px_1fr] z-[2]'}>
            <div>
                <div className={'w-[300px] h-[440px] animate-pulse rounded mb-2 bg-slate-200 dark:bg-slate-700'}/>
                <div className={'w-full h-[42px] animate-pulse bg-[rgb(42,91,190)] dark:bg-[rgb(86,72,178)] rounded'}/>
                <Section>
                    <SectionTitle fontSizeMd={true}>Переводчики</SectionTitle>
                    <div className={'flex flex-col gap-[10px]'}>
                        <div className={'h-16 bg-slate-200 dark:bg-slate-700 animate-pulse rounded'}/>
                        <div className={'h-16 bg-slate-200 dark:bg-slate-700 animate-pulse rounded'}/>
                    </div>
                </Section>
            </div>
            <div>
                <div className={'grid grid-cols-[auto_100px] gap-4'}>
                    <section className={'flex flex-col gap-5 mb-10'}>
                        <div className={'flex flex-col gap-[8px] animate-pulse'}>
                            <span className={'h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded'}/>
                            <p className={'h-7 w-[400px] bg-slate-200 dark:bg-slate-700 rounded'}/>
                            <ul className={'flex animate-pulse my-2.5'}>
                                <li className={'w-16 px-[12px] mr-[8px] h-[24px] rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)]'}/>
                                <li className={'w-16 px-[12px] mx-[8px] h-[24px] rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)]'}/>
                                <li className={'w-16 px-[12px] mx-[8px] h-[24px] rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)]'}/>
                                <li className={'w-16 px-[12px] mx-[8px] h-[24px] rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)]'}/>
                                <li className={'w-16 px-[12px] mx-[8px] h-[24px] rounded bg-[rgba(203,206,214,.6)] dark:bg-[rgba(52,49,69,.3)]'}/>
                            </ul>
                            <p className={'h-5 bg-slate-200 dark:bg-slate-700 rounded'}/>
                            <p className={'h-5 bg-slate-200 dark:bg-slate-700 rounded'}/>
                            <p className={'h-5 w-[300px] bg-slate-200 dark:bg-slate-700 rounded'}/>
                        </div>
                        <div className={'flex text-[rgb(9,9,9)] dark:text-[rgb(236,236,236)] uppercase'}>
                            <div className={'flex items-center h-[48px] px-[16px] border-b-2 border-b-blue-500 select-none cursor-pointer'}>
                                Главы
                            </div>
                        </div>
                        <>
                            {/*  Коментарии и Главы  */}
                            <ChaptersSkeleton/>
                        </>
                    </section>
                    <section className={'flex flex-col gap-5 font-bold'}>
                        <span className={'h-10 bg-slate-200 dark:bg-slate-700 text-green-500 animate-pulse rounded'}/>
                        <div className={'relative group/item flex items-center gap-[6px] select-none'}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="rgb(9,9,9)"
                                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
                            </svg>
                            <p className={'text-2xl leading-5 text-[rgb(9,9,9)] dark:text-[rgb(181,181,186)]'}>
                                0
                            </p>
                            <span
                                className={'absolute top-[calc(100%+12px)] right-[-8px] opacity-0 transition-all ease-linear group-hover/item:top-[calc(100%+8px)] group-hover/item:opacity-100 group-hover/item:visible w-max font-normal bg-[rgba(0,0,0,.8)] text-white pt-[2px] pb-[4px] px-[24px] select-none rounded'}>
                                Добавили в закладки
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Loading;