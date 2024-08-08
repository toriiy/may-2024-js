let day = +prompt("Введіть число від 1 до 31");

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя декада');
} else {
    console.log('???');
}
