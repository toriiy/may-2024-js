// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray);

for (const course of coursesArray) {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let h2 = document.createElement('h2');
    h2.innerText = course.title;

    let spanMonth = document.createElement('span');
    spanMonth.innerText = `${course.monthDuration} month`;
    spanMonth.classList.add('month');

    let spanHours = document.createElement('span');
    spanHours.innerText = `${course.hourDuration} hours`;
    spanHours.classList.add('hours');

    let ul = document.createElement('ul');

    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    div.append(h2, spanMonth, spanHours, ul);
}

// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let divCollection = document.getElementsByClassName('width');
console.log(divCollection);

let theBiggestHeight = 0;
for (const div of divCollection) {
    if (div.offsetHeight > theBiggestHeight) {
        theBiggestHeight = div.offsetHeight;
    }
}
for (const div of divCollection) {
    div.style.height = theBiggestHeight + 'px';
}



