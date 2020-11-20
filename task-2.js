const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientItem = document.getElementById('ingredients');
    
let items = [];
 
ingredients.map(el => {
let item = document.createElement('li');
item.textContent = el;
items.push(item);    
})
ingredientItem.append(...items);

console.log(ingredients);
  
