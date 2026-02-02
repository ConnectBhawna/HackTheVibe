import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Prizes from "../components/Prizes";

export default function Page() {
  return (
    <main className="rules-page-bg">
      <Navbar />

      <Prizes />

      <Footer />
    </main>
  );
}
