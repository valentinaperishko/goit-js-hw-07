const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 const refs = {
    ingredients: document.getElementById('ingredients'),
    item: document.createElement('li'),

 } 

 
ingredients.map(el => {
let item = document.createElement('li');
item.textContent = el;

refs.ingredients.append(item);
    
})
console.log(ingredients);
  

