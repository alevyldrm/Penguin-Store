import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/Product/ProductCard";
import ProductQuickView from "../components/Modal/ProductQuickView";

import Loading from "../components/Loading/Loading";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //  FILTER STATES
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [maxPrice, setMaxPrice] = useState(10000);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);

                const res = await axios.get("https://fakestoreapi.com/products");
                setProducts(res.data);
            } catch (err) {
                setError("Ürünler alınamadı.");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    //  CATEGORY LIST
    const categories = [
        "all",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ];

    //  FILTER + SORT LOGIC
    const filteredProducts = useMemo(() => {
        let temp = [...products];

        // CATEGORY
        if (selectedCategory !== "all") {
            temp = temp.filter(
                (p) => p.category === selectedCategory
            );
        }

        // PRICE
        temp = temp.filter((p) => Math.round(p.price * 35) <= maxPrice);

        // SORT
        if (sortOption === "price-low") {
            temp.sort((a, b) => a.price - b.price);
        }

        if (sortOption === "price-high") {
            temp.sort((a, b) => b.price - a.price);
        }

        if (sortOption === "a-z") {
            temp.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (sortOption === "z-a") {
            temp.sort((a, b) => b.title.localeCompare(a.title));
        }

        return temp;
    }, [products, selectedCategory, maxPrice, sortOption]);


    //  Loading.. 

    if (loading) {
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />

            <section className="min-h-screen bg-background py-16">
                <div className="container">

                    <h1 className="mb-10 text-3xl font-bold text-primary">
                        Tüm Ürünler
                    </h1>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
                        <div className="space-y-6">

                            {/* CARD */}
                            <div className="rounded-2xl bg-[#F5EFE6] p-4">

                                {/* CATEGORY */}
                                <div>
                                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                                        Kategori
                                    </h3>

                                    <div className="space-y-3">

                                        {categories.map((cat) => (
                                            <label
                                                key={cat}
                                                className="flex cursor-pointer items-center gap-3 text-sm text-slate-700"
                                            >
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    checked={selectedCategory === cat}
                                                    onChange={() => setSelectedCategory(cat)}
                                                    className="h-4 w-4 accent-primary"
                                                />

                                                <span className="capitalize">
                                                    {cat === "all" ? "Tümü" : cat}
                                                </span>
                                            </label>
                                        ))}

                                    </div>
                                </div>

                                {/* PRICE */}
                                <div className="mt-8">
                                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                                        Fiyat
                                    </h3>

                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                        className="w-full accent-primary"
                                    />

                                    <div className="mt-2 flex justify-between text-xs text-slate-600">
                                        <span>₺0</span>
                                        <span>₺{maxPrice}</span>
                                    </div>
                                </div>

                                {/* SORT */}
                                <div className="mt-8">
                                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                                        Sırala
                                    </h3>

                                    <div className="flex flex-col gap-2">

                                        <button
                                            onClick={() => setSortOption("price-low")}
                                            className={`text-left text-sm ${sortOption === "price-low"
                                                ? "font-semibold text-primary"
                                                : "text-slate-600"
                                                }`}
                                        >
                                            Fiyat (Artan)
                                        </button>

                                        <button
                                            onClick={() => setSortOption("price-high")}
                                            className={`text-left text-sm ${sortOption === "price-high"
                                                ? "font-semibold text-primary"
                                                : "text-slate-600"
                                                }`}
                                        >
                                            Fiyat (Azalan)
                                        </button>

                                        <button
                                            onClick={() => setSortOption("a-z")}
                                            className={`text-left text-sm ${sortOption === "a-z"
                                                ? "font-semibold text-primary"
                                                : "text-slate-600"
                                                }`}
                                        >
                                            A-Z
                                        </button>

                                        <button
                                            onClick={() => setSortOption("z-a")}
                                            className={`text-left text-sm ${sortOption === "z-a"
                                                ? "font-semibold text-primary"
                                                : "text-slate-600"
                                                }`}
                                        >
                                            Z-A
                                        </button>

                                    </div>
                                </div>

                            </div>

                        </div>

                        {/*  PRODUCTS */}
                        <div>

                            <p className="mb-6 text-sm text-slate-600">
                                {filteredProducts.length} ürün bulundu
                            </p>

                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id}
                                          product={product}
                                          onQuickView={() => setSelectedProduct(product)}/>
                                ))}
                            </div>

                        </div>

                    </div>

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

export default ProductsPage;