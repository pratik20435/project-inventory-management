// export default function Users() {
//   return (
//     <div>
//       <h1>Users Page</h1>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace the URL with your backend endpoint
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(users, "2");

  return (
    <table className="min-w-full border-collapse border border-gray-200 text-center mt-8 shadow-lg rounded-lg overflow-hidden">
      <thead className="border-b border-gray-200 bg-blue-50">
        <tr>
          <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Image
          </th>
          <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Last name
          </th>
          <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Email
          </th>

          {/* <th className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Actions
          </th> */}
        </tr>
      </thead>
      <tbody className="bg-white">
        {users.map((user: any) => (
          <tr key={user._id} className="border-b hover:bg-gray-50 transition">
            <td className="px-4 py-2 flex justify-center">
              <img
                src={user.imageUrl}
                className="w-16 h-16 object-cover rounded shadow"
                alt={user.firstName}
              />
            </td>
            <td className="px-4 py-2 font-medium text-gray-800">
              {user.firstName}
            </td>
            <td className="px-4 py-2 text-gray-600">{user.lastName}</td>
            <td className="px-4 py-2 text-blue-700 font-semibold">
              {user.email}
            </td>
            {/* <td className="px-4 py-2">{user?.category?.name}</td> */}
            {/* <td className="flex gap-2 justify-center py-2">
              <button
                className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-700 transition"
                onClick={() => handleEditProduct(user)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-700 transition"
                onClick={() => {
                  addToCart(user);
                  notify();
                }}
              >
                Add to cart
              </button>
              <button
                className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-700 transition"
                onClick={async () => {
                  await deleteProduct(user._id);
                  await fetchProducts();
                }}
              >
                Delete
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
