const refs = {
    category: document.querySelector('#category'),
    item: document.querySelectorAll('.item'),
}
let messageSecond = `В списке ${refs.item.length} категории`
console.log(messageSecond);

refs.item.forEach(el => {
    let title = el.children[0].textContent;
    let allItems = el.querySelectorAll('li');
    let number = allItems.length
    let message = `Категория: ${title} \nКоличество элементов: ${number}`
    let messageSecond = `В списке ${number} категории`
    
    console.log(message);
    
})