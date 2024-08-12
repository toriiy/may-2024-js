// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arrayEmpty = [];
arrayEmpty[0] = 56;
arrayEmpty[1] = false;
arrayEmpty[2] = 'sun';
arrayEmpty[3] = 'moon';
arrayEmpty[4] = -347;
arrayEmpty[5] = 0;
arrayEmpty[6] = true;
arrayEmpty[7] = 49.3;
arrayEmpty[8] = 'flower';
arrayEmpty[9] = true;

for (const element of arrayEmpty) {
    console.log(element);
}
console.log('');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}
console.log('');
document.write(`<br>`);

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}