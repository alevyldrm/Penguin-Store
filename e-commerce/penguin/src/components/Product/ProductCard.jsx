import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";

function ProductCard({ product, onQuickView }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const shortTitle =
        product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title;

    const handleAddToCart = () => {
        dispatch(addToCart(product));

        toast.custom((t) => (
            <div className="flex items-center gap-4 rounded-2xl border border-[#948979] bg-[#222831] px-4 py-3 shadow-lg">
                <span className="text-lg">🛒</span>

                <span className="text-sm text-[#DFD0B8]">Sepete eklendi</span>

                <button
                    onClick={() => {
                        navigate("/cart");
                        toast.dismiss(t.id);
                    }}
                    className="ml-2 rounded-lg bg-[#948979] px-3 py-1 text-xs font-semibold text-[#222831] transition hover:opacity-90"
                >
                    Sepete Git
                </button>
            </div>
        ));
    };

    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#F5EFE6] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* IMAGE AREA */}
            <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#EAE0CF] p-8">
                <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* QUICK VIEW BUTTON */}
                <button
                    onClick={onQuickView}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 text-xs font-semibold opacity-0 shadow transition duration-300 group-hover:opacity-100"
                >
                    Ürünü İncele
                </button>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                    <h3 className="mt-3 min-h-[48px] text-base font-semibold leading-6 text-slate-800 transition group-hover:text-primary">
                        {shortTitle}
                    </h3>
                </Link>

                <p className="mt-4 text-2xl font-bold text-primary">
                    ₺{Math.round(product.price * 35)}
                </p>

                <button
                    onClick={handleAddToCart}
                    className="mt-5 rounded-xl border border-primary bg-transparent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-background"
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
}

export default ProductCard;