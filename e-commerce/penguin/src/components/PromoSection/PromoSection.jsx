import React from 'react'

import { Link } from "react-router-dom";
import promoImage from "../../assets/promo-image.webp"

function PromoSection() {
    return (
        <section className="bg-background py-16">
            <div className="container">
                <div className="grid grid-cols-1 items-center overflow-hidden bg-[#F5EFE6] lg:grid-cols-2">

                    {/* LEFT - IMAGE */}
                    <div className="h-full">
                        <img
                            src={promoImage}
                            alt="Promo Banner"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* RIGHT - CONTENT */}
                    <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Yeni Koleksiyon
                        </p>

                        <h2 className="mt-4 text-4xl font-bold leading-tight text-primary">
                            Günlük tarzınız için modern parçalar
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
                            Yeni sezon ürünlerini keşfet. Günlük stiline uyum sağlayacak modern
                            ve dikkat çekici parçalarla tarzını tamamla.
                        </p>

                        <div className="mt-8">
                            <Link
                                to="/products"
                                className="inline-block bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-background transition hover:bg-secondary"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PromoSection;