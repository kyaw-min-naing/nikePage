import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
