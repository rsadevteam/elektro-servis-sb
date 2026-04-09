import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Stats />
        <Process />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
