// import { useState } from "react";
// import { createNewCategory } from "../../api/Category";





// export default function Category() {
//   const [categoryName, setCategoryName] = useState("");
//   const [categorydescription, setCategoryDescription] = useState("");


//   const [listOfCategories, setListOfCategories] = useState([]);

//   async function handleAddCategory(){
//      await createNewCategory ({
//         name : categoryName,
//         description: categorydescription,
//      });
//    console.log("Category added successfully");
//   }


// //   return (
// //      <div className="min-h-screen flex items-center justify-center bg-gray-900">
// //     <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
// //       <h1 className="text-2xl font-bold text-yellow-900 mb-8 text-center">Category Page</h1>
// //       <div>
// //         <input
// //           type="text"
// //           placeholder="Enter Category name"
// //           className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
// //           value={categoryName}
// //           onChange={(e) => setCategoryName(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Enter Category description"
// //           className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
// //           value={categorydescription}
// //           onChange={(e) => setCategoryDescription(e.target.value)}
// //         />
// //         <button
// //           onClick={handleAddCategory}
// //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
// //         >
// //           Add Category
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// //   );
// // }
// // ...existing code...
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-2xl font-bold text-yellow-900 mb-8 text-center">Category Page</h1>
//         <div>
//           {/* ...form inputs and button... */}
//         </div>
//         {/* Category List Table */}
//         <div className="mt-10">
//           <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">Category List</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-200 rounded-xl shadow bg-white">
//               <thead className="bg-gradient-to-r from-yellow-100 via-blue-100 to-purple-100">
//                 <tr>
//                   <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tl-xl">Category</th>
//                   <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tr-xl">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {listOfCategories?.length === 0 ? (
//                   <tr>
//                     <td colSpan={2} className="px-6 py-6 text-center text-gray-500">
//                       No categories found
//                     </td>
//                   </tr>
//                 ) : (
//                   listOfCategories.map((cat, idx) => (
//                     <tr key={cat._id || idx} className="hover:bg-blue-50 transition">
//                       <td className="px-6 py-4 border-b font-medium text-gray-800">{cat.name}</td>
//                       <td className="px-6 py-4 border-b text-gray-600">{cat.description}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { createNewCategory } from "../../api/Category";

// export default function Category() {
//   const [categoryName, setCategoryName] = useState("");
//   const [categorydescription, setCategoryDescription] = useState("");
//   const [listOfCategories, setListOfCategories] = useState([]);

//   // Fetch categories from backend
//   useEffect(() => {
//     fetch("http://localhost:3000/api/category")
//       .then((res) => res.json())
//       .then((data) => setListOfCategories(data))
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   async function handleAddCategory() {
//     await createNewCategory({
//       name: categoryName,
//       description: categorydescription,
//     });
//     console.log("Category added successfully");
//     // Optionally, refetch categories after adding
//     fetch("http://localhost:3000/api/category")
//       .then((res) => res.json())
//       .then((data) => setListOfCategories(data));
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-2xl font-bold text-yellow-900 mb-8 text-center">Category Page</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Category name"
//             className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter Category description"
//             className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             value={categorydescription}
//             onChange={(e) => setCategoryDescription(e.target.value)}
//           />
//           <button
//             onClick={handleAddCategory}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
//           >
//             Add Category
//           </button>
//         </div>
//         <div className="mt-10">
//           <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">Category List</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-200 rounded-xl shadow bg-white">
//               <thead className="bg-gradient-to-r from-yellow-100 via-blue-100 to-purple-100">
//                 <tr>
//                   <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tl-xl">Category</th>
//                   <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tr-xl">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {listOfCategories?.length === 0 ? (
//                   <tr>
//                     <td colSpan={2} className="px-6 py-6 text-center text-gray-500">
//                       No categories found
//                     </td>
//                   </tr>
//                 ) : (
//                   listOfCategories.map((cat, idx) => (
//                     <tr key={cat._id || idx} className="hover:bg-blue-50 transition">
//                       <td className="px-6 py-4 border-b font-medium text-gray-800">{cat.name}</td>
//                       <td className="px-6 py-4 border-b text-gray-600">{cat.description}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { createNewCategory } from "../../api/Category";

export default function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [categorydescription, setCategoryDescription] = useState("");
  const [listOfCategories, setListOfCategories] = useState([]);

  // Fetch categories from backend
  const fetchCategories = () => {
    fetch("http://localhost:3000/api/category")
      .then((res) => res.json())
      .then((data) => setListOfCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  async function handleAddCategory() {
    if (!categoryName || !categorydescription) return;
    const result = await createNewCategory({
      name: categoryName,
      description: categorydescription,
    });
    if (result && result._id) {
      setCategoryName("");
      setCategoryDescription("");
      fetchCategories(); // Refetch after adding
    } else {
      alert("Failed to add category");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-fuchsia-300">
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
        <div className="mt-10">
          <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">Category List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl shadow bg-white">
              <thead className="bg-gradient-to-r from-yellow-100 via-blue-100 to-purple-100">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tl-xl">Category</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider rounded-tr-xl">Description</th>
                </tr>
              </thead>
              <tbody>
                {listOfCategories?.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="px-6 py-6 text-center text-gray-500">
                      No categories found
                    </td>
                  </tr>
                ) : (
                  listOfCategories.map((cat, idx) => (
                    <tr key={cat._id || idx} className="hover:bg-blue-50 transition">
                      <td className="px-6 py-4 border-b font-medium text-gray-800">{cat.name}</td>
                      <td className="px-6 py-4 border-b text-gray-600">{cat.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}