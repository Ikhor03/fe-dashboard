import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dasboard from "./pages/Dashboard";
import Register from "./pages/Register";
import AddUser from "./pages/addUser";
import NoPage from "./pages/NoPage"
import UpdateUser from "./pages/updateUser";
import AddProduct from "./pages/addProduct";
import UpdateProduct from "./pages/updateProduct";
import Products from "./pages/Products";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<Dasboard />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="user/add" element={<AddUser />} />
        <Route path="user/edit/:id" element={<UpdateUser />} />
        <Route path="product/add" element={<AddProduct />} />
        <Route path="product/edit/:id" element={<UpdateProduct />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
