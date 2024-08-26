// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, inventore?';
div.style.backgroundColor = 'whitesmoke';
document.body.appendChild(div);

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);


// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let words = ['Main', 'Products', 'About us', 'Contacts'];

let list = document.createElement('ul');
document.body.appendChild(list);

for (const word of words) {
    let li = document.createElement('li');
    li.innerText = word;
    list.appendChild(li);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    let divCourse = document.createElement('div');
    divCourse.innerText = `${course.title} - ${course.monthDuration} month`;
    document.body.appendChild(divCourse);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    let divCourse2 = document.createElement('div');
    divCourse2.classList.add('item');
    document.body.appendChild(divCourse2);

    let h1Course2 = document.createElement('h1');
    h1Course2.classList.add('heading');
    h1Course2.innerText = course.title;

    let pCourse2 = document.createElement('p');
    pCourse2.classList.add('description');
    pCourse2.innerText = `${course.monthDuration} month`;

    divCourse2.append(h1Course2, pCourse2);
}