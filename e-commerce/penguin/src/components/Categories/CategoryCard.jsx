import React from 'react'

import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    return (
        <Link
            to={`/category/${encodeURIComponent(category.apiCategory)}`}
            className="group relative block overflow-hidden"
        >
            <div className="relative h-[420px] w-full overflow-hidden">
                <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/35"></div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button className="min-w-[180px] bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-primary">
                        Satın Al
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;