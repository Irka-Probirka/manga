import {
    Playfair_Display as PlayfairDisplay,
    Roboto,
} from 'next/font/google';


export const mainFont = Roboto({
    subsets: ['cyrillic'],
    weight: "400",
});

export const titleFont = PlayfairDisplay({
    subsets: ['cyrillic'],
    weight: "400",
});