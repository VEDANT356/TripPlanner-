import Hero from "../components/Hero"
import "../App.css";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import AboutUs from "../components/AboutUs";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <Destination />
            <AboutUs />
            <WhyChoose />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;