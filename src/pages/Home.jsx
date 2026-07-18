import CyberBackground from '@/components/CyberBackground';
import Navbar from '@/components/Navbar';
import AICoach from '@/components/AICoach';
import Hero from '@/components/sections/Hero';
import LearningPaths from '@/components/sections/LearningPaths';
import SkillTree from '@/components/sections/SkillTree';
import LiveTerminal from '@/components/sections/LiveTerminal';
import CTFArena from '@/components/sections/CTFArena';
import Leaderboard from '@/components/sections/Leaderboard';
import DashboardPreview from '@/components/sections/DashboardPreview';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <div className="relative min-h-screen text-foreground">
            <CyberBackground />
            <Navbar />
            <main>
                <Hero />
                <LearningPaths />
                <SkillTree />
                <LiveTerminal />
                <CTFArena />
                <Leaderboard />
                <DashboardPreview />
                <Testimonials />
                <Pricing />
                <Footer />
            </main>
            <AICoach />
        </div>
    );
}