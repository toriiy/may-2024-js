let time = +prompt('Напишіть число від 0 до 59');

if (time > 0 && time <= 15) {
    console.log('Перша чверть години');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть години');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть години');
} else if (time > 45 && time <= 59) {
    console.log('Четверта чверть години');
} else {
    console.log('???');
}
