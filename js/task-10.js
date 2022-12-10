function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const boxes = document.querySelector('#boxes');
// const input = document.querySelector('input');
// let amount;
// input.addEventListener('input', (evt) => amount = evt.currentTarget.value);

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     let divBox = `<div style = "width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor};"></div>`;
    
//     boxes.insertAdjacentHTML('beforeend', divBox);

//   }
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// document.querySelector('button[data-create]').addEventListener('click', createBoxes);
// document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);

