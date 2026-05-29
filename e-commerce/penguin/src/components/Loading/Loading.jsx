import logo from "../../assets/logo.png";

function Loading({ text = "Yükleniyor..." }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="relative flex h-28 w-28 items-center justify-center">
                {/* OUTER RING */}
                <div className="absolute inset-0 rounded-full border border-[#948979]/30" />

                {/* SPINNER */}
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#948979]" />

                {/* LOGO */}
                <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-[#F5EFE6] shadow-lg">
                    <img
                        src={logo}
                        alt="Penguin"
                        className="h-12 w-12 object-contain"
                    />
                </div>
            </div>

            <p className="mt-6 animate-pulse text-sm font-medium tracking-[0.25em] text-primary">
                {text}
            </p>
        </div>
    );
}

export default Loading;