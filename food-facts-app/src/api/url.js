const baseUrl = "https://world.openfoodfacts.org/";

export async function allProducts(category, page_size) {
  const size = page_size ? `&page_size=${page_size}` : "";
  const allUrl = `${baseUrl}category/${category}${size}.json`;
  try {
    const fetchData = await fetch(allUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function getProductByBarcode(id) {
  const productUrl = `${baseUrl}api/v0/product/${id}.json 
`;
  try {
    const fetchData = await fetch(productUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}

export async function searchProductName(product_name) {
  const searchUrl = `${baseUrl}cgi/search.pl?search_terms=${product_name}&json=true`;
  try {
    const fetchData = await fetch(searchUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}
