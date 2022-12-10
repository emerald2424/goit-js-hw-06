let counterValue = 0;

const decrButton = document.querySelector('button[data-action="decrement"]');
decrButton.addEventListener('click', () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
})


const incrButton = document.querySelector('button[data-action="increment"]');
incrButton.addEventListener('click', () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
})