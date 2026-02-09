import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacilitatorCard from "../components/FacilitatorCard";

const facilitators = [
  {
    name: "Harshavardhan Bajoria",
    description:
      "Microsoft Learn Student Ambassador & passionate developer building impactful solutions with cloud and AI technologies.",
    photo:
      "/facilitators/harshavardhan.jpeg",
    linkedIn: "https://www.linkedin.com/in/harshavardhan-bajoria/",
  },
  {
    name: "Devansh",
    description:
      "Developer at Creative Banjara, passionate about building innovative tech solutions and community-driven projects.",
    photo: "/facilitators/devansh.png",
    linkedIn: "https://www.linkedin.com/in/sconedev",
  },
  {
    name: "Nitya Pasrija",
    description:
      "Software Developer at Amazon, building scalable solutions and empowering developers through community engagement.",
    photo: "/facilitators/nitya.jpeg",
    linkedIn: "https://www.linkedin.com/in/nitya-pasrija/",
  },
  {
    name: "Joshua Edward Magnis Gara",
    description:
      "Tech enthusiast at MANCER, exploring the intersection of innovation and technology to drive meaningful impact.",
    photo: "/facilitators/josh.jpeg",
    linkedIn:
      "https://www.linkedin.com/in/joshua-edward-magnis-gara-7824a6270/",
  },
  {
    name: "Monika Rajput",
    description:
      "Professional at AHEAD, driving technology solutions and helping teams deliver excellence in cloud and infrastructure.",
    photo: "/facilitators/monika.jpeg",
    linkedIn: "https://www.linkedin.com/in/mounicarajput/",
  },
  {
    name: "Phuc",
    description:
      "Creative developer and open-source contributor, building tools that make the developer experience seamless and delightful.",
    photo: "/facilitators/phuc.jpeg",
    linkedIn: "https://www.linkedin.com/in/phuc-source/",
  },
  {
    name: "Praveen Kumar",
    description:
      "Technology professional at Fitch Group, Inc., specializing in innovative solutions and empowering developer communities.",
    photo: "/facilitators/praveen.jpeg",
    linkedIn: "https://www.linkedin.com/in/praveentech/",
  },
  {
    name: "Rajani",
    description:
      "Innovator working on stealth-mode projects, bringing creative solutions to complex problems in the tech space.",
    photo: "/facilitators/rajani.png",
    linkedIn: "https://www.linkedin.com/in/rajani103/",
  },
  {
    name: "Bhawna Chauhan",
    description:
      "GitHub Campus Expert, contributing to theayacommunity & theayawallet. Prev. at Collabora, NEAR Protocol. Passionate about building communities and hackathons.",
    photo: "/facilitators/bhawna.png",
    linkedIn: "https://www.linkedin.com/in/connectbhawna/",
  },
];

export default function FacilitatorsPage() {
  return (
    <main className="rules-page-bg">
      <Navbar />

      <section className="rules-container" style={{ maxWidth: 1100 }}>
        <h2 className="rules-title">Our Facilitators</h2>
        <div className="rules-title-underline" />

        <div className="facilitators-grid">
          {facilitators.map((f) => (
            <FacilitatorCard
              key={f.name}
              name={f.name}
              description={f.description}
              photo={f.photo}
              linkedIn={f.linkedIn}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
