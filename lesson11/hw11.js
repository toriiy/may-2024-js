// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let div1 = document.getElementById('main-container');
document.body.appendChild(div1);


fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(value => console.log(value));

fetch('https://dummyjson.com/carts?limit=50')
    .then(response => response.json())
    .then(value => {
        let {carts} = value;
        for (const cart of carts) {
            let div2 = document.createElement('div');
            div2.classList.add('block');
            div1.appendChild(div2);
            let h2 = document.createElement('h2');
            h2.innerText = `id: ${cart.id}`;
            let p1 = document.createElement('p');
            p1.innerText = 'Products:'
            div2.append(h2, p1);
            let {products} = cart;
            for (const product of products) {
                let h4 = document.createElement('h4');
                h4.innerText = `id: ${product.id} - ${product.title}`;
                let p1 = document.createElement('p');
                p1.innerText = `Price: ${product.price}$`;

                let p2 = document.createElement('p');
                p2.innerText = `Quantity: ${product.quantity}`;

                let p3 = document.createElement('p');
                p3.innerText = `Total: ${product.total}$`;

                let p4 = document.createElement('p');
                p4.innerText = `Discount - ${product.discountPercentage}%`;

                let p5 = document.createElement('p');
                p5.innerText = `Discounted total - ${product.discountedTotal}$`;

                let img = document.createElement('img');
                img.src = product.thumbnail;

                div2.append(h4, p1, p2, p3, p4, p5, img)
            }

            let heading = document.createElement('h3');
            heading.innerText = `Total: ${cart.total}$`;

            let heading2 = document.createElement('h3');
            heading2.innerText = `Discounted total - ${cart.discountedTotal}$`;

            let heading3 = document.createElement('h3');
            heading3.innerText = `user id: ${cart.userId}`;

            let heading4 = document.createElement('h3');
            heading4.innerText = `Total products - ${cart.totalProducts}`;

            let heading5 = document.createElement('h3');
            heading5.innerText = `Total quantity - ${cart.totalQuantity}`;

            div2.append(heading, heading2, heading3, heading4, heading5);
        }
    })

