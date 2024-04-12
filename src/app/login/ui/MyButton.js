'use client';


import {signIn} from "next-auth/react";


const MyButton = () => {
    return (
        <button onClick={() => signIn('yandex')}>
            Вход через Yandex
        </button>
    );
};

export default MyButton;