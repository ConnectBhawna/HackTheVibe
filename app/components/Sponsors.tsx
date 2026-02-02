export default function Sponsors(){
  const PLACEHOLDERS = ["GitHub", "Aya", "OpenAI", "Vercel"]
  return (
    <div id="sponsors" className="site-section">
      <div className="section-inner">
        <h2 style={{color:'var(--poster-blue)'}}>Sponsors</h2>
        <p className="muted">Thanks to the organizations that make this event possible.</p>
        <div className="sponsors" style={{marginTop:18}}>
          {PLACEHOLDERS.map((s)=> (
            <div key={s} className="sponsor">{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
