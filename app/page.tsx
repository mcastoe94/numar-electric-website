import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { PhotoShowcase } from "@/components/PhotoShowcase";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <TrustBar />
        <Services />
        <PhotoShowcase />
        <WhyChoose />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
