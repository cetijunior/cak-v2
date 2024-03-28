import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../pages/Hero";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Services from "../pages/Services";


export default function Home() {


  return (
    <div className="flex flex-col items-start">
      <div className="space-y-8">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

