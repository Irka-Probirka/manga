


const ModalWindow = ({titleName}) => {
    return (
        <div
            className={'fixed top-0 left-0 w-full min-h-[100vh] h-full z-[30] bg-[rgba(0,0,0,.8)]'}

        >
            <div
                className={'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[101] flex flex-col items-center gap-5 text-center bg-gray-600 p-5 rounded'}
            >
                <span className={'text-white'}>
                    Вы уверены что хотите удалить {titleName} ?
                </span>
                <div className={'max-w-[150px] w-full'}>
                    {/*<Button type={'delete'}>*/}
                    {/*    Удалить*/}
                    {/*</Button>*/}
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;