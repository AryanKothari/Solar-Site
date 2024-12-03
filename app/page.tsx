import TeamImage from "@/components/TeamImage";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full h-[calc(100vh-4rem)] border-b relative">
        <TeamImage />
        <div className="absolute inset-0">
          <HeroContent />
        </div>
      </section>
      <section className="w-full py-24 bg-muted">
        <div className="container grid md:grid-cols-3 gap-8">
          {/* Add feature highlights here */}
        </div>
      </section>
    </div>
  );
}
