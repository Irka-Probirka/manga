import {unstable_noStore as noStore} from 'next/cache';


const titles = [
    {
        id: 1,
        title: 'Пик боевых искусств',
        engTitle: 'andrey',
        about: 'На основе одноименного романа. Путь на вершину боевых искусств - одинокое и длинное испытание. ' +
            'Перед лицом невзгод ты должен оставаться сильным и неотступным. Только тогда ты сможешь преодолеть все' +
            ' препятствия и стать по-настоящему сильным. Небесная Башня обучает своих учеников самым суровым образом,' +
            ' чтобы они могли выстоять в мире боевых искусств. Но только из-за одного самого незначительного проступка ' +
            'наш главный герой, Ян Кай, может быть исключен из Небесной Башни!',
        year: '2024',
        genres_id: 1,
        rating: 4.45,
        bookmarks: 408,
        team_id: 2,
        age: 16,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
    },
    {
        id: 2,
        title: 'Месть гончей железной крови',
        engTitle: 'lexa',
        about: 'Викир был гончим псом семьи Баскервиль, пока однажды его преданность не наградили упавшим лезвием гильотины.' +
            '"Я бы никогда не стал вновь превращаться в гончую, уже поймав свою добычу."' +
            'В момент смерти его поджидала нежданная возможность.' +
            'Глаза Викира сияют алым, когда он обнажает клыки во тьме.' +
            '"Просто дождись, Хьюго. На этот раз я разорву твою глотку."' +
            'Настало время гончему псу кроваво отомстить своему хозяину.',
        year: '2024',
        genres_id: 8,
        rating: 4.4,
        bookmarks: 128,
        team_id: 1,
        age: 12,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
    },
    {
        id: 3,
        title: 'Пик боевых искусств',
        engTitle: 'peek',
        about: 'На основе одноименного романа. Путь на вершину боевых искусств - одинокое и длинное испытание. ' +
            'Перед лицом невзгод ты должен оставаться сильным и неотступным. Только тогда ты сможешь преодолеть все' +
            ' препятствия и стать по-настоящему сильным. Небесная Башня обучает своих учеников самым суровым образом,' +
            ' чтобы они могли выстоять в мире боевых искусств. Но только из-за одного самого незначительного проступка ' +
            'наш главный герой, Ян Кай, может быть исключен из Небесной Башни!',
        year: '2024',
        genres_id: 4,
        rating: 4.4,
        bookmarks: 28,
        team_id: 2,
        age: 18,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
    },
    {
        id: 4,
        title: 'Месть гончей железной крови / Месть железнокровной Гончей Меча',
        engTitle: '2',
        about: 'Викир был гончим псом семьи Баскервиль, пока однажды его преданность не наградили упавшим лезвием гильотины.' +
            '"Я бы никогда не стал вновь превращаться в гончую, уже поймав свою добычу."' +
            'В момент смерти его поджидала нежданная возможность.' +
            'Глаза Викира сияют алым, когда он обнажает клыки во тьме.' +
            '"Просто дождись, Хьюго. На этот раз я разорву твою глотку."' +
            'Настало время гончему псу кроваво отомстить своему хозяину.',
        year: '2024',
        genres_id: 6,
        rating: 4.4,
        bookmarks: 92,
        team_id: 3,
        age: 6,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
    },
];

//Главы
const chapters = [
    {
        id: 1,
        name: 'ТОМ 1 ГЛАВА 1',
        status: 'open',
        images: ['pic_001.png', 'pic_002.png', 'pic_003.png', 'pic_004.png', 'pic_005.png', 'pic_006.png', 'pic_007.png', 'pic_008.png'],
        likes: 10
    },
    {
        id: 2,
        name: 'ТОМ 1 ГЛАВА 2',
        status: 'close',
        images: ['Без имени-1.png', 'Без имени-2.png', 'Без имени-3.png', 'Без имени-4.png', 'Без имени-5.png', 'Без имени-6.png', 'Без имени-7.png'],
        likes: 40
    },
];

//Команды
const teams = [
    {
        id: 1,
        name: 'Momo',
        img: '/team.jpeg',
        about: 'Дорогой читатель, Мы — совсем начинающая группа переводчиков. Переводим, в основном, жанры фэнтези, боевые искусства, приключения, реже романтику.\n',
        social: {vk: 'https://vk.com/3razmersisek', tg: 'https://t.me/thirdsizeofboobs'}
    },
    {
        id: 2,
        name: 'Ньюби',
        img: '/team.jpeg',
        about: 'Дорогой читатель, Мы — совсем начинающая группа переводчиков. Переводим, в основном, жанры фэнтези, боевые искусства, приключения, реже романтику.\n',
        social: {tg: 'https://t.me/thirdsizeofboobs'}
    },
    {
        id: 3,
        name: '3B25',
        img: '/team.jpeg',
        about: 'Дорогой читатель, Мы — совсем начинающая группа переводчиков. Переводим, в основном, жанры фэнтези, боевые искусства, приключения, реже романтику.\n',
        social: {vk: 'https://vk.com/3razmersisek'}
    },
];

