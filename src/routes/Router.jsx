import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Footer from "../components/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/carrinho" element={<CartPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
