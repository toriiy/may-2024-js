// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let idText = document.getElementById('text');
let btn1 = document.getElementById('btn-1');

btn1.onclick = function () {
    idText.style.display = 'none';
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input1 = document.getElementsByName('age')[0];
let btn2 = document.getElementById('btn-2');

btn2.onclick = function () {
    if (input1.value > 0 && input1.value < 18) {
        let p1 = document.createElement('p');
        p1.innerText = 'watch cartoon';
        document.body.appendChild(p1);
    } else if (input1.value >= 18 && input1.value < 123) {
        let p2 = document.createElement('p');
        p2.innerText = 'you are adult';
        document.body.appendChild(p2);
    } else {
        let p3 = document.createElement('p');
        p3.innerText = 'invalid value';
        document.body.appendChild(p3);
    }
}

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms['f1'];

form1.onsubmit = function (ev) {
    ev.preventDefault();
    let div = document.createElement('div');
    div.innerText = `${this.name.value} ${this.surname.value} - ${this.age2.value} years`;
    div.classList.add('block1');
    document.body.appendChild(div);
}


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div2 = document.getElementById('div2');

window.onload = function () {
    let item = localStorage.getItem('number') || 0;
    let numberItem = +item + 1;
    newItem = numberItem.toString();
    div2.innerText = newItem;
    localStorage.setItem('number', newItem);
}

// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let convertor = document.getElementsByName('convertor')[0];

convertor.oninput = function () {
    let ib = this.value * 2.2046;
    let stringIb = ib.toString();
    let p = document.createElement('p');
    p.innerText = stringIb + 'Ib';
    document.body.appendChild(p);
}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

let users = [{name: 'oleg', age: 24}];

localStorage.setItem('users', JSON.stringify(users));

function addToLocalStorage(arrayName, objToAdd) {
    let array = localStorage.getItem(arrayName);
    if (array) {
        let parsedArray = JSON.parse(array);
        if (typeof objToAdd === 'object' && !Array.isArray(objToAdd)) {
            parsedArray.push(objToAdd);
        }
        localStorage.setItem(arrayName, JSON.stringify(parsedArray));
    } else {
        console.log('this array does not exist');
    }
}

addToLocalStorage('users', {name: 'anna', age: 23});
addToLocalStorage('clientChecks', [234, 87, 556]);
addToLocalStorage('users', [456, 34, 98]);

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let btn3 = document.getElementById('btn-3');
let inputRow = document.getElementById('row');
let inputColumn = document.getElementById('column');
let inputText = document.getElementById('inner-text');

btn3.onclick = function () {
    let table = document.createElement('table');
    table.classList.add('table');
    document.body.appendChild(table);

    for (let i = 0; i < inputRow.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let i = 0; i < inputColumn.value; i++) {
            let td = document.createElement('td');
            td.innerText = inputText.value;
            td.classList.add('td');
            tr.appendChild(td);
        }
    }
}




