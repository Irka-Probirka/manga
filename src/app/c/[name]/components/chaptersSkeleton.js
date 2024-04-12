import React from "react";


const ChaptersSkeleton = () => {
    return (
        <ul className={'flex flex-col gap-[8px] animate-pulse'}>
            {Array(5).fill('').map(index => {
                return (
                    <li key={index} className={'h-[48px] w-full bg-[rgb(240,242,250)] dark:bg-[rgb(18,17,23)] animate-pulse'}>
                    </li>
                )
            })}
        </ul>
    );
};

export default ChaptersSkeleton;