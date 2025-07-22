import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";
import Login from "./pages/login/login";
import PrivateComponent from "./components/PrivateComponent";
import Signup from "./pages/signup/Signup";
import AuthComponent from "./components/AuthComponent";
import ProductDetails from "./pages/product-details/ProductDetails";
import ProductAdd from "./pages/product-add/ProductAdd";
import ProductEdit from "./pages/product-edit/ProductEdit";
import AdminDashboard from "./pages/admin/AdminDashboard";
export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateComponent Components={Dashboard} />}
      >
        <Route index element={<AdminDashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="product-add" element={<ProductAdd />} />
        <Route path="product-edit/:productId" element={<ProductEdit />} />

        <Route path="product/edit/:id" element={<ProductDetails />} />
        {/* <Route path="product-details/:id" element={<ProductDetails />} /> */}
        {/* <Route path="product/add" element={<ProductDetails />} /> */}
        {/* <Route path="product/edit/:id" element={<ProductDetails />} /> */}
        <Route path="users" element={<Users />} />
        <Route path="category" element={<Category />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
      <Route path="/login" element={<AuthComponent Components={Login} />} />
      <Route path="/signup" element={<AuthComponent Components={Signup} />} />
    </Routes>
  );
}
