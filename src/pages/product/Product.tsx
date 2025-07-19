import { useEffect, useState } from "react";
import {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  uploadProductImage,
} from "../../api/Products";
import { getAllCategories } from "../../api/Category";
import { Modal } from "@mantine/core";
import { Button } from "@mantine/core";
import { FileInput } from "@mantine/core";
import useStore from "../../store/Store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

// import axios from 'axios';

export default function Product() {
  const [listOfCategory, setListOfCategory] = useState<any>([]);
  const [currentProductId, setCurrentProductId] = useState<string>("");
  const [product, setProduct] = useState<any>("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalopen] = useState(false);
  const [productImageUrl, setproductImageUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s"
  );

  const addToCart = useStore((state) => state.addToCart);
  const notify = () => toast("Added to cart successfully");
  const navigate = useNavigate();

  async function handleUpdateProduct() {
    await updateProduct({
      _id: currentProductId,
      name: product,
      description: description,
      price: parseFloat(price),
      category: category,
      imageUrl: productImageUrl,
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
    navigate(`/dashboard/product-edit/${product._id}`);
  }

  async function handleAddProduct() {
    navigate("/dashboard/product-add");
  }
  async function handleFileChange(file: any) {
    // const file= e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const data = await uploadProductImage(formData);
    console.log(data);
    setproductImageUrl(data.filename);
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
      {/* <h1>Create New Products
      </h1>
      <Button
      className="flex"
       variant="filled" onClick={() => setIsModalopen(true)}>
        Button product modal
      </Button> */}
      <div className="flex items-center justify-start gap-21 mt-4 mb-2">
        <h1 className="text-2xl font-bold">Create New Products</h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow justify-end"
          variant="filled"
          onClick={() => setIsModalopen(true)}
        >
          Button product modal
        </Button>
      </div>
      <table className="min-w-full border-collapse border border-gray-200 text-center mt-8 shadow-lg rounded-lg overflow-hidden">
        <thead className="border-b border-gray-200 bg-blue-50">
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {listOfProducts.map((product: any) => (
            <tr
              key={product._id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2 flex justify-center">
                <img
                  src={product.imageUrl}
                  className="w-16 h-16 object-cover rounded shadow"
                  alt={product.name}
                />
              </td>
              <td className="px-4 py-2 font-medium text-gray-800">
                {product.name}
              </td>
              <td className="px-4 py-2 text-gray-600">{product.description}</td>
              <td className="px-4 py-2 text-blue-700 font-semibold">
                ${product.price}
              </td>
              <td className="px-4 py-2">{product?.category?.name}</td>
              <td className="flex gap-2 justify-center py-2">
                <button
                  className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-700 transition"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-700 transition"
                  onClick={() => {
                    addToCart(product);
                    notify();
                  }}
                >
                  Add to cart
                </button>
                <button
                  className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700 transition"
                  onClick={async () => {
                    await deleteProduct(product._id);
                    await fetchProducts();
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit
                </button>
                <button
                className="px-2 py-1 rounded-md  text-white bg-red-600"
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
      </table> */}{" "}
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalopen(false)}
        title={
          <span className="text-xl font-semibold text-gray-800">
            {isEditMode ? "Edit Product" : "Create New Product"}
          </span>
        }
        overlayProps={{
          className: "bg-black bg-opacity-40",
        }}
        classNames={{
          body: "bg-white rounded-lg shadow-lg p-6",
        }}
      >
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Product Name"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product Description"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product Price"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            name="modelNumber"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            placeholder="Model Number"
            required
            className="border border-purple-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">Select Category</option>
            {listOfCategory.map((cat: any) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <FileInput
            label="Product Image"
            placeholder="Upload product image"
            onChange={handleFileChange}
            className="w-full"
            classNames={{
              input:
                "border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition",
              label: "mb-1 text-gray-700 font-medium",
            }}
          />

          <div className="flex gap-2 mt-4">
            {isEditMode ? (
              <button
                onClick={handleUpdateProduct}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                type="button"
              >
                Update Product
              </button>
            ) : (
              <button
                onClick={handleAddProduct}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                type="button"
              >
                Add Product
              </button>
            )}
            <button
              onClick={() => setIsModalopen(false)}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
