const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

// const list = ingredients.map(ingredient => {
//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');
  
//   // console.log(li)
// }).join('');

// document.querySelector('#ingredients').innerHTML = list;



ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');

  document.querySelector('#ingredients').append(li)
});
