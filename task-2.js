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
 
ingredients.forEach(el => {
let item = document.createElement('li');
item.innerHTML = el;

refs.ingredients.append(item);
    
})
console.log(ingredients);
  

