const arr = [1, 2, 3, 4, 5]

const item = document.createElement("li");
console.log(item);
const example = document.getElementById('example');
example.style.listStyle = 'none';
example.removeAttribute('style');

console.log(example);


arr.map(num => {
    let item = document.createElement('li');
    item.textContent = num;
    example.append(item);
    } )