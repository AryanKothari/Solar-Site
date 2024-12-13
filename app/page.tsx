import TeamImage from "@/components/TeamImage";
import HeroContent from "@/components/HeroContent";
// import AboutSection from "@/components/AboutSection";
import ProductPage from "./product/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full h-[calc(100vh-4rem)] border-b relative">
        <TeamImage />
        <div className="absolute inset-0">
          <HeroContent />
        </div>
      </section>
      <div id="product" className="container py-12">
        <h2 className="text-5xl font-bold text-center mt-12 mb-12"></h2>
        <ProductPage />
      </div>

     
      <section className="w-full py-24 bg-muted">
        <div className="container grid md:grid-cols-3 gap-8">
          {/* Add feature highlights here */}
        </div>
      </section>
    </div>
  );
}
