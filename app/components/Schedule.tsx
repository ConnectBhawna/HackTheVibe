const SCHEDULE_ROWS = [
  {
    left: {
      title: 'Hackathon Begins',
      date: 'Feb 20 - 6:00 PM IST',
      description: '36-hour online hackathon starts - begin building your projects',
      isCard: true,
    },
    right: {
      title: 'Hackathon Ends',
      date: 'Feb 22 - 6:00 AM IST',
      description: 'Final submissions due - all projects must be submitted by this time',
      isCard: false,
    },
  },
  {
    left: {
      title: 'Judging Period',
      date: 'Feb 22 8:00 AM IST - Feb 28 8:00 PM IST',
      description: 'Panel of judges reviews all eligible submissions',
      isCard: true,
    },
    right: {
      title: 'Winners Announced',
      date: 'Feb 23 - 2:00 PM UTC',
      description: 'Final results will be announced on February 23rd, 2026',
      isCard: false,
    },
  },
];

export default function Schedule() {
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        {/* Header */}
        <div className="schedule-header">
          <h2 className="schedule-title">Hackathon Schedule</h2>
          <p className="schedule-subtitle">
            Join us in the unforgettable journey designed to maximize learning,
            collaboration and innovation for students and developers.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {SCHEDULE_ROWS.map((row, idx) => (
            <div key={idx} className="timeline-row">
              {/* Left side */}
              <div className="timeline-side timeline-side-left">
                <div className={`timeline-content ${row.left.isCard ? 'timeline-card' : 'timeline-text'}`}>
                  <div className="timeline-content-header">
                    <h3 className="timeline-content-title">{row.left.title}</h3>
                    <span className="timeline-content-date">{row.left.date}</span>
                  </div>
                  <p className="timeline-content-desc">{row.left.description}</p>
                </div>
                <div className="timeline-dot-left"></div>
              </div>

              {/* Center line segment */}
              <div className="timeline-center">
                <div className="timeline-line"></div>
              </div>

              {/* Right side */}
              <div className="timeline-side timeline-side-right">
                <div className="timeline-dot-right"></div>
                <div className={`timeline-content ${row.right.isCard ? 'timeline-card' : 'timeline-text'}`}>
                  <h3 className="timeline-content-title">{row.right.title}</h3>
                  <span className="timeline-content-date">{row.right.date}</span>
                  <p className="timeline-content-desc">{row.right.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="schedule-footer">
          All projects must be completed within the 36-hour timeframe. Join us for an unforgettable journey of innovation!
        </p>
      </div>

      {/* Decorative corner */}
      <div className="schedule-corner-decor">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <rect x="10" y="10" width="60" height="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" transform="rotate(15 40 40)" />
          <rect x="20" y="20" width="40" height="40" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" transform="rotate(15 40 40)" />
        </svg>
      </div>
    </section>
  );
}
