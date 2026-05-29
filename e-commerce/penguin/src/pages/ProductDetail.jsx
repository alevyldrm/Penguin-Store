import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetail() {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );

                setProduct(response.data);
            } catch (err) {
                setError("Ürün detayı alınamadı.");
            } finally {
                setLoading(false);
            }
        };

        getProductDetail();
    }, [id]);

    if (loading) {
        return (
            <>
                <Header />
                <Loading />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <section className="bg-background py-16">
                    <div className="container">
                        <p className="text-red-500">{error}</p>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Header />
            <section className="bg-background py-16">
                <div className="container">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                        {/* LEFT */}
                        <div className="flex min-h-[500px] items-center justify-center bg-[#EAE0CF] p-10">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-[400px] w-full object-contain"
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col justify-center">
                            <p className="mb-3 text-sm uppercase tracking-widest text-slate-500">
                                {product.category}
                            </p>

                            <h1 className="text-3xl font-bold leading-tight text-primary">
                                {product.title}
                            </h1>

                            <p className="mt-4 text-2xl font-bold text-primary">
                                ₺{Math.round(product.price * 35)}
                            </p>

                            <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                                <span>⭐ {product.rating?.rate}</span>
                                <span>•</span>
                                <span>{product.rating?.count} değerlendirme</span>
                            </div>

                            <p className="mt-6 leading-7 text-slate-700">
                                {product.description}
                            </p>

                            <div className="mt-8 flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-background transition hover:bg-secondary"
                                >
                                    Sepete Ekle
                                </button>

                                <button className="border border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-background">
                                    Hemen Al
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <Footer />
        </>
    );
}

export default ProductDetail;