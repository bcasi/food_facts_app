const baseUrl = "https://world.openfoodfacts.org/";

export async function allProducts(category, page) {
  const pageNo = page ? `&page=${page}` : "";
  const allUrl = `${baseUrl}category/${category}${pageNo}.json`;

  const fetchData = await fetch(allUrl);
  if (!fetchData.ok) {
    if (fetchData.status === 429) {
      throw new Error("Too many requests. You’ve reached the rate limit.");
    }
    throw new Error(`An error occurred: ${fetchData.statusText}`);
  }
  const res = await fetchData.json();
  return res;
}

// export async function getProductByBarcode(id) {
//   const productUrl = `${baseUrl}api/v0/product/${id}.json`;

//   try {
//     const fetchData = await fetch(productUrl);
//     const res = await fetchData.json();
//     return res;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function getProductByBarcode(id) {
  const productUrl = `${baseUrl}api/v0/product/${id}`;

  try {
    const fetchData = await fetch(productUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.error("Error fetching product:", e);
  }
}

export async function searchProductName(product_name) {
  const searchUrl = `${baseUrl}cgi/search.pl?search_terms=${product_name}&json=true`;
  try {
    const fetchData = await fetch(searchUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    if (e.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error fetching product:", e);
    }
  }
}
