import Navbar from "./Navbar.jsx";
import HeroSection from "./Landing/HeroSection.jsx";
import TrustLogos from "./Landing/TrustLogos.jsx";
import AboutSection from "./Landing/AboutSection.jsx";
import FeaturesSection from "./Landing/FeaturesSection.jsx";
import ServicesSection from "./ServicesSection.jsx";
import TestimonialsSection from "./Landing/TestimonialsSection.jsx";
import HeroBanner from "./Layouts/HeroBanner.jsx";

const LandingPage = () => {
  return (
    <div className="text-gray-800 p-4 bg-[#FFFFFF] font-sans">
      <HeroSection />
      <TrustLogos />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default LandingPage;