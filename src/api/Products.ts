interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  _id?: string;
  imageUrl: string;
}

const accessToken = localStorage.getItem("token") ?? "";
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
      imageUrl: product.imageUrl,
    }),
  });
}
export async function getAllProducts() {
  console.log(accessToken, "@accessToken in getAllProducts");
  const response = await fetch("http://localhost:3000/products", {
    headers: {
      authorization: accessToken,
    },
  });
  const data = response.json();
  return data;
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

export async function uploadProductImage(formData: FormData) {
  const response = await fetch("http://localhost:3000/product-image", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
}

export async function getProductById(id: string) {
  const response = await fetch(`http://localhost:3000/product/${id}`, {
    headers: {
      authorization: accessToken,
    },
  });
  const data = await response.json();
  return data;
}
