// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let arrayBooks = [
    {
        title: 'Red Winter',
        pageCount: 320,
        genres: ['fantasy'],
        authors: ['Annette Marie']
    },
    {
        title: 'Six Of Crows',
        pageCount: 544,
        genres: ['fantasy'],
        authors: ['Li Bardugo']
    },
    {
        title: 'The Surgeon',
        pageCount: 350,
        genres: ['thriller', 'criminal', 'suspense'],
        authors: ['Tess Gerritsen']
    },
    {
        title: 'Fable',
        pageCount: 320,
        genres: ['fantasy'],
        authors: ['Adrienne Young']
    },
    {
        title: 'The Night Olivia Fell',
        pageCount: 416,
        genres: ['detective'],
        authors: ['Christina McDonald']
    },
    {
        title: 'The Unhoneymooners',
        pageCount: 400,
        genres: ['romance novel'],
        authors: ['Christina Hobbs', 'Lauren Billings']
    }
];

// -знайти наібльшу книжку.

let theBiggestBook = arrayBooks[0];
for (let i = 1; i < arrayBooks.length; i++) {
    if (arrayBooks[i].pageCount > theBiggestBook.pageCount) {
        theBiggestBook = arrayBooks[i];
    }
}
console.log(theBiggestBook);
console.log('');

// - знайти книжку/ки з найбільшою кількістю жанрів

let theLargestAmountOfGenres = arrayBooks[0];
for (let i = 1; i < arrayBooks.length; i++) {
    if (arrayBooks[i].genres.length > theLargestAmountOfGenres.genres.length) {
        theLargestAmountOfGenres = arrayBooks[i];
    }
}
console.log(theLargestAmountOfGenres);
console.log('');

// - знайти книжку/ки з найдовшою назвою

let theLongestName = arrayBooks[0];
for (let i = 1; i < arrayBooks.length; i++) {
    if (arrayBooks[i].title.length > theLongestName.title.length) {
        theLongestName = arrayBooks[i];
    }
}
console.log(theLongestName);
console.log('');

// - знайти книжку/ки які писали 2 автори

for (let i = 0; i < arrayBooks.length; i++) {
    if (arrayBooks[i].authors.length === 2) {
        console.log(arrayBooks[i]);
    }
}
console.log('');

// - знайти книжку/ки які писав 1 автор

for (let i = 0; i < arrayBooks.length; i++) {
    if (arrayBooks[i].authors.length === 1) {
        console.log(arrayBooks[i]);
    }
}

