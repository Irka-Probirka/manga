import React from 'react';
import Layout from "@/components/layout";
import ListGridAdaptive from "@/components/listGridAdaptive";
import {getAllPopular} from "@/app/api/getAllData";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import SectionTitle from "@/components/sectionTitle";

const Popular = async () => {

    const allPopular = await getAllPopular();

    return (
        <Layout>
            <Section>
                <SectionTitle>Популярное</SectionTitle>
                <ListGridAdaptive>
                    {
                        allPopular.map((value, index) => {
                            return (
                                <li key={index}>
                                    <Link href="#" className={'flex flex-col'}>
                                        <Image src={value.img} alt={'Популярное'} width={150} height={228}/>
                                        <p>{value.title}</p>
                                        <small className={'leading-[.5rem]'}>
                                            {value.genre}
                                        </small>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ListGridAdaptive>
            </Section>
        </Layout>
    );
};

export default Popular;