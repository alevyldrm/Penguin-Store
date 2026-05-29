import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import ProductCard from "../components/Product/ProductCard";
import ProductQuickView from "../components/Modal/ProductQuickView";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

function CategoryPage() {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const decodedCategory = decodeURIComponent(categoryName);

  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${decodedCategory}`
        );

        setProducts(response.data);
      } catch (err) {
        setError("Kategori ürünleri alınamadı.");
      } finally {
        setLoading(false);
      }
    };

    getCategoryProducts();
  }, [decodedCategory]);

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
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
        <WhyChooseUs />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="bg-background py-16">
        <div className="container">
          <div className="mb-10">
            <h2 className="text-3xl font-bold uppercase text-primary">
              {decodedCategory}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              {products.length} ürün bulundu
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default CategoryPage;