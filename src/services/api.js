export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resultJson = await result.json();

  return resultJson;
}

export async function getProductsFromCategoryAndQuery( categoryId = '', query = '' ) {
  const category = categoryId === '' ? '': `category=$${categoryId}`;
  const id = query === '' ? '': `query=$${categoryId}`;
  const joinElement = categoryId === '' ? '': '&';

  
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?${category}${joinElement}${id}`);
  const resultJson = await result.json();
  
  return resultJson;
}
