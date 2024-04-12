import {getTeamById, getTeamTitles} from "@/app/api/getAllData";
import Image from 'next/image';
import dynamic from "next/dynamic";


export async function generateMetadata({params}) {
    const team = await getTeamById(params.id);

    return {
        title: team.name,
    }
}


const TeamTitlesLoader = dynamic(() => import('./ui/teamTitlesLoader'));
const TeamTitles = dynamic(() => import('./ui/teamTitles'), {
    ssr: false,
    loading: () => <TeamTitlesLoader/>,
})

const LinkElem = ({href, children}) => {
    return (
        <li className={'my-[10px] rounded overflow-hidden'}>
            <a target="_blank" href={href}
               className={'text-[14px] font-semibold px-[12px] py-[4px] bg-[rgba(203,206,214,.3)]'}>
                <span>
                    {children}
                </span>
            </a>
        </li>
    )
}

const ButtonSelect = ({onClick, children}) => {
    return (
        <div onClick={onClick}
             className={'flex items-center h-[48px] w-max my-[10px] px-[16px] border-b-2 border-b-blue-500 select-none cursor-pointer uppercase'}
        >
            {children}
        </div>
    )
}

const InfoBlock = ({type, value}) => {
    return (
        <div className={'flex gap-[15px] w-full p-[5px] mb-[10px] bg-[rgb(240,242,250)] rounded-lg'}>
            <div
                className={`flex items-center justify-center w-[48px] aspect-square 
                ${type === 'like' && 'bg-pink-300'} 
                ${type === 'titles' && 'bg-yellow-200'} 
                rounded-lg p-[5px]`}
            >
                {type === 'like' &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor"
                         className="w-6 h-6 fill-red-600 stroke-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                }
                {type === 'titles' &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6 fill-orange-400 stroke-orange-400">
                        <path fillRule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z" clipRule="evenodd"/>
                    </svg>
                }
            </div>
            <div className={'flex flex-col justify-center items-start gap-[3px] leading-4'}>
                <p className={'font-semibold'}>
                    {value}
                </p>
                <p className={'text-gray-500'}>
                    {type === 'like' &&
                        'лайков'
                    }
                    {type === 'titles' &&
                        'тайтлов'
                    }
                </p>
            </div>
        </div>
    )
}


const Page = async ({params}) => {
    const team = await getTeamById(params.id);
    const teamTitles = await getTeamTitles(team.id);

    return (
        <div
            className={'bg-cover'}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,.4) 240px, #fff 280px), url('${team.img}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 70%',
            }}
        >
            <div className={'max-w-[1280px] pt-32 mx-auto grid gap-[64px] grid-cols-[260px_1fr] z-[2]'}>
                <div>
                    <div className={'relative w-full aspect-square overflow-hidden rounded-lg mb-[20px]'}>
                        <Image src={team.img} alt={'Фото команды'} fill={true}/>
                    </div>
                    <InfoBlock type={'like'} value={'43.5k'}/>
                    <InfoBlock type={'titles'} value={teamTitles.length}/>
                </div>
                <div className={'pt-[150px]'}>
                    <div className={'flex items-end'}>
                        <h2 className={'text-[48px] font-bold leading-tight'}>
                            {team.name}
                        </h2>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"*/}
                        {/*     className="w-[42px] h-[42px] mb-[5px] fill-[rgb(42,79,190)]"*/}
                        {/*>*/}
                        {/*    <path fillRule="evenodd"*/}
                        {/*          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"*/}
                        {/*          clipRule="evenodd"/>*/}
                        {/*</svg>*/}
                    </div>
                    <ul className={'flex items-center gap-[8px]'}>
                        {team.social.vk &&
                            <LinkElem href={team.social.vk}>ВКонтакте</LinkElem>
                        }
                        {team.social.tg &&
                            <LinkElem href={team.social.tg}>Телеграмм</LinkElem>
                        }
                    </ul>
                    <p>
                        {team.about}
                    </p>
                    <ButtonSelect>Тайтлы</ButtonSelect>
                    <TeamTitles teamTitles={teamTitles}/>
                </div>
            </div>
        </div>
    );
};

export default Page;