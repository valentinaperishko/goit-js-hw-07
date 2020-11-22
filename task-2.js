const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientItem = document.getElementById('ingredients');
     
const items = ingredients.map(el => {
let item = document.createElement('li');
item.textContent = el;
return item;    
})
ingredientItem.append(...items);

console.log(ingredients);
  
