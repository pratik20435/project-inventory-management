import {Route, Routes} from 'react-router';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/product/Product';
import Users from './pages/users/Users';
import Category from './pages/category/Category';
import Login from './pages/login/login';
import PrivateComponent from './components/PrivateComponent';
import Signup from './pages/signup/Signup';
import AuthComponent from './components/AuthComponent';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/dashboard" element={<PrivateComponent Components = {Dashboard} />}>
                <Route path="product" element={<Product />} />
                <Route path="users" element={<Users />} />
                <Route path="category" element={<Category />} />

            </Route>
            <Route path="/login" element = {<AuthComponent Components = {Login} />} />
             <Route path="/signup" element = {<AuthComponent Components = {Signup} />} />
        </Routes>
    );
}