import "./App.css";
import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import Destination from "./components/Destination";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Contact from ",/components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;