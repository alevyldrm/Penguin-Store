import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    clearCart,
} from "../features/cart/cartSlice";
import Header from "../components/Header/Header";

function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalPrice = cartItems.reduce((total, item) => {
        return total + Math.round(item.price * 35) * item.quantity;
    }, 0);

    return (
        <>
            <Header />

            <section className="min-h-screen bg-background py-16">
                <div className="container">
                    <div className="mb-10 flex items-center justify-between">
                        <h1 className="text-3xl font-bold text-primary">Sepetim</h1>

                        {cartItems.length > 0 && (
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-background"
                            >
                                Sepeti Temizle
                            </button>
                        )}
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="rounded-2xl bg-[#F5EFE6] p-10 text-center">
                            <p className="text-lg text-slate-700">Sepetiniz şu an boş.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-6 rounded-2xl bg-[#F5EFE6] p-5 md:flex-row"
                                    >
                                        <div className="flex h-[180px] w-full items-center justify-center rounded-xl bg-[#EAE0CF] p-4 md:w-[180px]">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                                                    {item.category}
                                                </p>

                                                <h3 className="mt-2 text-lg font-semibold text-primary">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 text-xl font-bold text-primary">
                                                    ₺{Math.round(item.price * 35)}
                                                </p>
                                            </div>

                                            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center rounded-xl border border-primary">
                                                    <button
                                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                                        className="px-4 py-2 text-primary"
                                                    >
                                                        -
                                                    </button>

                                                    <span className="px-4 py-2 font-medium text-primary">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                                        className="px-4 py-2 text-primary"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => dispatch(removeFromCart(item.id))}
                                                    className="text-sm font-medium text-red-500 transition hover:opacity-80"
                                                >
                                                    Ürünü Sil
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="h-fit rounded-2xl bg-[#F5EFE6] p-6">
                                <h2 className="text-2xl font-bold text-primary">Sipariş Özeti</h2>

                                <div className="mt-6 flex items-center justify-between text-slate-700">
                                    <span>Toplam Ürün</span>
                                    <span>
                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center justify-between text-lg font-bold text-primary">
                                    <span>Toplam</span>
                                    <span>₺{totalPrice}</span>
                                </div>

                                <button className="mt-6 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-background transition hover:bg-secondary">
                                    Alışverişi Tamamla
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default CartPage;