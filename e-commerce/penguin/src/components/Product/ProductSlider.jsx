import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import ProductQuickView from "../Modal/ProductQuickView";

import "swiper/css";
import "swiper/css/navigation";

function ProductSlider({ products }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="relative">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto">
                        <ProductCard
                            product={product}
                            onQuickView={() => setSelectedProduct(product)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedProduct && (
                <ProductQuickView
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
}

export default ProductSlider;