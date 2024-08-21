// 1. Створити пустий масив та :
//      a. заповнити його 50 парними числами за допомоги циклу.
//      b. заповнити його 50 непарними числами за допомоги циклу.
//      c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//      d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrayEven = [];

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        arrayEven[arrayEven.length] = i;
    }
}
console.log(arrayEven);

let arrayOdd = [];

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        arrayOdd[arrayOdd.length] = i;
    }
}
console.log(arrayOdd);

let arrayRandom1 = [];

for (let i = 0; i < 20; i++) {
    Math.floor(Math.random() * 100);
    arrayRandom1[arrayRandom1.length] = Math.floor(Math.random() * 100);
}
console.log(arrayRandom1);

let arrayRandom2 = [];

for (let i = 0; i < 20; i++) {
    arrayRandom2[arrayRandom2.length] = Math.floor(Math.random() * 731 + 8);
}
console.log(arrayRandom2);
console.log('');
// 2. Вивести за допомогою console.log кожен третій елемен

let arr = [23, 94, 0, -35, 93, 272, 833, 485, 28, 4, 823, 1, 92, 723, 37, -57];
console.log(arr);

for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
}
console.log('');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log('');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let array = [];

for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
        array[array.length] = arr[i];
    }
}
console.log(array);
console.log('');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i - 1]);
    }
}
console.log('');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let numbers = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);
console.log(sum / numbers.length);
console.log('');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let array2 = [238, 0, 293, false, -34, 'sun', 72, true, 3];
let arr2 = [];

for (let number of array2) {
    arr2[arr2.length] = number * 5;
}
console.log(arr2);
console.log('');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let array3 = [0, 82, true, 'sun', 95, false, 238, 22, 5, 'moon', 'word', 384, true];
let arr3 = [];

for (let item of array3) {
    if (typeof item === 'number') {
        arr3[arr3.length] = item;
    }
}
console.log(arr3);
console.log('');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
// TO BE CONTINUED .....
// ]

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];

