const SCHEDULE_ROWS = [
  {
    left: {
      title: 'Pre-Hackathon Livestream 1',
      date: 'Feb 12 (Thu) - 2:00 PM UTC',
      description: 'Stop Typing, Start Vibe Coding: A Live Build with GitHub Copilot',
      isCard: true,
    },
    right: {
      title: 'Pre-Hackathon Livestream 2',
      date: 'Feb 15 (Sun) - 2:00 PM UTC',
      description: 'Cracking the Code: How I Won Hackathon and How You Can Too',
      isCard: false,
    },
  },
  {
    left: {
      title: 'Pre-Hackathon Livestream 3',
      date: 'Feb 18 (Wed) - 2:00 PM UTC',
      description: 'Building Smarter, Not Harder: The Vibe Coding Approach to Full-Stack Dev',
      isCard: true,
    },
    right: {
      title: 'Opening Ceremony & Hacking Begins',
      date: 'Feb 20 (Fri) - 2:00 PM UTC',
      description: 'Opening ceremony & hacking begins for the hackathon',
      isCard: false,
    },
  },
  {
    left: {
      title: 'Final Submissions Due',
      date: 'Feb 22 - 2:00 AM UTC',
      description: 'All projects must be submitted by this time',
      isCard: true,
    },
    right: {
      title: 'Judging Period',
      date: 'Feb 22 8:00 AM UTC - Feb 28 8:00 PM UTC',
      description: 'Panel of judges reviews all eligible submissions',
      isCard: false,
    },
  },
  {
    left: {
      title: 'Winners Announced',
      date: 'Feb 23 - 2:00 PM UTC',
      description: 'Final results will be announced on February 23rd, 2026',
      isCard: true,
    },
    right: null,
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
                {row.right && (
                  <>
                    <div className="timeline-dot-right"></div>
                    <div className={`timeline-content ${row.right.isCard ? 'timeline-card' : 'timeline-text'}`}>
                      <h3 className="timeline-content-title">{row.right.title}</h3>
                      <span className="timeline-content-date">{row.right.date}</span>
                      <p className="timeline-content-desc">{row.right.description}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="schedule-footer">
          Don&apos;t miss the pre-hackathon livestreams! All hackathon projects must be submitted by Feb 22, 6:00 AM IST. Join us for an unforgettable journey of innovation!
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
