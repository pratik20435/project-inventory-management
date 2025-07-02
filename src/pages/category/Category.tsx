import { useState } from "react";
import { createNewCategory } from "../../api/Category";





export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [categorydescription, setCategoryDescription] = useState("");

  async function handleAddCategory(){
     await createNewCategory ({
        name : categoryName,
        description: categorydescription,
     });
   console.log("Category added successfully");
  }

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-yellow-900 mb-8 text-center">Category Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Category name"
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Category description"
          className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={categorydescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
        <button
          onClick={handleAddCategory}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Add Category
        </button>
      </div>
    </div>
  </div>
  );
}
