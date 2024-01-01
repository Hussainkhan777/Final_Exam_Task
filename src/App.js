import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<AllProducts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
