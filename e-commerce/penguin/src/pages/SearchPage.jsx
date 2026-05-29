import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FiSearch, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

import useDebounce from "../hooks/useDebounce";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Product/ProductCard";
import ProductQuickView from "../components/Modal/ProductQuickView";
import Loading from "../components/Loading/Loading";

import { setSearchTerm, clearSearchTerm } from "../features/search/searchSlice";

function SearchPage() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const debouncedSearch = useDebounce(searchTerm, 400);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Ürünler alınamadı.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const lowerSearch = debouncedSearch.toLowerCase().trim();

    if (!lowerSearch) return products;

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(lowerSearch) ||
        product.category.toLowerCase().includes(lowerSearch)
      );
    });
  }, [products, debouncedSearch]);

  return (
    <>
      <Header />

      <section className="min-h-screen bg-background py-16">
        <div className="container">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-primary">Ürün Ara</h1>
            <p className="mt-2 text-sm text-slate-600">
              Aradığın ürünü başlık veya kategoriye göre bul.
            </p>
          </div>

          <div className="mb-10 flex items-center gap-3 rounded-2xl border border-primary/20 bg-[#F5EFE6] px-4 py-4">
            <FiSearch size={20} className="text-primary" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              placeholder="Ürün ara..."
              className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
              autoFocus
            />

            {searchTerm && (
              <button
                onClick={() => dispatch(clearSearchTerm())}
                className="text-primary transition hover:text-accent"
                aria-label="Search temizle"
              >
                <FiX size={18} />
              </button>
            )}
          </div>

          {loading && <Loading />}

          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && (
            <>
              <div className="mb-8 flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  {filteredProducts.length} ürün bulundu
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="rounded-2xl bg-[#F5EFE6] p-10 text-center">
                  <p className="text-lg text-slate-700">
                    Aramanla eşleşen ürün bulunamadı.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={() => setSelectedProduct(product)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Footer />
    </>
  );
}

export default SearchPage;