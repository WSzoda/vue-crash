console.log('jd');

const countAddButton = document.getElementById('plusButton');
const countMinusButton = document.getElementById('minusButton');
const countElement = document.getElementById('count');
let count = 0;

countElement.innerText = count;

countAddButton.addEventListener('click', () => {
    count++;
    countElement.innerText = count;
})

countMinusButton.addEventListener('click', () => {
    count--;
    countElement.innerText = count;
})