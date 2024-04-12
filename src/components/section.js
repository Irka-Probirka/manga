import React from 'react';

const Section = ({children}) => {
    return (
        <section className={'mt-16 pb-8'}>
            {children}
        </section>
    );
};

export default Section;