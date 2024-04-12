'use client';


import {useCurrentUser} from "@/hooks/useCurrentUser";


const UserInfo = () => {

    const user = useCurrentUser();

    return (
        <div>
            <p>Имя: {user?.name}</p>
            <p>Роль: {user?.role}</p>
        </div>
    );
};

export default UserInfo;