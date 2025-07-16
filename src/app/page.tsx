import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProcessSection } from "./components/ProcessSection";
import { GallerySection } from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-col w-full">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </main>
  );
}
