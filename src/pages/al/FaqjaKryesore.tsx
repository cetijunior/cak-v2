import Image from "next/image";
import '../../../styles/globals.css'
import Navbar from "@/components/languages/al/Navbar";
import Portfolio from "@/components/languages/al/Portfolio";
import About from "@/components/languages/al/About";
import Contact from "@/components/languages/al/Contact";
import Footer from "@/components/languages/al/Footer";
import Services from "@/components/languages/al/Services";
import Hero from "@/components/languages/al/Hero";


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

