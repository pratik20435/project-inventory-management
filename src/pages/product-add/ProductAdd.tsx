import { createNewProduct, getAllProducts } from "../../api/Products";
import ProductForm from "../../components/ProductForm";


export default function ProductAdd() {
  const handleAddProduct = (values: any) => {
    const { product, description, price, category, imageUrl } = values;
    console.log(values);
    createNewProduct({
      name: product,
      description: description,
      price: parseFloat(price),
      category: category,
      imageUrl: imageUrl,
    });
    // getAllProducts();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8 drop-shadow-lg">
          Add Product
        </h2>
    {/* <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w"> */}
        <ProductForm handleSubmit={handleAddProduct} />
      </div>
    </div>
  );
}
