import fetch from 'node-fetch'

export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then(response => response.json())
    .then(response => console.log(response));
}

export async function getProductsFromCategoryAndQuery( categoryId = '', query = '' ) {
  const category = categoryId === '' ? '': `category=$${categoryId}`;
  const id = query === '' ? '': `query=$${categoryId}`;
  const joinElement = categoryId === '' ? '': '&';

  
  fetch(`https://api.mercadolibre.com/sites/MLB/search?${category}${joinElement}${id}`)
    .then(response => response.json())
    .then(response => console.log(response));
}