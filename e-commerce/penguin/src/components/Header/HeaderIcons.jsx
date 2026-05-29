import { FiSearch, FiUser, FiShoppingCart, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/authService";

import toast from "react-hot-toast";

const HeaderIcons = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const handleLogout = async () => {
        await logoutUser();

        toast("Çıkış yapıldı");

        navigate("/login");
    };

    return (
        <div className="flex items-center gap-5">
            <button
                aria-label="Search"
                className="transition-colors hover:text-accent"
                onClick={() => navigate("/search")}
            >
                <FiSearch size={20} />
            </button>

            {user ? (
                <button onClick={handleLogout} className="text-sm">
                    <FiLogOut size={20} />
                </button>
            ) : (
                <button onClick={() => navigate("/login")}>
                    <FiUser size={20} />
                </button>
            )}

            <button
                aria-label="Cart"
                className="relative transition-colors hover:text-accent"
                onClick={() => navigate("/cart")}
            >
                <FiShoppingCart size={20} />

                <span className="absolute -top-2 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] text-background">
                    {totalQuantity}
                </span>
            </button>
        </div>
    );
};

export default HeaderIcons;