let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
console.log(listOfItems);

document.write(`<ul>`);
for (let item of listOfItems) {
    document.write(`
     <li>${item}</li> `)
}
document.write(`</ul>`);