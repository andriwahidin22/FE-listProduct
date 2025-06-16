
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RequirementsSection from "../components/RequirementsSection";
import ProgramSection from "../components/ProgramSection";
import Sidebar from "../components/Sidebar";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StatsSection from "../components/StatsSection";
import NewsSection from "../components/NewsSection";
import PartnersSection from "../components/PartnersSection";

const Index = () => {
  return (
    <Layout showHero={true}>
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="flex-1 max-w-none lg:max-w-4xl mx-auto px-4">
          <HeroSection />
          
          {/* Stats Section */}
          <StatsSection />
          
          {/* Features Overview */}
          <FeaturesSection />
          
          <div className="bg-white rounded-lg shadow-lg mt-8 p-8">
            <AboutSection />
            <RequirementsSection />
            <ProgramSection />
          </div>
          
          {/* Partners Section */}
          <PartnersSection />
          
          {/* News Section */}
          <NewsSection />
          
          {/* Testimonials */}
          <TestimonialsSection />
        </main>
        
        <aside className="w-full lg:w-80 p-4">
          <Sidebar />
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
