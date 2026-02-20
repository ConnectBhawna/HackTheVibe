import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HackersGuide from "../components/HackersGuide";

export default function HackersGuidePage() {
  return (
    <main className="rules-page-bg">
      <Navbar />
      <HackersGuide />
      <Footer />
    </main>
  );
}
