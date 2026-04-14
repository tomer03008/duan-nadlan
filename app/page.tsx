import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PropertiesSection from "@/components/PropertiesSection";
import HotPropertiesSection from "@/components/HotPropertiesSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <HotPropertiesSection />
        <ContactSection />
        <TrustSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
