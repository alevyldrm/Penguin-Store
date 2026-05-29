import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport.default || MarqueeImport;

const announcements = [
    "YENİ SEZON KOLEKSİYONU",
    "ÜCRETSİZ KARGO FIRSATI",
    "KOLEKSİYONU KEŞFET",
    "SEÇİLİ ÜRÜNLERDE İNDİRİM"

];
const AnnouncementBar = () => {
    return (
        <div className="bg-secondary text-background border-t border-b border-background/10">
            <Marquee pauseOnHover speed={60} gradient={false}>
                {[...announcements, ...announcements].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 mr-8">
                        <span className="whitespace-nowrap py-1 text-xs md:text-sm font-medium uppercase tracking-[0.12em]">
                            {item}
                        </span>
                        <span>•</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};
export default AnnouncementBar;