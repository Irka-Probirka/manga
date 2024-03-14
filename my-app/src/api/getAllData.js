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
        chapters: [1, 2, 3, 4],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
        backgroundLayer: '/peekLayer.jpeg',
    },
    {
        id: 2,
        title: 'Месть гончей железной крови / Месть железнокровной Гончей Меча',
        engTitle: 'lex',
        about: 'Викир был гончим псом семьи Баскервиль, пока однажды его преданность не наградили упавшим лезвием гильотины.' +
            '"Я бы никогда не стал вновь превращаться в гончую, уже поймав свою добычу."' +
            'В момент смерти его поджидала нежданная возможность.' +
            'Глаза Викира сияют алым, когда он обнажает клыки во тьме.' +
            '"Просто дождись, Хьюго. На этот раз я разорву твою глотку."' +
            'Настало время гончему псу кроваво отомстить своему хозяину.',
        year: '2024',
        rating: 4.4,
        team_id: 2,
        hashtags: [1, 3, 4, 6, 7],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
        backgroundLayer: '/bgLayer.png',
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
        team_id: 2,
        hashtags: [1, 3, 4, 6, 7],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
        backgroundLayer: '/bgLayer.png',
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
        team_id: 2,
        hashtags: [1, 3, 4, 6, 7],
        background: '/image.jpg',
        backgroundLarge: '/bgLarge.jpeg',
        backgroundLayer: '/bgLayer.png',
    },
];

//Главы
const chapters = [
    {id: 1, name: 'ТОМ 1 ГЛАВА 1', status: 'open', likes: 10},
    {id: 2, name: 'ТОМ 1 ГЛАВА 2', status: 'open', likes: 18},
    {id: 3, name: 'ТОМ 1 ГЛАВА 3', status: 'close', likes: 25},
    {id: 4, name: 'ТОМ 2 ГЛАВА 4', status: 'close', likes: 40},
];

//Команды
const teams = [
    {id: 1, name: 'Momo', img: '/team1.png'},
    {id: 2, name: 'Ньюби', img: '/team1.png'},
    {id: 3, name: '3B25', img: '/team1.png'},
];

//Хэш-теги
const hashtags = [
    {id: 1, tag: 'монстры'},
    {id: 2, tag: 'насилие'},
    {id: 3, tag: 'секс'},
    {id: 4, tag: 'наркотики'},
    {id: 5, tag: 'школа'},
    {id: 6, tag: 'секс в школе'},
    {id: 7, tag: 'я не гей, честно'},
    {id: 8, tag: 'монстры'},
    {id: 9, tag: 'насилие'},
    {id: 10, tag: 'секс'},
    {id: 11, tag: 'школа'},
    {id: 12, tag: 'секс в школе'},
    {id: 13, tag: 'я не гей, честно'},
    {id: 14, tag: 'насилие'},
    {id: 15, tag: 'секс'},
    {id: 16, tag: 'школа'},
    {id: 17, tag: 'секс в школе'},
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
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
    {img: '/readNow.jpg', title: 'Я - Злодейка', genre: 'комикс',},
    {img: '/readNow.jpg', title: 'Я - Андрей', genre: 'человек',},
    {img: '/readNow.jpg', title: 'Я - Программист', genre: 'умный',},
    {img: '/readNow.jpg', title: 'Я - Никон', genre: 'фотоаппарат',},
];


// Название
export function getTitles() {
    return titles
}

export function getTitle(name) {
    return titles.find(value => name.toString() === value.engTitle);
}

//Главы
export function getChapterWithTitle(title) {
    const my_chapters = [];
    title.chapters.forEach(title_chapter => {
        my_chapters.push(chapters.find(item => item.id === title_chapter));
    })
    return my_chapters;
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