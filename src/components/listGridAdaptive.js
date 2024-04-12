import React from 'react';
import Link from "next/link";

const ListGridAdaptive = ({children}) => {
    return (
        <ul className={'grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8'}>
            {children}
        </ul>
    );
};

export default ListGridAdaptive;