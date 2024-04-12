import {useEffect, useState} from "react";


export const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved || defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}