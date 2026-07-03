import Hero from "../components/Hero"
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Packages from "../components/Packages";
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
            <Packages />
            <WhyChoose />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;