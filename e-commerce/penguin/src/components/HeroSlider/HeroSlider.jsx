import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";
import slider4 from "../../assets/slider4.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        image: slider1,
        alt: "Women's collection",
        position: "object-[center_30%]",
        label: "WOMEN",
        link: "category/women's%20clothing",
    },
    {
        image: slider2,
        alt: "Men's collection",
        position: "object-[center_35%]",
        label: "MEN",
        link: "/category/men's%20clothing",
    },
    {
        image: slider3,
        alt: "New season",
        position: "object-center",
        label: "NEW SEASON",
        link: "/products",
    },
    {
        image: slider4,
        alt: "Best sellers",
        position: "object-[center_90%]",
        label: "BEST SELLERS",
        link: "/products",
    },
];

const HeroSlider = () => {
    return (
        <div className="w-full h-[90vh]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Link to={slide.link} className="block w-full h-full group">
                            <div className="relative w-full h-full overflow-hidden">

                                {/* IMAGE */}
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className={`w-full h-full object-cover ${slide.position} transition-transform duration-700 group-hover:scale-[1.04]`}
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-500" />

                                {/* MINI LABEL */}
                                <div className="absolute bottom-8 right-8 border border-white/60 mb-5 px-5 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm bg-white/10">
                                    {slide.label}
                                </div>

                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
