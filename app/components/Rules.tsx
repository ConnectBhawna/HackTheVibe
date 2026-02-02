const rulesData = [
  {
    number: 1,
    title: "Submissions",
    text: "Your project must have been entirely made during the hackathon period. You may use pre-existing assets and tools, but disclose that in your project description. You should also include an explanation of how your project relates & what problem it solves. You can use any IDE, Tool to create the project!",
  },
  {
    number: 2,
    title: "Progress",
    text: "YOU MUST KEEP TRACK OF YOUR PROGRESS! This can be done by having a public GitHub repository for your project. We may ask to see it at the end of the hackathon.",
  },
  {
    number: 3,
    title: "Team Size",
    text: "Solo developers and teams of up to 4 people are allowed. Join our community group to easily find teammates!",
  },
  {
    number: 4,
    title: "Game Content",
    text: "Games should generally be appropriate for all ages, with the exception of scary/violent content in horror games. No offensive, hateful, or explicit content.",
  },
  {
    number: 5,
    title: "Be Kind",
    text: "Provide constructive feedback to others and maintain a supportive community atmosphere!",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="rules-container">
      {/* Title with underline */}
      <h2 className="rules-title">Rules</h2>
      <div className="rules-title-underline" />

      {/* Rules list */}
      <div className="rules-list">
        {rulesData.map((rule, idx) => (
          <article key={idx} className="rule-item">
            <h3 className="rule-item-title">
              {rule.number}. {rule.title}
            </h3>
            <p className="rule-item-text">{rule.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
