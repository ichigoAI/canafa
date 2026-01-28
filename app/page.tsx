import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Programme from "@/components/Programme";
import PourquoiCANAFA from "@/components/PourquoiCANAFA";
import ContactInscription from "@/components/ContactInscription";
import PourquoiPartenaire from "@/components/PourquoiPartenaire";
import ConcoursEntrepreneuriat from "@/components/ConcoursEntrepreneuriat";
import PartnerShowcase from '@/components/Partenaire';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <PourquoiCANAFA />
      <Programme />
      <PourquoiPartenaire />
      <PartnerShowcase />

      <ConcoursEntrepreneuriat />
      <ContactInscription />

      <Footer />
    </>
  );
}
