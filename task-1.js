const refs = {
    category: document.querySelector('#category'),
    item: document.querySelectorAll('.item'),
}

const countCategory = [...refs.item].map(el => {
    let title = el.children[0].textContent;
    let allItems = el.querySelectorAll('li');
    let number = allItems.length
    let message = `Категория: ${title} \nКоличество элементов: ${number}`
    
    console.log(message);
})