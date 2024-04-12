import Link from "next/link";
import {getGenreByTitleId} from "@/app/api/getAllData";


const TeamTitles = async ({teamTitles}) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return (
        <div className={'grid gap-[0.5rem] grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] mb-[20px]'}>
            {teamTitles.map((title) => {

                const genre = getGenreByTitleId(title.id);

                return (
                    <Link href={'/c/' + title.engTitle}
                          className={'bg-[rgb(240,242,250)] hover:bg-[rgb(220,222,230)] dark:bg-[rgb(18,17,23)] dark:hover:bg-[rgb(48,45,61)] rounded overflow-hidden'}
                    >
                        <div className={'flex flex-col'}>
                            <img src={title.backgroundLarge} alt={'Фото тайтла'} className={'rounded'}/>
                            <div className={'py-[4px] mx-[8px]'}>
                                <small className={'text-[0.75rem] text-[rgba(0,0,0,.38)] dark:text-[rgba(255,255,255,.5)]'}>
                                    {genre.genre}
                                </small>
                                <p className={'line-clamp-3 text-[0.875rem]'}>
                                    {title.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default TeamTitles;