const rulesData = [
  // 1. Getting Started: The Basics
  {
    number: 1,
    title: "Team Size",
    text: "Only solo participation & team of 2-4 members during the hackathon is allowed!",
  },
  {
    number: 2,
    title: "Code of Conduct",
    text: "Harassment of any kind, or the inclusion of NSFW content in your project, will result in an immediate ban. We follow the GitHub Community Code of Conduct.",
  },
  {
    number: 3,
    title: "Intellectual Property",
    text: "You own everything you build! By submitting, you grant the organizers the right to feature your project in highlight reels, social media, and wrap-up reports to celebrate your work.",
  },

  // 2. During the Hack: Rules of Play
  {
    number: 4,
    title: "Progress Tracking",
    text: "YOU MUST KEEP TRACK OF YOUR PROGRESS! This can be done by having a public GitHub repository for your project. We may ask to see it at the end of the hackathon.",
  },
  {
    number: 5,
    title: "AI & \"Vibe Coding\" Disclosure",
    text: "We encourage AI tools (like GitHub Copilot, Cursor, etc.). However, you must include a \"Vibe Log\" in your README explaining how you used AI to accelerate your build and what prompts or workflows were key.",
  },
  {
    number: 6,
    title: "The \"No Ghosting\" Rule",
    text: "Participants are expected to be active in the community (Discord/Slack) during the hacking period. If your project is selected for a prize, you must be available to answer brief technical questions from the judges during the judging window.",
  },
  {
    number: 7,
    title: "Be Kind",
    text: "Provide constructive feedback to others and maintain a supportive community atmosphere!",
  },

  // 3. The Build: Quality & Integrity
  {
    number: 8,
    title: "Originality & Plagiarism",
    text: "While you can use libraries, APIs, and open-source frameworks, the core logic and \"vibe\" of the project must be your own. \"Skinning\" an existing project (changing just the UI of someone else's work) is strictly prohibited and will lead to immediate disqualification.",
  },
  {
    number: 9,
    title: "Submissions Timeline",
    text: "Your project must have been entirely made during the hackathon period. You may use pre-existing assets, but you must disclose them and explain how your project relates & what problem it solves.",
  },

  // 4. The Finish Line: Shipping & Eligibility
  {
    number: 10,
    title: "Technical Requirements (The \"Ship\" Rule)",
    text: "To be eligible for judging, your submission must include: a link to the public GitHub repository; a short demo video (1–2 minutes) or a live hosted link (Vercel, Netlify, etc.); and a clear README with setup instructions.",
  },
  {
    number: 11,
    title: "Eligibility Check",
    text: "Projects without a working demo or a README will be automatically moved to the bottom of the pile to save judges' time.",
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
