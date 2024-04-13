'use client';

import {useSearchParams} from "next/navigation";

const ErrorMessageBox = () => {

    const params = useSearchParams();

    let message;

    if (params.has('error')) {
        switch (params.get('error')){
            case 'access_denied':
                message = 'Доступ запрещен';
                break;
            default:
                message = 'Ошибка';
        }
    }

    return (
        <div class={`fixed bottom-2 left-2 rounded overflow-hidden py-2 animate-opacity delay-2000`}>
            <span class={'w-max px-5 py-4 bg-red-500 text-white'}>
                {message}
            </span>
        </div>
    );
};

export default ErrorMessageBox;