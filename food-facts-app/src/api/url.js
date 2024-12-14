const baseUrl = "https://world.openfoodfacts.org/";

export async function allProducts() {
  const allUrl = `${baseUrl}category/{category}.json`;
  try {
    const fetchData = await fetch(allUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}
export async function allProducts2() {
  const allUrl = `${baseUrl}products.json`;
  try {
    const fetchData = await fetch(allUrl);
    const res = await fetchData.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}
