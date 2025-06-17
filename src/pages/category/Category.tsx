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
    <div>
      <h1>Category Page</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Category name"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Category description"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          value={categorydescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
}
