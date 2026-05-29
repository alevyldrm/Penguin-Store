import React from 'react'

import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from "react-icons/fi";

function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: <FiTruck size={28} />,
            title: "Ücretsiz Kargo",
            description: "Belirli tutar üzerindeki siparişlerde ücretsiz teslimat fırsatı.",
        },
        {
            id: 2,
            icon: <FiShield size={28} />,
            title: "Güvenli Ödeme",
            description: "Tüm ödemelerde güvenli ve hızlı işlem altyapısı.",
        },
        {
            id: 3,
            icon: <FiRefreshCw size={28} />,
            title: "Kolay İade",
            description: "Memnun kalmadığınız ürünlerde kolay iade süreci.",
        },
        {
            id: 4,
            icon: <FiHeadphones size={28} />,
            title: "7/24 Destek",
            description: "Her zaman ulaşabileceğiniz destek hizmeti.",
        },
    ];

    return (
        <section className="bg-background py-10">
            <div className="container">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col items-center px-6 pb-10 text-center"
                        >
                            <div className="text-primary">{feature.icon}</div>

                            <h3 className="mt-4 text-lg font-bold text-primary">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;