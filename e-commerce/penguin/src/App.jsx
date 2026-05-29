import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppLoader from "./components/AppLoader/AppLoader";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";




function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>
      <AnimatePresence mode="wait">
        {appLoading && <AppLoader />}
      </AnimatePresence>

      {!appLoading && (
        <>
          <ScrollToTop />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<ProtectedRoute> <CartPage /></ProtectedRoute>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>


  );
}

export default App;