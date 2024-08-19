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
        this.order = [order];
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

