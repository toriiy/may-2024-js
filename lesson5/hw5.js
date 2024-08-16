// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => a * b;
console.log(rectangle(10, 23));
console.log(rectangle(22, 16));
console.log('');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
let circle = (r) => PI * r * r;
console.log(circle(5));
console.log(circle(23));
console.log('');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (h, r) => 2 * PI * r * h;
console.log(cylinder(23, 16));
console.log(cylinder(14, 19));
console.log('');

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayPrinter = (array) => {
    for (let item of array) {
        console.log(item);
    }
}

let arrayAny = [3, 'be', -236, false, 0, true, 'fancy', 29];
arrayPrinter(arrayAny);
console.log('');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let printP = (text) => {
    document.write(`
    <p>${text}</p> `);
}

printP('moon');
printP('sun');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let printUl = (liText) => {
    document.write(`
    <ul>
        <li>${liText}</li>
        <li>${liText}</li>
        <li>${liText}</li>
    </ul> `);
}

printUl('list');
printUl('word');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let printUl2 = (liText, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

printUl2('text', 4);
printUl2('cloud', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let listFromArray = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

let arrayAny2 = [23, 0, true, 'data', 23.5, false, 'month', true, 'day'];
listFromArray(arrayAny2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let blockFromArray = (array) => {
    for (let item of array) {
        document.write(`
        <div>
            <p>${item.id}</p>
            <p>${item.name}</p>
            <p>${item.age} years old</p>
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

blockFromArray(users);

// - створити функцію яка повертає найменьше число з масиву

let theSmallestNumber = (array) => {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        if (result > array[i]) {
            result = array[i];
        }
    }
    return result;
}

let numbers = [2, 0, 476, -34, 586, 20, 49, -4, 75, -45];
console.log(theSmallestNumber(numbers));
console.log('');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

let numbers2 = [23, 4, 93, -34, 0, 57, -48, 374, 18];
console.log(sum(numbers2));
console.log('');

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let index1Place = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = index1Place;
        return arr;
    } else {
        return 'index value is bigger than array.length';
    }
}

let numbers3 = [2, 48, 3.45, 0, -37, 586, -364, 69, 15];
console.log(swap(numbers3, 3, 7));
console.log(swap(numbers3, 5, 10));
console.log('');

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
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

console.log(exchange(10000, arrayExchange, 'GBP'));
console.log(exchange(4000, arrayExchange, 'CAD'));