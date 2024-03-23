import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Portfolio from "./Portfolio";


export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <div className="space-y-8">
        <Navbar />
        <Hero />
        <Portfolio />
      </div>
    </div>
  );
}

