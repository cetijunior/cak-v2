import Image from "next/image";
import '../../../styles/globals.css'
import Navbar from "@/components/languages/de/Navbar";
import Hero from "@/components/languages/de/Hero";
import Portfolio from "@/components/languages/de/Portfolio";
import About from "@/components/languages/de/About";
import Contact from "@/components/languages/de/Contact";
import Footer from "@/components/languages/de/Footer";
import Services from "@/components/languages/de/Services";


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

