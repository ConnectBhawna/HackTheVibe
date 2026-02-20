import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rules from "./components/Rules";
import About from "./components/About";
import Facilitators from "./components/Facilitators";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
