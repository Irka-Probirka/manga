import {signOut} from "@/auth";
import UserInfo from "@/app/profile/_ui/userInfo";
import Layout from "@/components/layout";
import Link from "next/link";
import {usePathname} from "next/navigation";


const LogOut = () => {
    return (
        <form action={async () => {
            'use server';
            await signOut({redirectTo: '/'});
        }}>
            <button type={"submit"}>
                Выйти
            </button>
        </form>
    )
}

// <UserInfo/>
// <LogOut/>

const Block = ({children}) => {
    return (
        <div className={'p-[16px] bg-gray-100 rounded-md shadow-md shadow-[rgba(0,0,0,.15)] space-y-[10px]'}>
            {children}
        </div>
    )
}

const BlockSvg = ({color, children}) => {
    return (
        <div className={`flex items-center justify-center w-[48px] aspect-square ${color} rounded`}>
            {children}
        </div>
    )
}

const Li = ({to, select, children}) => {
    return (
        <li>
            <Link href={to}
                  className={`flex gap-1 p-0.5 px-1.5 rounded ${select && 'bg-gray-200'} hover:bg-gray-300 transition-colors`}>
                {children}
            </Link>
        </li>
    )
}


const Page = async () => {
    return (
        <div className={'pt-32 mb-20'}>
            <Layout>
                <div className={'grid gap-[64px] grid-cols-[300px_1fr] z-[2'}>
                    <div className={'space-y-4'}>
                        <img src={'avatar.webp'} alt={'Аватар'} className={'w-[200px] aspect-square rounded-md'}/>
                        <Block>
                            <p className={'font-semibold text-2xl truncate'}>
                                <UserInfo/>
                            </p>
                            <Link href={'#'}
                                  className={'flex justify-center items-center bg-gray-300 py-[8px] rounded'}>
                                Редактировать профиль
                            </Link>
                        </Block>
                        <Block>
                            <h3 className={'font-semibold'}>Статистика</h3>

                            {/* глав прочитано */}
                            <div className={'flex gap-4'}>
                                <BlockSvg color={'bg-orange-300'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor"
                                         className="size-6 stroke-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                                    </svg>
                                </BlockSvg>
                                <div>
                                    <p className={'font-semibold'}>0</p>
                                    <p className={'text-gray-600'}>глав прочитано</p>
                                </div>
                            </div>

                            {/* Коментарии */}
                            <div className={'flex gap-4'}>
                                <BlockSvg color={'bg-blue-200'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                    </svg>
                                </BlockSvg>
                                <div>
                                    <p className={'font-semibold'}>0</p>
                                    <p className={'text-gray-600'}>коментариев</p>
                                </div>
                            </div>

                            {/* Закладки */}
                            <div className={'flex gap-4'}>
                                <BlockSvg color={'bg-red-200'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor"
                                         className="size-6 stroke-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
                                    </svg>
                                </BlockSvg>
                                <div>
                                    <p className={'font-semibold'}>0</p>
                                    <p className={'text-gray-600'}>закладок</p>
                                </div>
                            </div>

                            {/* Лайки */}
                            <div className={'flex gap-4'}>
                                <BlockSvg color={'bg-pink-300'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-pink-500">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                </BlockSvg>
                                <div>
                                    <p className={'font-semibold'}>0</p>
                                    <p className={'text-gray-600'}>лайков</p>
                                </div>
                            </div>
                        </Block>

                        <Block>
                            <h3 className={'font-semibold'}>Команды</h3>
                            <button
                                className={'flex items-center justify-center text-2xl font-semibold w-[80px] aspect-square rounded border border-dashed border-gray-800'}>
                                +
                            </button>
                        </Block>
                    </div>

                    <div className={'space-y-4'}>
                        <ul className={'flex gap-2.5'}>
                            <Li to={''} select={true}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                                </svg>
                                <span>Тайтлы</span>
                            </Li>
                            <Li to={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                <span>Настройка</span>
                            </Li>
                            <Li to={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/>
                                </svg>
                                <span>Статистика</span>
                            </Li>
                            <Li to={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"/>
                                </svg>
                                <span>Друзья</span>
                            </Li>
                            <Li to={''}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                                </svg>
                                <span>Команды</span>
                            </Li>
                        </ul>
                        <select name="select" id="select" className={'bg-gray-100 p-2 px-4 rounded'}>
                            <option value="default" selected disabled>Сортировка</option>
                            <option value="rating">Рейтинг</option>
                            <option value="like">Лайки</option>
                        </select>
                        <div className={'w-[80%] h-[500px]'}>
                            <div className={'flex flex-col items-center justify-center'}>
                                <img src={'sleeping_cat.svg'} alt="Ничего не найдено" className={'w-[200px]'}/>
                                <p className={'text-gray-800'}>Ничего не найдено</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Page;