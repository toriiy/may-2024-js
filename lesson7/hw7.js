// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

let user1 = new User(1, 'Anna', 'Kovalenko', 'annakoval@gmail.com', '098 5784 432');
users.push(user1);

let user2 = new User(2, 'Bogdan', 'Melnyk', 'melnykb@gmail.com', '095 6573 823');
users.push(user2);

let user3 = new User(3, 'Olena', 'Tkachuk', 'olenatkachyk@gmail.com', '098 2534 723');
users.push(user3);

let user4 = new User(4, 'Andriy', 'Vovk', 'vovkandriy34@gmail.com', '066 3742 834');
users.push(user4);

let user5 = new User(5, 'Oleg', 'Boyko', 'boykooleg55@gmail.com', '097 3464 234');
users.push(user5);

let user6 = new User(6, 'Olga', 'Bondarenko', 'bondarenkoo256@gmail.com', '097 2365 823');
users.push(user6);

let user7 = new User(7, 'Yuriy', 'Oliynyk', 'yuraoliynuk36@gmaol.com', '095 3745 964');
users.push(user7);

let user8 = new User(8, 'Yaryna', 'Shevchyk', 'yarynashev348@gmail.com', '098 3476 568');
users.push(user8);
let user9 = new User(9, 'Anatoliy', 'Bondar', 'bondaranatoliy@gmail.com', '097 6784 045');
users.push(user9);

let user10 = new User(10, 'Iryna', 'Lysenko', 'lusenkoira775@gmail.com', '099 5638 352');
users.push(user10);
console.log(users);

console.log('');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenId = users.filter(user => user.id % 2 === 0);
console.log(evenId);

console.log('');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((user1, user2) => user1.id - user2.id);
console.log(sortedUsers);

console.log('');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

let client1 = new Client(1, 'Anna', 'Kovalenko', 'annakoval@gmail.com', '098 5784 432', ['milk', 'cheese', 'water']);
clients.push(client1);

let client2 = new Client(2, 'Bogdan', 'Melnyk', 'melnykb@gmail.com', '095 6573 823', ['nuts', 'ice cream', 'shampoo', 'bread']);
clients.push(client2);

let client3 = new Client(3, 'Olena', 'Tkachuk', 'olenatkachyk@gmail.com', '098 2534 723', ['meat', 'bread']);
clients.push(client3);

let client4 = new Client(4, 'Andriy', 'Vovk', 'vovkandriy34@gmail.com', '066 3742 834', ['milk', 'meat', 'beer', 'soap']);
clients.push(client4);

let client5 = new Client(5, 'Oleg', 'Boyko', 'boykooleg55@gmail.com', '097 3464 234', ['shampoo', 'soap']);
clients.push(client5);

let client6 = new Client(6, 'Olga', 'Bondarenko', 'bondarenkoo256@gmail.com', '097 2365 823', ['meat', 'butter', 'soda', 'nuts', 'apples']);
clients.push(client6);

let client7 = new Client(7, 'Yuriy', 'Oliynyk', 'yuraoliynuk36@gmaol.com', '095 3745 964', ['shower gel']);
clients.push(client7);

let client8 = new Client(8, 'Yaryna', 'Shevchyk', 'yarynashev348@gmail.com', '098 3476 568', ['bread', 'soda', 'ice cream']);
clients.push(client8);

let client9 = new Client(9, 'Anatoliy', 'Bondar', 'bondaranatoliy@gmail.com', '097 6784 045', ['bread']);
clients.push(client9);

let client10 = new Client(10, 'Iryna', 'Lysenko', 'lusenkoira775@gmail.com', '099 5638 352', ['pasta', 'bread', 'vinegar', 'olive oil']);
clients.push(client10);
console.log(clients);

console.log('');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClients);

console.log('');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    };

    this.info = function () {
        console.log(`
        model - ${this.model},
        manufacturer - ${this.manufacturer},
        year of manufacture - ${this.yearOfManufacture},
        max speed - ${this.maxSpeed},
        engine capacity - ${this.engineCapacity}`);
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`new max speed - ${this.maxSpeed}`);
    };

    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
        console.log(`new year of manufacture is ${this.yearOfManufacture}`);
    };

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car1 = new Car('BMW X5', 'BMW', '2018', '240km/h', '4395');
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed('300km/h');
car1.info();
car1.changeYear(2017);
car1.info();
car1.addDriver({name: 'Oleg', age: 27});
console.log(car1);

console.log('');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
    };

    info() {
        console.log(`
        model - ${this.model},
        manufacturer - ${this.manufacturer},
        year of manufacture - ${this.yearOfManufacture},
        max speed - ${this.maxSpeed},
        engine capacity - ${this.engineCapacity} `);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`new max speed is ${this.maxSpeed}`);
    };

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
        console.log(`new year of manufacture - ${this.yearOfManufacture}`);
    };

    addDriver(driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car2 = new Car2('Hyundai Accent', ' Hyundai Motor Company', '2015', '190km/h', '1591');
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed('210km/h');
car2.info();
car2.changeYear(2020);
car2.info();
car2.addDriver({name: 'Anna', age: 23});
console.log(car2);

console.log('');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

cinderellas = [new Cinderella('Oksana', 19, 37),
    new Cinderella('Maria', 30, 39),
    new Cinderella('Kateryna', 20, 39.5),
    new Cinderella('Olga', 22, 36.5),
    new Cinderella('Sofia', 26, 37),
    new Cinderella('Yuliya', 23, 36),
    new Cinderella('Anna', 24, 38),
    new Cinderella('Iryna', 21, 38.5),
    new Cinderella('Olena', 22, 39),
    new Cinderella('Inna', 21, 35)
];
console.log(cinderellas);

class Prince {

    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Charming', 28, 36);
console.log(prince);


for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(cinderella);
    }
}

let prince2 = new Prince('Charming2', 25, 35);
console.log(prince2);
let cinderellaForPrince2 = cinderellas.find(cinderella => cinderella.footSize === prince2.shoeSize);
console.log(cinderellaForPrince2);

console.log('');

// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myIterator = function (callbackFunc) {
    for (let item of this) {
        callbackFunc(item);
    }
}

cinderellas.myIterator(cinderella => console.log(cinderella));

Array.prototype.myFilter = function (condition) {
    let array = [];
    for (let item of this) {
        if (condition(item)) {
            array.push(item);
        }
    }
    return array;
}

let myFilter = cinderellas.myFilter(cinderella => cinderella.age > 23);
console.log(myFilter);

