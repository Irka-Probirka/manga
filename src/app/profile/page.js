import {signOut} from "@/auth";
import UserInfo from "@/app/profile/_ui/userInfo";


const LogOut = () => {
    return (
        <form action={async () => {
            'use server';
            await signOut();
        }}>
            <button type={"submit"}>
                Выйти
            </button>
        </form>
    )
}


const Page = async () => {
    return (
        <div className={'flex justify-center items-center h-full text-center'}>
            <div>
                <UserInfo/>
                <LogOut/>
            </div>
        </div>
    );
};

export default Page;