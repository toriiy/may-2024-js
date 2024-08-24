// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepCopy(object) {
    if (object !== undefined && object !== null && object) {
        let arrFunc = [];
        for (const fieldName in object) {
            if (typeof object[fieldName] === 'function') {
                let funcClone = object[fieldName].bind();
                arrFunc.push({funcClone, fieldName});
            }
        }
        console.log(arrFunc);
        let JsonObject = JSON.stringify(object);
        let parsedJsonObj = JSON.parse(JsonObject);
        for (let i = 0; i < arrFunc.length; i++) {
            parsedJsonObj[arrFunc[i].fieldName] = arrFunc[i].funcClone;
        }
        return parsedJsonObj;
    } else {
        return 'incorrect value';
    }
}

let user = {
    id: 1,
    name: 'olena',
    age: 25,
    husband: {
        name: 'yuriy',
        age: 26
    },
    greeting(name) {
        console.log(`hello ${name}, nice to meet you`);
    },
    pet(petName) {
        console.log(`I have a pet called ${petName}`);
    }
};

let deepCopyUser = deepCopy(user);
console.log(deepCopyUser);
console.log(deepCopyUser === user);
console.log(deepCopyUser.husband === user.husband);

console.log(deepCopy(undefined));
console.log(deepCopy(null));
console.log(deepCopy(NaN));

deepCopyUser.greeting('olga');
deepCopyUser.pet('lili');

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
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let coursesArrayWithId = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));
console.log(coursesArrayWithId);
console.log(coursesArrayWithId === coursesAndDurationArray);
