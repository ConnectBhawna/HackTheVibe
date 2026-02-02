import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MENTORS = [
  { name: "Jane Doe", role: "Senior Engineer at GitHub", type: "Mentor" },
  { name: "John Smith", role: "Design Lead at Vercel", type: "Mentor" },
  { name: "Alice Johnson", role: "AI Researcher", type: "Judge" },
  { name: "Bob Williams", role: "Startup Founder", type: "Judge" },
];

export default function MentorsPage() {
  return (
    <main>
      <Navbar />
      <section className="site-section">
        <div className="section-inner">
          <h1 style={{ color: "var(--poster-blue)" }}>Mentors &amp; Judges</h1>
          <p className="muted">Meet the amazing people guiding and judging the hackathon.</p>

          <div className="projects-grid" style={{ marginTop: 24 }}>
            {MENTORS.map((m, idx) => (
              <article key={idx} className="project-card">
                <div className="title">{m.name}</div>
                <div className="meta">{m.role}</div>
                <span className="badge" style={{ marginTop: 8, display: "inline-block" }}>
                  {m.type}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
