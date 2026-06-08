import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFab } from "@/components/layout/WhatsappFab";
import { Hero } from "@/components/home/Hero";
import { ScarcityBar } from "@/components/home/ScarcityBar";
import { ComboSection } from "@/components/home/ComboSection";
import { TruffleSection } from "@/components/home/TruffleSection";
import { MugsAvulsasSection } from "@/components/home/MugsAvulsasSection";
import { SpecialMugsSection } from "@/components/home/SpecialMugsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { config } from "@/data/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sr. Trufa · Canecas e trufas artesanais para o Dia dos Namorados" },
      {
        name: "description",
        content:
          "Combos exclusivos de caneca personalizada + trufas artesanais feitas à mão para o Dia dos Namorados. Edição limitada, entregue em Barretos/SP.",
      },
      { property: "og:title", content: "Sr. Trufa · Edição Dia dos Namorados" },
      {
        property: "og:description",
        content:
          "Caneca personalizada com a foto de vocês + 3 trufas artesanais. Um presente que se bebe, se come e não se esquece.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const campanha = config.CAMPANHA_NAMORADOS;
  return (
    <div className="min-h-screen bg-creme text-marrom">
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
