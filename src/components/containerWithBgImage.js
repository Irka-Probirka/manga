const ContainerWithBgImage = ({bgLayer, children}) => {

    return (
        <div className={'bg-white dark:bg-black'}>
            <div
                style={{backgroundImage: `url(${bgLayer})`}}
                className={'absolute top-0 w-full h-[700px] bg-no-repeat bg-cover bg-center z-0'}
            />
            <div
                className={'absolute top-0 w-full h-[700px] bg-gradient-to-b from-[rgba(255,255,255,0.65)] dark:from-[rgba(0,0,0,0.65)] from-5% via-[rgba(255,255,255,0.8)] dark:via-[rgba(0,0,0,0.8)] via-35% to-white dark:to-black z-[1]'}
            />
            <div className={'relative max-w-7xl mx-auto grid gap-[24px] grid-cols-[300px_1fr] z-[2]'}>
                {children}
            </div>
        </div>
    );
};

export default ContainerWithBgImage;