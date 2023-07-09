import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dasboard from "./pages/Dashboard";
import Register from "./pages/Register";
import AddUser from "./pages/addUser";
import NoPage from "./pages/NoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<Dasboard />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard/add" element={<AddUser />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
