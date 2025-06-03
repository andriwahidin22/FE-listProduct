
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RequirementsSection from "../components/RequirementsSection";
import ProgramSection from "../components/ProgramSection";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <Layout showHero={true}>
      <div className="flex">
        <main className="flex-1 max-w-4xl mx-auto px-4">
          <HeroSection />
          <div className="bg-white rounded-lg shadow-lg mt-8 p-8">
            <AboutSection />
            <RequirementsSection />
            <ProgramSection />
          </div>
        </main>
        <aside className="w-80 p-4">
          <Sidebar />
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
