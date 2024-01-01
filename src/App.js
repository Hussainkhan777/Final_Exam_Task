import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import HeroSection from "./components/HeroSection";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HeroSection />}></Route>
        <Route path={"/products/:productId"} element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
