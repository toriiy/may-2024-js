let array = ['sun', 'sky', 'grass', 'blue', 'book', 'table', 'cloud', 'tree', 'window', 'lamp'];
console.log(array);

for (let i = 0; i < array.length; i++) {
    const word = array[i];
    document.write(`
    <div>
    <p>${word} - ${[i]}</p>
    </div> `);
}
