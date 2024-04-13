import Link from "next/link";
import Image from 'next/image';
import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";
import ListGridAdaptive from "@/components/listGridAdaptive";
import Layout from "@/components/layout";
import {getTitles, getHashtags, getGenres, getPartPopular} from '@/app/api/getAllData'


export default async function Home() {

    const titles = await getTitles();
    const hashtags = await getHashtags();
    const genres = await getGenres();
    const populars = await getPartPopular();

    return (
        <>
            <ul className={'snap-x snap-mandatory flex gap-6 overflow-x-scroll mb-16 px-[12rem]'}
                style={{scrollbarWidth: 'none', scrollbarHeight: 'none', '&::WebkitScrollbar': {width: 0, height: 0}}}
            >
                {titles.map((value, index) => {
                    return (
                        <li key={index}
                            style={{backgroundImage: `linear-gradient(to right, rgb(0, 0, 0) 20%, rgba(0, 0, 0, .2) 100%), url(${value.background})`,}}
                            className={'text-white snap-center bg-no-repeat bg-center bg-cover rounded-xl'}
                        >
                            <Link href={'/c/andrey'}
                                  className={'block w-[1280px] h-[350px] p-9'}
                            >
                                <div className={'w-[450px]'}>
                                    <span>Martial peak</span>
                                    <h2 className={'text-3xl font-bold'}>
                                        {value.title}
                                    </h2>
                                    <p className={'max-h-[100px] overflow-hidden text-ellipsis'}>
                                        {value.about}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <ul className={'flex gap-[10px] px-[20px] snap-x snap-mandatory overflow-x-scroll'}
                style={{scrollbarWidth: 'none', scrollbarHeight: 'none', '&::WebkitScrollbar': {width: 0, height: 0}}}
            >
                {hashtags.map((hashtag, index) => {
                    return (
                        <li key={index} className={'font-semibold snap-center'}>
                            <Link
                                href={'#'}
                                className={'block w-max text-center text-white px-3.5 py-1 bg-indigo-500 rounded-md'}
                            >
                                {hashtag.tag}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Layout>
                <Section>
                    <SectionTitle>Жанры</SectionTitle>
                    <ListGridAdaptive>
                        {genres.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link href={'/c/andrey'}
                                          className={'flex flex-col text-center px-3 py-1.5 border border-black border-solid rounded-md bg-slate-200 dark:bg-slate-800'}>
                                        <p>{value.genre}</p>
                                        <small>{value.count}</small>
                                    </Link>
                                </li>
                            )
                        })}
                    </ListGridAdaptive>
                </Section>
                <Section>
                    <SectionTitle id={'popular'} rightLinkValue={'Посмотреть всё'} href={'/popular'}>
                        Популярное
                    </SectionTitle>
                    <ListGridAdaptive>
                        {populars.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link href="/c/andrey" className={'flex flex-col'}>
                                        <Image src={value.img} alt={'Популярное'} width={150} height={228}/>
                                        <p>{value.title}</p>
                                        <small className={'leading-[.5rem]'}>
                                            {value.genre}
                                        </small>
                                    </Link>
                                </li>
                            )
                        })}
                    </ListGridAdaptive>
                </Section>
                <Section>
                    <SectionTitle>Обновления</SectionTitle>
                    <p>Какой-то текст, типо обновления</p>
                </Section>
            </Layout>
        </>
    );
}
