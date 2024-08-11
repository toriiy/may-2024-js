// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед).

let arrayNum2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1.
let i = 0;
while (i < arrayNum2.length) {
    // console.log(arrayNum2[i]);
    i++;
}

// 2.
for (let i = 0; i < arrayNum2.length; i++) {
    // console.log(arrayNum2[i]);
}

// 3.
let j = 1;
while (j < arrayNum2.length) {
    console.log(arrayNum2[j], [j]);
    j += 2;
}
console.log('');

// 4.
for (let i = 1; i < arrayNum2.length; i += 2) {
    console.log(arrayNum2[i], [i]);
}
console.log('');

// 5.
index = 0;
while (index < arrayNum2.length) {
    if (arrayNum2[index] % 2 === 0) {
        console.log(arrayNum2[index]);
    }
    index++;
}
console.log('');

// 6.
for (let i = 0; i < arrayNum2.length; i++) {
    if (arrayNum2[i] % 2 === 0) {
        console.log(arrayNum2[i]);
    }
}
console.log('');

// 7.
for (let num of arrayNum2) {
    if (num % 3 === 0) {
        num = 'okten';
    }
    console.log(num);
}
console.log('');

// 8.
for (let i = arrayNum2.length - 1; i >= 0; i--) {
    console.log(arrayNum2[i]);
}
console.log('');

// 9.
let k = arrayNum2.length - 1;
while (k >= 0) {
    // console.log(arrayNum2[k]);
    k--;
}

for (let i = arrayNum2.length - 1; i >= 0; i--) {
    // console.log(arrayNum2[i]);
}

let a = arrayNum2.length - 1;
while (a >= 0) {
    console.log(arrayNum2[a], [a]);
    a -= 2;
}
console.log('');

for (let i = arrayNum2.length - 1; i >= 0; i -= 2) {
    console.log(arrayNum2[i], [i]);
}
console.log('');

let b = arrayNum2.length - 1;
while (b >= 0) {
    if (arrayNum2[b] % 2 === 0) {
        console.log(arrayNum2[b]);
    }
    b--;
}
console.log('');

for (let i = arrayNum2.length - 1; i >= 0; i--) {
    if (arrayNum2[i] % 2 === 0) {
        console.log(arrayNum2[i]);
    }
}
console.log('');

for (let i = arrayNum2.length - 1; i >= 0; i--) {
    if (arrayNum2[i] % 3 === 0) {
        arrayNum2[i] = 'okten';
    }
    console.log(arrayNum2[i]);
}