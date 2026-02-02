import Image from "next/image";

// GitHub Copilot logo SVG (gorilla with goggles) in white color for contrast
function CopilotLogo() {
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GitHub Copilot"
      className="copilot-logo"
      style={{ transform: "rotate(-12deg)" }}
    >
      {/* Head/helmet shape */}
      <ellipse cx="50" cy="55" rx="45" ry="38" fill="rgba(255,255,255,0.9)" />
      {/* Ears */}
      <ellipse cx="12" cy="55" rx="10" ry="14" fill="rgba(255,255,255,0.9)" />
      <ellipse cx="88" cy="55" rx="10" ry="14" fill="rgba(255,255,255,0.9)" />
      {/* Face/muzzle */}
      <rect x="22" y="50" width="56" height="35" rx="12" fill="var(--poster-blue)" />
      {/* Goggles strap */}
      <rect x="42" y="28" width="16" height="8" rx="2" fill="rgba(255,255,255,0.9)" />
      {/* Left goggle */}
      <ellipse cx="32" cy="40" rx="16" ry="14" fill="var(--poster-blue)" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
      {/* Right goggle */}
      <ellipse cx="68" cy="40" rx="16" ry="14" fill="var(--poster-blue)" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
      {/* Nostrils/mouth holes */}
      <rect x="38" y="62" width="8" height="14" rx="4" fill="rgba(255,255,255,0.9)" />
      <rect x="54" y="62" width="8" height="14" rx="4" fill="rgba(255,255,255,0.9)" />
    </svg>
  );
}

// Decorative underline SVG
function Underline() {
  return (
    <svg width="280" height="12" viewBox="0 0 280 12" fill="none" className="underline-svg">
      <path d="M2 8C60 2 140 2 180 6C220 10 260 8 278 4" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
      <path d="M2 10C80 4 160 4 200 8C240 12 270 8 278 6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Logo on left + Title & tagline on right */}
        <div className="hero-logo-title animate-fade-in">
          <div className="copilot-float">
            <CopilotLogo />
          </div>
          <div className="hero-title-group">
            <h1 className="hero-main-title">
              <span className="hero-title-light">Hack The </span>
              <span className="hero-title-bold">VIBE</span>
            </h1>
            <p className="hero-tagline">A Vibe Coding Hackathon</p>
          </div>
        </div>

        {/* Build something amazing line */}
        <div className="hero-build-line animate-fade-in-delay-1">
          <p className="hero-build-text">
            Build <em>something amazing</em> in just 36 hours.
          </p>
          <svg className="hero-underline" width="280" height="16" viewBox="0 0 280 16" fill="none">
            <path d="M4 8C50 4 100 4 150 8C200 12 250 10 276 6" stroke="rgba(255,255,255,0.6)" strokeWidth="4" strokeLinecap="round" />
            <path d="M4 12C70 6 140 6 200 10C240 13 265 11 276 9" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Date */}
        <p className="hero-date animate-fade-in-delay-2">
          Feb 20th - 22nd, 2026
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-delay-2" style={{ marginTop: 32 }}>
          <a
            href="https://lu.ma/aipnc5jg"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
