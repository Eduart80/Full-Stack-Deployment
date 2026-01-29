export async function getProduct() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
    if (!response.ok) throw new Error("API Error! Response was not ok.");
    const data = await response.json();
    // If backend returns { products: [...], pagination: {...} }, return only products
    return Array.isArray(data.products) ? data.products : [];
  } catch(error) {
    console.error(error);
    return [];
  }
}

export async function createProduct(formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error("API Error! Response was not ok.");
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.error(error);
  }
}