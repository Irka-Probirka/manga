import React from 'react';
import Link from "next/link";

const SectionTitle = ({rightLinkValue, href, children, id, fontSizeMd}) => {

    if (!rightLinkValue) {
        return (
            <h2 className={`${fontSizeMd ? 'text-3xl' : 'text-4xl'} font-bold mb-5`} id={id}>{children}</h2>
        );
    }

    return (
        <div className={'flex justify-between align-bottom'}>
            <h2 className={`${fontSizeMd ? 'text-3xl' : 'text-4xl'} font-bold mb-5`} id={id}>{children}</h2>
            <Link
                href={href}
                className={'flex text-end h-max font-semibold text-blue-600 dark:text-white'}
            >
                {rightLinkValue + ' >'}
            </Link>
        </div>
    );
};

export default SectionTitle;