//Хэш-теги
const hashtags = [
    {id: 1, tag: 'Фентези'},
    {id: 2, tag: 'Насилие'},
    {id: 3, tag: 'Алхимия'},
    {id: 4, tag: 'Антигерой'},
    {id: 5, tag: 'Школа'},
    {id: 6, tag: 'Вестерн'},
    {id: 7, tag: 'Фантастика'},
    {id: 8, tag: 'Культивация'},
    {id: 9, tag: 'Романтика'},
    {id: 10, tag: 'ГГ мужчина'},
    {id: 11, tag: 'Сверхъестественное'},
    {id: 12, tag: 'Боевые искусства'},
    {id: 13, tag: 'Экшен'},
    {id: 14, tag: 'Приключения'},
    {id: 15, tag: 'Сёнэн'},
    {id: 16, tag: 'Магия'},
    {id: 17, tag: 'Выживание'},
];

//Жарны
const genres = [
    {id: 1, genre: 'романтика', count: 140},
    {id: 2, genre: 'фентези', count: 14},
    {id: 3, genre: 'драмма', count: 1400},
    {id: 4, genre: 'приключения', count: 1430},
    {id: 5, genre: 'боевик', count: 10},
    {id: 6, genre: 'хоррор', count: 10},
    {id: 7, genre: 'сёдзе', count: 1430},
    {id: 8, genre: 'любовь', count: 1401},
];

//Популярное
const populars = [
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/bgLarge.jpeg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/bgLarge.jpeg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/bgLarge.jpeg', title: 'Я - Программист', genre: 'умный',},
    {img: '/bgLarge.jpeg', title: 'Я - Никон', genre: 'фотоаппарат',},
];

const users = [
    {
        id: 1,
        name: 'andrey',
        password: '123',
        role: 'admin',
    },
    {
        id: 2,
        name: 'lexa',
        password: '123',
        role: 'moderator',
    },
    {
        id: 3,
        name: 'qwerty',
        password: '123',
        role: 'user',
    },
];


// Пользователи
export async function getUserByName(name) {
    const user = users.find(user => user.name === name);
    if (user === undefined) {
        return null
    }
    return user
}

export async function getUserById(id) {

    const user = users.find(user => user.id == id);
    if (user === undefined) return null

    return user

}


// Тайтлы
export function getTitles(count = undefined) {
    if (!count) return titles

    return titles.filter((item, index) => index < count)
}

// export function getTitleName(myName) {
//     return titles.find(item => myName.toString() === item.engTitle).title;
// }

export function getTitle(string) {
    if (titles.find(item => string == item.engTitle) === undefined) {
        return {
            title: 'error',
        };
    }
    return titles.find(item => string == item.engTitle);
}

//Главы
export async function getChapterWithTitle(title_id) {
    noStore();
    const my_title = titles.find(item => item.id === title_id);
    const my_chapters = [];

    my_title.chapters.forEach(title_chapter => {
        my_chapters.push(chapters.find(item => item.id === title_chapter));
    })

    return my_chapters;
}

export function getChaptersWithTitleName(title_name) {
    const chaptersInTitle = titles.find(title => title.engTitle === title_name).chapters; // [1, 2]

    const myArr = {};
    chaptersInTitle.forEach(chapter_id => {
        myArr[chapter_id] = (chapters.find(item => item.id === chapter_id))
    })

    return myArr;
}

export function getChapterById(chapterId) {
    return chapters.find(item => item.id === chapterId)
}

export async function getFirstChapter(title_eng) {
    return titles.find(item => item.engTitle === title_eng).chapters[0]
}

export async function getChapterName(chapter_id) {
    return chapters.find(item => item.id === chapter_id).name
}

//Хэштеги
export async function getHashtags() {
    return hashtags
}

export function getHashtagById(id) {
    return hashtags.find(item => item.id === id)
}

//Команды
export async function getTeamById(id) {
    return teams.find(item => item.id == id)
}

export async function getTeamTitles(team_id) {
    noStore();
    return titles.filter(title => title.team_id === team_id)
}

//Жанры
export async function getGenres() {
    return genres
}

export async function getGenreByTitleId(title_id) {
    const genreInTitle = titles.find(title => title.id === title_id).genres_id
    return genres.find(genre => genre.id === genreInTitle)
}

// Популярное
export async function getAllPopular() {
    return populars
}

export async function getPartPopular() {
    const part = [];

    populars.forEach((value, index) => {
        if (index < 8) {
            part.push(value);
        }
    })

    return part
}