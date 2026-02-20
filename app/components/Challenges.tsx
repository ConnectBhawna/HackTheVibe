export default function Challenges() {
  return (
    <section className="challenges-container">
      {/* Title */}
      <h2 className="rules-title">Challenges</h2>
      <div className="rules-title-underline" />

      <div className="challenges-grid">
        {/* Meme Challenge */}
        <a
          href="https://x.com/theayacommunity/status/2024764294525575393?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="challenge-card-link"
        >
        <div className="challenge-card challenge-card-meme">
          <div className="challenge-badge"> LIVE</div>
          <h3 className="challenge-card-title">Most Funny Meme Challenge</h3>
          <div className="challenge-card-divider" />

          <div className="challenge-details">
            <h4 className="challenge-subtitle">📝 Rulebook</h4>
            <ul className="challenge-rules-list">
              <li>Post your funniest <strong>developer meme</strong></li>
              <li>
                Tag{" "}
                <a
                  href="https://x.com/theayacommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="challenge-link"
                >
                  @theayacommunity
                </a>
              </li>
              <li>
                Use hashtag{" "}
                <span className="challenge-hashtag">#HackTheVibe</span>
              </li>
            </ul>

            <div className="challenge-prize-box">
              <span className="challenge-prize-icon">🎁</span>
              <span>
                Win a <strong>GitHub T-shirt Coupon Code!</strong>
              </span>
            </div>

            <div className="challenge-deadline">
              <span className="challenge-deadline-label">Deadline:</span>
              <span className="challenge-deadline-date">
                22<sup>nd</sup> February 2026
              </span>
            </div>

            <div className="challenge-powered">
              <span>Powered by</span>
              <strong> AYA Community × GitHub Education</strong>
            </div>
          </div>
        </div>
        </a>

        {/* Creative Challenge */}
        <a
          href="https://x.com/theayacommunity/status/2023039543570800733?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="challenge-card-link"
        >
        <div className="challenge-card challenge-card-creative">
          <div className="challenge-badge">CREATIVE</div>
          <h3 className="challenge-card-title">Creative Challenge</h3>
          <div className="challenge-card-divider" />

          <div className="challenge-details">
            <h4 className="challenge-subtitle">✏️ Rules for the challenge</h4>
            <ul className="challenge-rules-list">
              <li>
                Draw something creative with <strong>Octocat &amp; Griffin</strong> on
                paper
              </li>
              <li>
                Share it on Twitter/X by tagging{" "}
                <a
                  href="https://x.com/githubeducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="challenge-link"
                >
                  @githubeducation
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://x.com/theayacommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="challenge-link"
                >
                  @theayacommunity
                </a>
              </li>
              <li>
                Use hashtag{" "}
                <span className="challenge-hashtag">#HackTheVibe</span>
              </li>
            </ul>

            <div className="challenge-prize-box">
              <span className="challenge-prize-icon">🎁</span>
              <span>
                Win a <strong>GitHub T-shirt Coupon Code!</strong>
              </span>
            </div>

            <div className="challenge-bonus">
              <span>⭐ Extra points</span> if you tag 3 friends &amp; retweet!
            </div>

            <div className="challenge-deadline">
              <span className="challenge-deadline-label">Deadline:</span>
              <span className="challenge-deadline-date">
                Completed
              </span>
            </div>

            <div className="challenge-powered">
              <span>Powered by</span>
              <strong> AYA Community × GitHub Education</strong>
            </div>
          </div>
        </div>
        </a>
      </div>
    </section>
  );
}
