

const TeamTitlesLoader = () => {
    return (
        <div className={'grid gap-[0.5rem] grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] mb-[20px]'}>
            {Array(7).fill('').map(() =>
                <div className={'w-full h-[200px] bg-[rgb(240,242,250)] dark:bg-[rgb(18,17,23)] rounded animate-pulse'} />
            )}
        </div>
    );
};

export default TeamTitlesLoader;