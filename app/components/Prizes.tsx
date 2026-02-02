import React from "react";

export default function Prizes() {
  const prizes = [
    { key: 'winning', label: "Winning Team", amount: 300 },
    { key: 'first', label: "1st Runner up Team", amount: 200 },
    { key: 'second', label: "2nd Runner up Team", amount: 100 },
    { key: 'girl', label: "Best Girl team", amount: 50 },
    { key: 'copilot', label: "Best use of GitHub Copilot", amount: 50 },
    {
      key: 'more',
      label: "More amazing prizes",
      amount: null,
      description:
        "Mentorships, sponsor swag, surprise rewards and special shoutouts, we'll announce more during the event.",
    },
  ];

  return (
    <section id="prizes" className="rules-container">
      <h2 className="rules-title">Prizes</h2>
      <div className="rules-title-underline" />

      <div className="prizes-grid">
        {prizes.map((p) => (
          <div
            key={p.key}
            className={`prize-card ${p.key === "winning" ? "winner" : ""} ${p.key === "more" ? "more-card" : ""}`}>
            {p.amount ? (
              <>
                <div className="prize-amount">${p.amount}</div>
                <div className="prize-label">{p.label}</div>
              </>
            ) : (
              <>
                <div className="prize-amount">$50</div>
                <div className="prize-label">{p.label}</div>
                <p className="prize-desc">{p.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
