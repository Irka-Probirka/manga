'use client';


import {useCurrentUser} from "@/hooks/useCurrentUser";


const UserInfo = () => {

    const user = useCurrentUser();

    return user?.name
};

export default UserInfo;