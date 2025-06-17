interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  _id?: string;
}

export async function createNewProduct(product: Product) {
  await fetch("http://localhost:3000/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
    }),
  });
}
export async function getAllProducts() {
  const response = await fetch("http://localhost:3000/products");
  return response.json();
}

export async function deleteProduct(id: string) {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function updateProduct(product: Product) {
  const response = await fetch(
    `http://localhost:3000/products/${product._id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}
