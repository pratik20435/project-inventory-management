import { NavLink } from "react-router";



export default function Sidebar() {
  return (
    <div className="sidebar border border-gray-500 w-2xs p-3 flex flex-col">
      <h1 className="text-lg font-semibold text-gray-700 mb-6">Sidebar contents</h1>

      <NavLink to="product" end>
         Product
      </NavLink>
       <NavLink to="users" end>
         go to users
      </NavLink>
      <NavLink to="category" end>
         go to category
      </NavLink>


    </div>
  );
}