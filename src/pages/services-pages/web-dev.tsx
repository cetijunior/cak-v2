'use client'
import Navbar from "@/components/Navbar";
import "/styles/globals.css";
import Footer from "@/components/Footer";
import TechSection from "./components/webDev/TechSection";
import HowWeWork from "./components/webDev/HowWeWork";
import Relationship from "./components/webDev/Relationship";
import ContactSection from "./components/webDev/ContactSection";


const webdev = () => {
    return (
        <>
            <Navbar />
            <div className='w-screen'>
                <div className="flex bg-[#1E1919 mt-[-50px] sm:mt-[-350px] items-center justify-center">
                    <video autoPlay loop muted className="rounded-lg w-screen">
                        <source src="https://www.helmes.com/wp-content/uploads/2022/07/costom-software-development_600.mp4"
                            type="video/mp4"
                        />
                        Your Browser does not support the video tag.
                    </video>
                </div>
                <div className='flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 items-center justify-center w-screen'>
                    <div className='w-[400px] sm:w-[650px] p-20 z-10 sm:h-[400px] bg-[#F8F9FB] shadow-custom-blue mt-[-40px] sm:mt-[-350px] rounded-xl space-y-4'>
                        <h1 className='text-center text-2xl sm:text-5xl font-bold'>
                            Website Development
                        </h1>
                        <h3 className='text-center'>
                            Discover our range of services
                            and find out how we can help you
                            take your project to the next level.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Officiis, quasi, in cupiditate vero dicta eligendi maiores id ut quidem, illo molestiae alias quisquam magnam?
                            Web Dev specific text
                        </h3>
                    </div>
                    <button className="bg-[#446AF2] hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-custom-blue2 z-10 text-white mt-[-20px] py-3 px-20 rounded-3xl"
                    >Contact Us</button>
                </div>
            </div>
            <div className="space-y-4">
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