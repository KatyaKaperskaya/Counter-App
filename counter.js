//Кнопка +1Бассейн и +2Бассейн
const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolButton = document.getElementById('addOnePoolButton');
const addTwoPoolButton = document.getElementById('addTwoPoolButton');
const resetButton = document.getElementById('resetButton');

console.log(addOnePoolButton.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolButton.addEventListener('click', function() {
    counter = counter + parseInt(addOnePoolButton.dataset.pools);
    counterEl.innerText = counter;
});

addTwoPoolButton.addEventListener('click', function() {
    counter = counter + parseInt(addTwoPoolButton.dataset.pools);
    counterEl.innerText = counter;
});

//Кнопка Сбросить
resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;
    counterEl.innerText = counter;
});
