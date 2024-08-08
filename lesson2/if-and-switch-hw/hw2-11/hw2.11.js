let a = 0;
a = undefined;
a = null;
a = '';
a = 25;
let x = a;

switch (x) {
    case x = 0:
        x = 'default';
        console.log(x);
        break;

    case x = undefined:
        x = 'default';
        console.log(x);
        break;

    case x = null:
        x = 'default';
        console.log(x);
        break;

    case x = '':
        x = 'default';
        console.log(x);
        break;

    default:
        console.log('fine');
}