import Image from "next/image";

const SAMPLE_PROJECTS = [
  { id: 1, title: "VibeChat", desc: "A chill chat app with mood-based rooms.", img: "/next.svg" },
  { id: 2, title: "PixelBot", desc: "An AI art generator for retro sprites.", img: "/next.svg" },
  { id: 3, title: "Jamboard", desc: "Collaborative music loops in the browser.", img: "/next.svg" },
  { id: 4, title: "ClipDeck", desc: "Micro Demos: 1-minute product videos.", img: "/next.svg" },
];

export default function ProjectsGrid() {
  return (
    <div id="projects" className="site-section">
      <div className="section-inner">
        <h2 style={{color:'var(--poster-blue)'}}>Projects</h2>
        <p className="muted">Highlighted submissions from previous runs. Replace with real project cards.</p>

        <div className="projects-grid" style={{marginTop:18}}>
          {SAMPLE_PROJECTS.map(p => (
            <article key={p.id} className="project-card">
              <div style={{display:'flex', gap:12, alignItems:'center'}}>
                <div style={{width:72, height:72, flex:'0 0 72px'}}>
                  <Image src={p.img} alt={p.title} width={72} height={72} />
                </div>
                <div>
                  <div className="title">{p.title}</div>
                  <div className="meta">{p.desc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
