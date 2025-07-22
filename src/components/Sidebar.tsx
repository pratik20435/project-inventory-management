
import { Link, Navigate, NavLink, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  function handleSignOut(){
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="min-h-screen w-60 bg-gray-100 border-r border-gray-200 shadow-lg px-6 py-8 flex flex-col">
      <Link to="/dashboard" className="text-2xl font-bold text-blue-700 mb-10 tracking-wide">Dashboard</Link>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="product"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-red-600 text-white shadow"
                : "text-red-700 hover:bg-red-100 hover:text-red-800"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="users"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-yellow-400 text-white shadow"
                : "text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800"
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="category"
          end
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-green-600 text-white shadow"
                : "text-green-700 hover:bg-green-100 hover:text-green-800"
            }`
          }
        >
          Categories
        </NavLink>
      <button onClick={handleSignOut} className="mt-90 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition font-semibold ">SignOut</button>
      </nav>
    </div>
  );
}