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
        rating: 4.45,
        bookmarks: 408,
        team_id: 2,
        age: 16,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
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
        rating: 4.4,
        bookmarks: 128,
        team_id: 2,
        age: 12,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [16, 17, 18, 19, 20, 21, 22],
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
        rating: 4.4,
        bookmarks: 28,
        team_id: 2,
        age: 18,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [16, 17, 18, 19, 20, 21, 22],
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
        rating: 4.4,
        bookmarks: 92,
        team_id: 2,
        age: 6,
        hashtags: [1, 3, 4, 6, 7],
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
    },
];

//Главы
const chapters = [
    {id: 1, name: 'ТОМ 1 ГЛАВА 1', status: 'open', img: 'pic_001.png', likes: 10},
    {id: 2, name: 'ТОМ 1 ГЛАВА 2', status: 'open', img: 'pic_002.png', likes: 18},
    {id: 3, name: 'ТОМ 1 ГЛАВА 3', status: 'open', img: 'pic_003.png', likes: 25},
    {id: 4, name: 'ТОМ 2 ГЛАВА 4', status: 'open', img: 'pic_004.png', likes: 40},
    {id: 5, name: 'ТОМ 2 ГЛАВА 5', status: 'open', img: 'pic_005.png', likes: 40},
    {id: 6, name: 'ТОМ 2 ГЛАВА 6', status: 'open', img: 'pic_006.png', likes: 40},
    {id: 7, name: 'ТОМ 2 ГЛАВА 7', status: 'open', img: 'pic_007.png', likes: 40},
    {id: 8, name: 'ТОМ 2 ГЛАВА 8', status: 'open', img: 'pic_008.png', likes: 40},
    {id: 9, name: 'ТОМ 3 ГЛАВА 9', status: 'close', img: 'pic_009.png', likes: 40},
    {id: 10, name: 'ТОМ 3 ГЛАВА 10', status: 'close', img: 'pic_010.png', likes: 40},
    {id: 11, name: 'ТОМ 3 ГЛАВА 11', status: 'close', img: 'pic_011.png', likes: 40},
    {id: 12, name: 'ТОМ 3 ГЛАВА 12', status: 'close', img: 'pic_012.png', likes: 40},
    {id: 13, name: 'ТОМ 3 ГЛАВА 13', status: 'close', img: 'pic_013.png', likes: 40},
    {id: 14, name: 'ТОМ 3 ГЛАВА 14', status: 'close', img: 'pic_014.png', likes: 40},
    {id: 15, name: 'ТОМ 3 ГЛАВА 15', status: 'close', img: 'pic_015.png', likes: 40},
    {id: 16, name: 'ТОМ 1 ГЛАВА 1', status: 'open', img: 'Без имени-1.png', likes: 40},
    {id: 17, name: 'ТОМ 1 ГЛАВА 2', status: 'open', img: 'Без имени-2.png', likes: 40},
    {id: 18, name: 'ТОМ 1 ГЛАВА 3', status: 'open', img: 'Без имени-3.png', likes: 40},
    {id: 19, name: 'ТОМ 1 ГЛАВА 4', status: 'close', img: 'Без имени-4.png', likes: 40},
    {id: 20, name: 'ТОМ 1 ГЛАВА 5', status: 'close', img: 'Без имени-5.png', likes: 40},
    {id: 21, name: 'ТОМ 1 ГЛАВА 6', status: 'close', img: 'Без имени-6.png', likes: 40},
    {id: 22, name: 'ТОМ 1 ГЛАВА 7', status: 'close', img: 'Без имени-7.png', likes: 40},
];

//Команды
const teams = [
    {id: 1, name: 'Momo', img: '/team1.png'},
    {id: 2, name: 'Ньюби', img: '/team1.png'},
    {id: 3, name: '3B25', img: '/team1.png'},
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
    {id: 6, genre: 'стетхем', count: 10},
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


// Название
export function getTitles() {
    return titles
}

export  function getTitleName(slug) {
    return titles.find(item => slug === item.engTitle).title
}

export function getTitle(name) {
    return titles.find(item => name.toString() === item.engTitle);
}

//Главы
export function getChapterWithTitle(title) {
    const my_chapters = [];
    title.chapters.forEach(title_chapter => {
        my_chapters.push(chapters.find(item => item.id === title_chapter));
    })
    return my_chapters;
}

export function getFirstChapter(title_eng) {
    return titles.find(item => item.engTitle === title_eng).chapters[0]
}

export function getChapterName(chapter_id) {
    return chapters.find(item => item.id === chapter_id).name
}

//Хэштеги
export function getHashtags() {
    return hashtags
}

export function getHashtagById(id) {
    return hashtags.find(item => item.id === id)
}

//Команды
export function getTeamById(id) {
    return teams.find(item => item.id === id)
}

//Жанры
export function getGenres() {
    return genres
}

// Популярное
export function getAllPopular() {
    return populars
}

export function getPartPopular() {
    const part = [];

    populars.forEach((value, index) => {
        if (index < 8) {
            part.push(value);
        }
    })

    return part
}