import { motion } from "framer-motion";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.985,
        filter: "blur(6px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.99,
        filter: "blur(4px)",
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full will-change-transform"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;