import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import Hero from '@/components/sections/Hero';
import TrustSection from '@/components/sections/TrustSection';
import Pillars from '@/components/sections/Pillars';
import LearningPathsSection from '@/components/sections/LearningPathsSection';
import PlaygroundSection from '@/components/sections/PlaygroundSection';
import RoadmapsSection from '@/components/sections/RoadmapsSection';
import TechNewsSection from '@/components/sections/TechNewsSection';
import CommunitySection from '@/components/sections/CommunitySection';
import DashboardPreview from '@/components/sections/DashboardPreview';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustSection />
        <Pillars />
        <LearningPathsSection />
        <PlaygroundSection />
        <RoadmapsSection />
        <TechNewsSection />
        <DashboardPreview />
        <CommunitySection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}