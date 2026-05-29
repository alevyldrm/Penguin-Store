import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiFacebook, FiSend } from "react-icons/fi";

function Footer() {
    return (
        <footer className="bg-primary text-background">
            <div className="container py-16">

                {/* TOP */}
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">

                    {/* BRAND */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-accent">
                            Penguin Store
                        </p>

                        <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight">
                            Stil seven insanlar için modern alışveriş.
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-slate-200">
                            Yeni sezon ürünleri, öne çıkan koleksiyonlar ve sade tasarımı bir
                            araya getiren modern alışveriş deneyimi.
                        </p>

                        <div className="mt-6 flex items-center gap-4">
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
                            >
                                <FiInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
                            >
                                <FiTwitter size={18} />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent hover:text-accent"
                            >
                                <FiFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* SHOP */}
                    <div>
                        <h3 className="text-lg font-semibold">Alışveriş</h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-200">
                            <li>
                                <Link to="/" className="transition hover:text-accent">
                                    Anasayfa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/men's%20clothing"
                                    className="transition hover:text-accent"
                                >
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/women's%20clothing"
                                    className="transition hover:text-accent"
                                >
                                    Women
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/jewelery"
                                    className="transition hover:text-accent"
                                >
                                    Jewelry
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/category/electronics"
                                    className="transition hover:text-accent"
                                >
                                    Electronics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="text-lg font-semibold">Destek</h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-200">
                            <li>
                                <button className="transition hover:text-accent">
                                    Sık Sorulan Sorular
                                </button>
                            </li>
                            <li>
                                <button className="transition hover:text-accent">
                                    Teslimat Bilgileri
                                </button>
                            </li>
                            <li>
                                <button className="transition hover:text-accent">
                                    İade Politikası
                                </button>
                            </li>
                            <li>
                                <button className="transition hover:text-accent">
                                    Gizlilik Politikası
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-lg font-semibold">En güncel moda haberleri için</h3>

                        <p className="mt-5 text-sm leading-7 text-slate-200">
                            Yeni koleksiyonlar ve kampanyalardan haberdar olmak için e-posta
                            listemize katıl.
                        </p>

                        <div className="mt-6 flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5">
                            <input
                                type="email"
                                placeholder="E-mail address"
                                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-slate-300 outline-none"
                            />

                            <button className="flex h-11 w-14 items-center justify-center bg-accent text-primary transition hover:opacity-90">
                                <FiSend size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col items-center justify-between gap-4 pt-6 text-sm text-slate-300 md:flex-row">
                    <p>© 2026 Penguin. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <span className="transition hover:text-accent cursor-pointer">
                            Terms
                        </span>
                        <span className="transition hover:text-accent cursor-pointer">
                            Privacy
                        </span>
                        <span className="transition hover:text-accent cursor-pointer">
                            Cookies
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;