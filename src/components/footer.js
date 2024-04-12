import React from 'react';
import Link from "next/link";
import Image from 'next/image'

const FooterLink = ({href, children}) => {
    return (
        <Link href={href} className={'py-1.5 px-2.5 font-semibold uppercase'}>
            {children}
        </Link>
    )
}

const Footer = () => {
    return (
        <footer className={'w-full py-4 bg-black text-white'}>
            <div className={'flex xl:max-w-7xl xl:mx-auto mx-10'}>
                <Image src={'/logo.jpg'} alt={'logo'} width={100} height={100} className={'rounded-full'}/>
                <div className={'grow flex items-center justify-end gap-2'}>
                    <FooterLink href={'#'}>Вконтакте</FooterLink>
                    <FooterLink href={'#'}>Телеграмм</FooterLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;