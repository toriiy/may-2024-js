// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
console.log(string1);
console.log(string1.length);

let string2 = 'lorem ipsum';
console.log(string2);
console.log(string2.length);

let string3 = 'javascript is cool';
console.log(string3);
console.log(string3.length);

console.log('');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1UpperCase = string1.toUpperCase();
console.log(string1UpperCase);

let string2UpperCase = string2.toUpperCase();
console.log(string2UpperCase);

let string3UpperCase = string3.toUpperCase();
console.log(string3UpperCase);

console.log('');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(string1UpperCase.toLowerCase());
console.log(string2UpperCase.toLowerCase());
console.log(string3UpperCase.toLowerCase());

console.log('');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str);
let cleanString = str.substring(str.indexOf('d'), 13);
console.log(cleanString);

console.log('');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    if (typeof str === "string" && str.length !== 0) {
        return str.split(' ');
    } else if (typeof str === "string" && str.length === 0) {
        return 'string is empty';
    } else {
        return 'incorrect value';
    }
}

let str1 = 'Ревуть воли як ясла повні';
console.log(stringToArray(str1));
console.log('');

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let stringArray = numbers.map(function (value) {
    return value + '';
});

console.log(stringArray);
console.log(numbers);
console.log('');

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [23, -34, 128, 0, 465, -64, 93];

function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    } else {
        return 'wrong direction';
    }
    return array;
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'dfjhjkdjf'));

console.log('');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedArray = coursesAndDurationArray.toSorted((course1, course2) => course2.monthDuration - course1.monthDuration);
console.log(sortedArray);

let filteredArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredArray);

let mappedArray = coursesAndDurationArray.map((course, index) => {
    let obj = {
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
    return obj;
});

console.log(mappedArray);
console.log(coursesAndDurationArray);

console.log('');


// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

let cards = [
    {
        cardSuit: 'spade',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 6,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 6,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 7,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 8,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 9,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 10,
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'clubs',
        value: 6,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 7,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 8,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 9,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 10,
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    }
];

let spadeAce = cards.find(function (card) {
    if (card.value === 'ace' && card.cardSuit === 'spade') {
        return card;
    }
});
console.log(spadeAce);

let allSixCards = cards.filter(card => card.value === 6);
console.log(allSixCards);

let allRedCards = cards.filter(card => card.color === 'red');
console.log(allRedCards);

let allDiamondsCards = cards.filter(card => card.cardSuit === 'diamond');
console.log(allDiamondsCards);

let allClubsCards = cards.filter(card => card.cardSuit === 'clubs');
console.log(allClubsCards);
let cardsBiggerThanNine = allClubsCards.filter(function (card) {
    if (card.value > 8 || typeof card.value === 'string') {
        return card;
    }
});
console.log(cardsBiggerThanNine);
console.log('');

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reducedCards = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reducedCards);
console.log('');

// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let modulesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(modulesWithSass);

let modulesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(modulesWithDocker);

