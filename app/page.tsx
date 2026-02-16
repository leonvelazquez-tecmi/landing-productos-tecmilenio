import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EcosystemFlow from "@/components/EcosystemFlow";
import GroupContext from "@/components/GroupContext";
import FamiliasSection from "@/components/FamiliasSection";
import CatalogoSection from "@/components/CatalogoSection";
import FormasEstudiarSection from "@/components/FormasEstudiarSection";
import OrganizacionesSection from "@/components/OrganizacionesSection";
import DiferenciadoresSection from "@/components/DiferenciadoresSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <EcosystemFlow />
        <GroupContext />
        <FamiliasSection />
        <CatalogoSection />
        <FormasEstudiarSection />
        <OrganizacionesSection />
        <DiferenciadoresSection />
      </main>
      <Footer />
    </div>
  );
}
