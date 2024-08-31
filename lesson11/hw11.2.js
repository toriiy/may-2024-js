// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let div1 = document.getElementById('main block');

fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(value => console.log(value));

fetch('https://dummyjson.com/recipes?limit=50')
    .then(response => response.json())
    .then(value => {
        let {recipes} = value;
        for (const recipe of recipes) {
            let div2 = document.createElement('div');
            div1.appendChild(div2);

            let h2 = document.createElement('h2');
            h2.innerText = `id: ${recipe.id}`;

            let title = document.createElement('h2');
            title.innerText = recipe.name;

            let h3 = document.createElement('h3');
            h3.innerText = 'Ingredients:'

            let ul = document.createElement('ul');
            div2.append(h2, title, h3, ul);

            let {ingredients} = recipe;

            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }

            let heading = document.createElement('h3');
            heading.innerText = 'Instructions';
            div2.appendChild(heading);

            let {instructions} = recipe;

            for (const instruction of instructions) {
                let p = document.createElement('p');
                p.innerText = instruction;
                div2.appendChild(p);
            }

            let p2 = document.createElement('p');
            p2.innerText = `Preparation time - ${recipe.prepTimeMinutes} minutes`;

            let p3 = document.createElement('p');
            p3.innerText = `Cook time ${recipe.cookTimeMinutes} minutes`;

            let p4 = document.createElement('p');
            p4.innerText = `Servings: ${recipe.servings}`;

            let p5 = document.createElement('p');
            p5.innerText = `Difficulty: ${recipe.difficulty}`;

            let p6 = document.createElement('p');
            p6.innerText = `Cuisine: ${recipe.cuisine}`;

            let p7 = document.createElement('p');
            p7.innerText = `Calories per serving - ${recipe.caloriesPerServing}`;

            let p8 = document.createElement('p8');
            p8.innerText = `Tags:`;

            div2.append(p2, p3, p4, p5, p6, p7, p8);

            let {tags} = recipe;

            for (const tag of tags) {
                let p = document.createElement('p');
                p.innerText = tag;
                div2.appendChild(p);
            }
        }
    });