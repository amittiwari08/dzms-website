import Preloader from "./components/Preloader.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Services from "./components/Services.jsx";
import Industries from "./components/Industries.jsx";
import Process from "./components/Process.jsx";
import TechStack from "./components/TechStack.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Compare from "./components/Compare.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Fab from "./components/Fab.jsx";

export default function App() {
  return (
    <>
      <Preloader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Industries />
        <Process />
        <TechStack />
        <Portfolio />
        <Compare />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
