import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import ProductSlider from "./ProductSlider";

function BestSellingProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            try {
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

    if (loading) {
        return (
            <section className="bg-background py-16">
                <div className="container">
                    <h2 className="mb-3 text-3xl font-bold text-primary">
                        Çok Satılanlar
                    </h2>

                    <div className="mt-5 flex items-center gap-3">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#DFD0B8] border-t-[#948979]" />

                        <p className="text-sm text-slate-600">
                            Ürünler yükleniyor...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-background py-16">
                <div className="container">
                    <p className="text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-background py-16">
            <div className="container">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary">
                        Çok Satılanlar
                    </h2>
                    <p className="mt-2 ml-1 text-m text-slate-600">
                        Öne çıkan ürünleri keşfet.
                    </p>
                </div>

                <ProductSlider products={products} />
            </div>
        </section>
    );
}
export default BestSellingProducts;