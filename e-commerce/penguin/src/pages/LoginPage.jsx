import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import logo from "../assets/logo.png";
import bgImage from "../assets/login/login-bg.jpg";
import toast from "react-hot-toast";

function LoginPage() {


    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(form.email, form.password);

            toast.success("Giriş yapıldı", {
                icon: "✅",
            });

            navigate("/");
        } catch (err) {
            setError("Giriş başarısız");

            toast.error("Giriş başarısız", {
                icon: "⚠️",
            });
        }
    };

    return (
        <section
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="min-h-screen bg-black/35">
                <div className="container flex min-h-screen items-center justify-start py-10">

                    {/* LOGO + FORM AYNI WRAPPER İÇİNDE */}
                    <div className="w-full max-w-lg">
                        <div className="mb-6 flex w-full justify-center">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Penguin Logo"
                                    className="h-24 w-auto"
                                />
                            </Link>
                        </div>

                        <div className="flex min-h-[520px] w-full flex-col justify-center rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
                            <h1 className="text-3xl font-bold text-background">
                                Giriş Yap
                            </h1>

                            <p className="mt-2 text-sm text-white/50">
                                Hesabına giriş yap ve alışverişe devam et
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-background placeholder:text-white/55 outline-none transition focus:border-accent"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />

                                <input
                                    type="password"
                                    placeholder="Şifre"
                                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-background placeholder:text-white/55 outline-none transition focus:border-accent"
                                    value={form.password}
                                    onChange={(e) =>
                                        setForm({ ...form, password: e.target.value })
                                    }
                                />

                                {error && (
                                    <p className="text-sm text-red-300">{error}</p>
                                )}

                                <button className="w-full rounded-2xl bg-accent py-3 font-semibold text-primary transition hover:bg-background">
                                    Giriş Yap
                                </button>
                            </form>

                            <p className="mt-6 text-sm text-white/75">
                                Hesabın yok mu?{" "}
                                <Link
                                    to="/register"
                                    className="font-semibold text-accent hover:text-background"
                                >
                                    Kayıt Ol
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LoginPage;