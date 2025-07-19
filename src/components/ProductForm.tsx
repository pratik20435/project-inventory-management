import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { getAllCategories } from "../api/Category";
import { FileInput } from "@mantine/core";
import { uploadProductImage } from "../api/Products";

export default function ProductForm(props: any) {
  const { handleSubmit, defaultValues } = props;

  const [listOfCategory, setListOfCategory] = useState<any[]>([]);

  useEffect(() => {
    async function getCategory() {
      const allCategory = await getAllCategories();
      setListOfCategory(allCategory);
    }

    getCategory();
  }, []);

  useEffect(() => {
    if (defaultValues) {
      form.setValues({
        product: defaultValues.name,
        description: defaultValues.description,
        price: defaultValues.price,
        imageUrl: defaultValues.imageUrl,
        category: defaultValues.category._id,
      });
    }
  }, [defaultValues]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      product: defaultValues?.name || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || "",
      imageUrl: defaultValues?.imageUrl || "",
      category: defaultValues?.category._id || "",
    },

    validate: {
      product: (value) => (value ? null : "Product name is required"),
      description: (value) => (value ? null : "Description is required"),
      price: (value) => (value ? null : "Price is required"),
      imageUrl: (value) => (value ? null : "Image is required"),
      category: (value) => (value ? null : "Category is required"),
    },
  });

  async function handleFileChange(file: any) {
    // const file= e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const data = await uploadProductImage(formData);
    console.log(data);
    form.setFieldValue("imageUrl", data.filename);
  }

  return (
    <div>
      <form
        onSubmit={form.onSubmit((values) =>
          handleSubmit(values, defaultValues?._id || "")
        )}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="product"
          key={form.key("product")}
          {...form.getInputProps("product")}
          placeholder="Product Name"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="text"
          name="description"
          key={form.key("description")}
          {...form.getInputProps("description")}
          placeholder="Product Description"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="number"
          name="price"
          key={form.key("price")}
          {...form.getInputProps("price")}
          placeholder="Product Price"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <select
          name="category"
          key={form.key("category")}
          {...form.getInputProps("category")}
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
        <button
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          type="submit"
        >
          Submit
        </button>

        {/* <div className="flex gap-2 mt-4">
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
        </div> */}
      </form>
    </div>
  );
}
