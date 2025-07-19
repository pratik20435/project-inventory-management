import { useParams } from "react-router";
import ProductForm from "../../components/ProductForm";
import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../api/Products";

export default function ProductEdit() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (!productId) {
      console.error("Product ID is required");
      return;
    }
    getProductById(productId).then((product) => {
      setProductDetails(product);
    });
  }, [productId]);

  const handleEditProduct = async (values: any, _id: string) => {
    const { product, description, price, category, imageUrl } = values;
    console.log(values);
    await updateProduct({
      _id: _id,
      name: product,
      description: description,
      price: parseFloat(price),
      category: category,
      imageUrl: imageUrl,
    });
  };

  console.log(productDetails, "productDetails in ProductEdit");

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w">
    //     <h1>Edit Product</h1>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-300 to-purple-300">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 drop-shadow-lg tracking-wide">
          Edit Product
        </h2>
        <ProductForm
          handleSubmit={handleEditProduct}
          defaultValues={productDetails}
        />
      </div>
    </div>
  );
}
