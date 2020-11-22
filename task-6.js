
const input = document.getElementById('validation-input');
// console.log(input);
input.addEventListener('blur', (event) => {
// console.log(input.value.length);
// console.log(event.target.dataset.length);
let inputLength = event.target.value.length;
let dataLength = Number(event.target.dataset.length);
if (inputLength === dataLength) {
  input.classList.remove('invalid');
  input.classList.add('valid');
} else if (inputLength === 0) {
  input.classList.remove('invalid');
  input.classList.remove("valid");

} else {
  input.classList.remove('valid');
  input.classList.add('invalid');

}
});



