import { useEffect, useState } from "react";
import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../api/Products";
import { getAllCategories } from "../../api/Category";

// import axios from 'axios';

export default function Product() {
  const [listOfCategory, setListOfCategory] = useState<any>([]);
  const [currentProductId, setCurrentProductId] = useState<string>("");
  const [product, setProduct] = useState<any>("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleUpdateProduct() {
    await updateProduct({
      _id: currentProductId,
      name: product,
      description: description,
      price: parseFloat(price),
      category: category,
    });
    setIsEditMode(false);
    setCurrentProductId("");
    setProduct("");
    setDescription("");
    setPrice("");
    setCategory("");
    fetchProducts();
  }

  useEffect(() => {
    async function getCategory() {
      const allCategory = await getAllCategories();
      setListOfCategory(allCategory);
    }

    getCategory();
    getAllProducts();
  }, []);
  function handleEditProduct(product: any) {
    setIsEditMode(true);
    setCurrentProductId(product._id);
    setProduct(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category._id);
  }

  async function handleAddProduct() {
    console.log(product, description, price, category);
    createNewProduct({
      name: product,
      description: description,
      price: parseFloat(price),
      category: category,
    });
    fetchProducts();
  }
  async function fetchProducts() {
    const products = await getAllProducts();
    console.log(products, "products");
    setListOfProducts(products);
  }

  const [listOfProducts, setListOfProducts] = useState<any>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Create New Products</h1>
      <form>
        <input
          type="text"
          name="name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Product Price"
          required
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {listOfCategory.map((cat: any) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        {isEditMode ? (
          <button
            onClick={handleUpdateProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-600"
            type="button"
          >
            Update Product
          </button>
        ) : (
          <button
            onClick={handleAddProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-pink-600"
            type="button"
          >
            Add Product
          </button>
        )}
      </form>
      <table className="min-w-full border-collapse border border-gray-200 text-center">
        <thead className="border-b border-gray-200 bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
          {/* <button
            onClick={() =>
              updateProduct("684fd74b3234057a11d009a5", {
                name: "Updated Product",
                description: "Updated Description",
                price: 99.99,
                category: "Updated Category",
              })
            }
          >
            Update
          </button> */}
          {/* <button onClick={() => updateProduct(product._id, product)}>Update</button> */}
        </thead>
        <tbody>
          {listOfProducts.map((product: any) => (
            <tr key={product._id} className="border">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product?.category?.name}</td>
              <td className="flex gap-2">
                <button
                  className="px-2 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-600"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    await deleteProduct(product._id);
                    await fetchProducts();
                  }}
                >
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
