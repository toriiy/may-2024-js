// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleArea(sideANum, sideBNum) {
    return sideANum * sideBNum;
}

let result1 = rectangleArea(10, 23);
console.log(result1);
console.log('');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;

function circleArea(rNum) {
    return PI * rNum * rNum;
}

let result2 = circleArea(5);
console.log(result2);
console.log('');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(hNum, rNum) {
    return 2 * PI * rNum * hNum;
}

let result3 = cylinderArea(8, 15);
console.log(result3);
console.log('');

// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array) {
    for (const element of array) {
        console.log(element);
    }
}

let arrayAny = [34, true, 0, 'moon', -238, false];
printArray(arrayAny);
console.log('');

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function printTagP(text) {
    document.write(`
    <p>${text}</p> `);
}

printTagP('hello');
printTagP('world');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function printList(listItem) {
    document.write(`
    <ul>
        <li>${listItem}</li>
        <li>${listItem}</li>
        <li>${listItem}</li>
    </ul> `);
}

printList('item');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function printList2(liText, numOfLi) {
    document.write(`<ul>`);
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

printList2('work', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function listOfArray(array) {
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let arrayAny1 = [-348, true, 'sun', false, 0, 56, 'flower'];
listOfArray(arrayAny1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function arrayOfUsers(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`
        <div>
        <p>Id - ${array[i].id}</p>
        <p>Name - ${array[i].name}</p>
        <p>Age- ${array[i].age}</p>
        </div> `);
    }
}

let users = [
    {
        id: 1,
        name: 'Anna',
        age: 23
    },
    {
        id: 2,
        name: 'Bogdan',
        age: 34
    },
    {
        id: 3,
        name: 'Svitlana',
        age: 19
    },
    {
        id: 4,
        name: 'Andriy',
        age: 26
    },
    {
        id: 5,
        name: 'Olena',
        age: 30
    },
    {
        id: 6,
        name: 'Oleg',
        age: 21
    }
];

arrayOfUsers(users);

// - створити функцію яка повертає найменьше число з масиву

function theSmallestNumOfArray(array) {
    let theSmallestNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < theSmallestNum) {
            theSmallestNum = array[i];
        }
    }
    return theSmallestNum;
}

let arrayNum = [3, -10, 0, 236, 23.4, -238, 37, 8, 45.2];
console.log(theSmallestNumOfArray(arrayNum));
console.log('');

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arrayNum2 = [23, 45, 0, -459, 56, 239, 4, 59, 586];
console.log(sum(arrayNum2));
console.log('');

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length) {
        let index1Space = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = index1Space;
        return arr;
    } else {
        return 'index is bigger than arr.length';
    }
}

let arrayNum3 = [23, 68, -347, 0, 23.4, -38, 49];
console.log(swap(arrayNum3, 2, 6));
console.log(swap(arrayNum3, 4, 8));
console.log('');

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (exchangeCurrency === currencyValues[i].currency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

let arrayExchange = [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 44},
    {currency: 'PLN', value: 10},
    {currency: 'GBP', value: 52},
    {currency: 'CAD', value: 29}];
console.log(exchange(5000, arrayExchange, 'EUR'));
console.log(exchange(17000, arrayExchange, 'PLN'));