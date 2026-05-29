import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function AppLoader() {
    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.45, ease: "easeInOut" },
            }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{
                    scale: [0.92, 1, 1, 1.18],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 1.3,
                    times: [0, 0.25, 0.75, 1],
                    ease: "easeInOut",
                }}
            >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#F5EFE6] shadow-xl">
                    <img
                        src={logo}
                        alt="Penguin"
                        className="h-20 w-20 object-contain"
                    />
                </div>

                <motion.p
                    className="mt-7 text-sm font-semibold tracking-[0.35em] text-primary"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: [8, 0, 0, -4],
                    }}
                    transition={{
                        duration: 1.3,
                        times: [0, 0.25, 0.75, 1],
                        ease: "easeInOut",
                    }}
                >
                    PENGUIN
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default AppLoader;