import Navbar from "./Navbar";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Services from "./Services";


export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <div className="space-y-8 w-full">
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

