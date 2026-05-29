import React from 'react'

import CategoryCard from "./CategoryCard";
import { categoryData } from "./categoryData";

function CategorySection() {
    return (
        <section className="bg-background py-16">
            <div className="container">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary">KEŞFET</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Kategorilere göz at ve ilgini çeken ürünleri keşfet.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {categoryData.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategorySection;