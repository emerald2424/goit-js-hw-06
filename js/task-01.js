const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const categories = document.querySelectorAll('h2');
categories.forEach(category => {
    console.log(`Category: ${category.textContent}`);
    
    const elements = category.nextElementSibling.children;
    console.log(`Elements: ${elements.length}`);
})
