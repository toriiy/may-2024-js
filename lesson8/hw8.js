// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function deepCopy(object) {
    if (object !== undefined && object !== null && object) {
        let stringObject = JSON.stringify(object);
        return JSON.parse(stringObject);
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
    // greeting(){
    //     console.log(`hi, my name is ${user.name}`);
    // }
};

let deepCopyUser = deepCopy(user);
console.log(deepCopyUser);
console.log(deepCopyUser === user);
console.log(deepCopyUser.husband === user.husband);

console.log(deepCopy(undefined));
console.log(deepCopy(null));
console.log(deepCopy(NaN));




