import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FacilitatorsPage() {
  return (
    <main className="rules-page-bg">
      <Navbar />

      <section className="rules-container" style={{ marginTop: 24 }}>
        <h2 className="rules-title">Our Facilitators</h2>
        <div className="rules-title-underline" />

        <div style={{ padding: "10px 4px 28px" }}>
          <div className="rule-item" style={{ textAlign: "center" }}>
            <h3 className="rule-item-title">Coming soon</h3>
            <p className="rule-item-text">We're finalizing our facilitator lineup — check back soon for the full list and bios.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
