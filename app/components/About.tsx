export default function About() {
  return (
    <div id="about" className="site-section" style={{ paddingTop: 80 }}>
      <div className="section-inner" style={{ textAlign: 'center' }}>
  <h1 className="section-title">About Hack the vibe</h1>
        <p className="muted" style={{ maxWidth: 700, margin: '0 auto' }}>
          Hack the vibe is a friendly 36-hour hackathon for learners, developers and creators. Focus on shipping, collaboration and learning.
        </p>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
          <div className="project-card" style={{ textAlign: 'left' }}>
            <strong>Open to all</strong>
            <p className="muted">Beginners, developers and creators all are welcome to participate in the hackathon to build the next unicorn AI Agent.</p>
          </div>
          <div className="project-card" style={{ textAlign: 'left' }}>
            <strong>Prizes</strong>
            <p className="muted">Get the chances to win the cash prizes as per the people's choice and more.</p>
          </div>
          <div className="project-card" style={{ textAlign: 'left' }}>
            <strong>Community</strong>
            <p className="muted">Join the Aya community and GitHub Education for support and resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
