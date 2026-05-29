import Header from "../components/Header/Header";
import AnnouncementBar from "../components/Marquee/AnnouncementBar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import BestSellingProducts from "../components/Product/BestSellingProducts";
import CategorySection from "../components/Categories/CategorySection";
import PromoSection from "../components/PromoSection/PromoSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";
import PageTransition from "../components/common/PageTransition";

function Home() {
    return (
        <>
            <PageTransition>
                <Header />
                <AnnouncementBar />
                <HeroSlider />
                <BestSellingProducts />
                <PromoSection />
                <CategorySection />
                <WhyChooseUs />
                <Footer />
            </PageTransition>
        </>
    );
}

export default Home;