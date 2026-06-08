import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFab } from "@/components/layout/WhatsappFab";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/home/Hero";
import { ScarcityBar } from "@/components/home/ScarcityBar";
import { ComboSection } from "@/components/home/ComboSection";
import { TruffleSection } from "@/components/home/TruffleSection";
import { MugsAvulsasSection } from "@/components/home/MugsAvulsasSection";
import { SpecialMugsSection } from "@/components/home/SpecialMugsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { config } from "@/data/config";

export function App() {
  const campanha = config.CAMPANHA_NAMORADOS;
  return (
    <div className="min-h-screen bg-creme text-marrom">
      <LoadingScreen />
      <Header />
      <main>
        <Hero campanha={campanha} />
        {campanha && <ScarcityBar />}
        {campanha && <ComboSection />}
        <TruffleSection />
        <MugsAvulsasSection />
        <SpecialMugsSection />
        <HowItWorks />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
