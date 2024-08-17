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
