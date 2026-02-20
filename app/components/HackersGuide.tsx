export default function HackersGuide() {
  return (
    <section className="hackers-guide-container">
      {/* Title */}
      <h2 className="rules-title">Hacker&apos;s Guide</h2>
      <div className="rules-title-underline" />

      {/* Submission Guidelines */}
      <div className="guide-section">
        <h3 className="guide-section-title">Submission Guidelines</h3>
        <div className="guide-card-highlight">
          <ul className="guide-list">
            <li className="guide-list-item">
              <span className="guide-icon"></span>
              <span>We require all teams to submit a <strong>2 minute or less demo video</strong>.</span>
            </li>
            <li className="guide-list-item">
              <span className="guide-icon"></span>
              <span>Your video must be <strong>created during the weekend</strong> of the hackathon.</span>
            </li>
            <li className="guide-list-item">
              <span className="guide-icon"></span>
              <span>Your project must be <strong>submitted within the submission period</strong>.</span>
            </li>
            <li className="guide-list-item">
              <span className="guide-icon"></span>
              <span>Your code must be available in a <strong>public repository</strong>.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Judging Criteria */}
      <div className="guide-section">
        <h3 className="guide-section-title">Judging Criteria</h3>
        <div className="judging-grid">
          <div className="judging-card">
            <h4 className="judging-card-title">Quality Of Idea</h4>
            <div className="judging-card-divider" />
            <ul className="judging-card-list">
              <li>Uniqueness of the idea</li>
              <li>Level of creativity</li>
              <li>Innovation and impact</li>
            </ul>
          </div>
          <div className="judging-card">
            <h4 className="judging-card-title">Technical Implementation</h4>
            <div className="judging-card-divider" />
            <ul className="judging-card-list">
              <li>Quality of implementation</li>
              <li>Completeness of the project</li>
              <li>Efficiency of the solution</li>
            </ul>
          </div>
          <div className="judging-card">
            <h4 className="judging-card-title">Idea Sustainability / Potential</h4>
            <div className="judging-card-divider" />
            <ul className="judging-card-list">
              <li>Future scope</li>
              <li>Documentation</li>
              <li>Upcoming features</li>
            </ul>
          </div>
          <div className="judging-card">
            <h4 className="judging-card-title">Design</h4>
            <div className="judging-card-divider" />
            <ul className="judging-card-list">
              <li>UI/UX</li>
              <li>Feasibility</li>
              <li>Accessibility (A11y)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mentorship Rounds */}
      <div className="guide-section">
        <h3 className="guide-section-title">Mentorship Rounds</h3>
        <div className="mentorship-grid">
          <div className="mentorship-card">
            <div className="mentorship-badge">Mentorship-1</div>
            <div className="mentorship-info">
              <h4 className="mentorship-round-title">Ideation Round</h4>
              <p className="mentorship-date">February 20th, 2026</p>
              <p className="mentorship-time">10:00 PM IST</p>
            </div>
          </div>
          <div className="mentorship-card">
            <div className="mentorship-badge">Mentorship-2</div>
            <div className="mentorship-info">
              <h4 className="mentorship-round-title">Implementation Round</h4>
              <p className="mentorship-date">February 21st, 2026</p>
              <p className="mentorship-time">9:00 PM IST</p>
            </div>
          </div>
          <div className="mentorship-card">
            <div className="mentorship-badge">Mentorship-3</div>
            <div className="mentorship-info">
              <h4 className="mentorship-round-title">Final Round</h4>
              <p className="mentorship-date">February 22nd, 2026</p>
              <p className="mentorship-time">1:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Good luck message */}
      <div className="guide-section guide-footer-message">
        <p className="guide-luck-text">
          Best of luck hackers for the hackathon! 🚀
        </p>
        <p className="guide-luck-subtext">
          Do your best just remember, <em>&quot;Hackathon is a place to learn where you win eventually.&quot;</em>
        </p>
      </div>
    </section>
  );
}
