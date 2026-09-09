import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Intro />
        <Services />
        <Metrics />
        <Industries />
        <Partners />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
