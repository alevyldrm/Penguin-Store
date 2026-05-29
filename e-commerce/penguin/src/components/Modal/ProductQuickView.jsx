import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductQuickView({ product, onClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!product) return null;

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
                        onClose();
                    }}
                    className="ml-2 rounded-lg bg-[#948979] px-3 py-1 text-xs font-semibold text-[#222831] transition hover:opacity-90"
                >
                    Sepete Git
                </button>
            </div>
        ));
    };

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            {/* MODAL */}
            <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-[#F5EFE6] p-8 shadow-2xl">
                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-xl text-primary"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* IMAGE */}
                    <div className="flex h-[400px] items-center justify-center rounded-xl bg-[#EAE0CF] p-6">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center">
                        <p className="text-sm uppercase text-accent">
                            {product.category}
                        </p>

                        <h2 className="mt-3 text-2xl font-bold text-primary">
                            {product.title}
                        </h2>

                        <p className="mt-4 text-xl font-bold text-primary">
                            ₺{Math.round(product.price * 35)}
                        </p>

                        <p className="mt-4 text-sm text-slate-600 line-clamp-4">
                            {product.description}
                        </p>

                        <button
                            onClick={handleAddToCart}
                            className="mt-6 rounded-xl bg-primary px-6 py-3 text-background"
                        >
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ProductQuickView;