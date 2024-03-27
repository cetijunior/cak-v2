'use client'
import "/styles/globals.css";
import Navbar from "./components/webDev/Navbar";
import Footer from "@/components/Footer";
import TechSection from "./components/webDev/TechSection";
import HowWeWork from "./components/webDev/HowWeWork";
import Relationship from "./components/webDev/Relationship";
import ContactSection from "./components/webDev/ContactSection";


const webdev = () => {
    return (
        <>
            <Navbar />
            <div className='overflow-x-hidden'>
                <div className="flex mt-[-40px] md:mt-[-200px] lg:mt-[-350px] items-center justify-center">
                    <video autoPlay loop muted className="rounded-lg w-screen">
                        <source src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
                            type="video/mp4"
                        />
                        Your Browser does not support the video tag.
                    </video>
                </div>
                <div className='flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center w-screen'>
                    <div className="w-[380px] md:w-[650px] lg:w-[800px] p-10 md:p-16 lg:p-[85px] z-10 md:h-[400px] lg:h-[450px] bg-[#F8F9FB] shadow-custom-blue mt-[-100px] md:mt-[-200px] lg:mt-[-350px] rounded-xl space-y-8">
                        <h1 className="text-start md:text-start lg:text-center text-4xl md:text-5xl lg:text-6xl font-bold">
                            Website Development
                        </h1>
                        <h3 className="text-start md:text-start lg:text-center">
                            Discover our range of services
                            and find out how we can help you
                            take your project to the next level.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis, quasi, in cupiditate vero dicta eligendi maiores id ut quidem, illo molestiae alias quisquam magnam?
                            Web Dev specific text
                        </h3>
                    </div>
                    <button className="bg-[#446AF2] hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 mb-10 rounded-3xl"
                    >Contact Us</button>
                </div>
            </div>
            <div className="">
                <TechSection />
                <HowWeWork />
                <Relationship />
                <ContactSection />
                <Footer />
            </div>
        </>
    )
}

export default webdev