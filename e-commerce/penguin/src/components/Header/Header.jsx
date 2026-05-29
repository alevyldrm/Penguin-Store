import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderIcons from "./HeaderIcons";
import logo from "../../assets/logo.png";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full sticky top-0 z-50 transition-all duration-500 ease-in-out
            ${scrolled
                ? "bg-primary/70 backdrop-blur-xl shadow-md shadow-black/20"
                : "bg-primary backdrop-blur-[2px]"
            }`}
        >
            <nav
                className={`container mx-auto flex items-center justify-between px-6 text-background transition-all duration-500 ease-in-out ${
                    scrolled ? "py-2" : "py-0"
                }`}
            >
                
                {/* SOL */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="font-medium transition-colors hover:text-accent">
                        Anasayfa
                    </Link>
                    <Link to="/products" className="font-medium transition-colors hover:text-accent">
                        Ürünler
                    </Link>
                </div>

                {/* ORTA */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className={`w-auto transition-all duration-500 ease-in-out ${
                            scrolled
                                ? "h-[60px]"
                                : "h-16 mt-2"
                        }`}
                    />
                </Link>

                {/* SAĞ */}
                <HeaderIcons />
            </nav>
        </header>
    );
};

export default Header;