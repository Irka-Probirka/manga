import {auth} from "@/auth";
import Link from "next/link";


const Button = ({type, href, children}) => {

    const handlerDelete = () => {

    }

    switch (type) {
        case 'delete':
            return (
                <button
                    className={`w-full py-2 rounded overflow-hidden bg-red-600 text-white`}
                    // onClick={handlerDelete}
                >
                    {children}
                </button>
            );
        case 'edit':
            return (
                <Link
                    className={'w-full py-2 rounded overflow-hidden bg-gray-600 text-white text-center'}
                    href={`edit/title/${href}`}
                >
                    {children}
                </Link>
            );
        default:
            break;
    }
}


const EditPanel = async ({titleHref}) => {
    const session = await auth();
    const staffRole = ['admin', 'moderator'];

    if (staffRole.includes(session.user?.role)) {
        return (
            <div className={'flex flex-col gap-2 mt-5'}>
                <Button type={'edit'} href={titleHref}>
                    Изменить
                </Button>
                <Button type={'delete'}>
                    Удалить
                </Button>
            </div>
        )
    }
};

export default EditPanel;