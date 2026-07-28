import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
