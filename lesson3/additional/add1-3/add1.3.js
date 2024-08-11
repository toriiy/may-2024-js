// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrayNum = [3, -6, 56.7, 0, 38, -394, 74, 100, -239, 14];
for (const number of arrayNum) {
    console.log(number);
}
console.log('');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrayString = ['sun', 'moon', 'glass', 'cloud', 'tree', 'flower', 'sand', 'mushroom', 'rain', 'star'];
for (const string of arrayString) {
    console.log(string);
}
console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arrayAny = ['moon', false, -249, 56, true, 0, 'flower', 'rain', true, 14.7];
for (const element of arrayAny) {
    console.log(element);
}
console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrayAny2 = [false, 'sun', 'grass', -346, true, 0, false, 'tree', 156.2, 'star'];

for (let i = 0; i < arrayAny2.length; i++) {
    if (typeof arrayAny2[i] === 'boolean') {
        console.log(arrayAny2[i]);
    }
}
console.log('');

for (let i = 0; i < arrayAny2.length; i++) {
    if (typeof arrayAny2[i] === 'number') {
        console.log(arrayAny2[i]);
    }
}
console.log('');

for (let i = 0; i < arrayAny2.length; i++) {
    if (typeof arrayAny2[i] === 'string') {
        console.log(arrayAny2[i]);
    }
}