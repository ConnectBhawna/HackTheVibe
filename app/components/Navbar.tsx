"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav-inner">
        {/* Mobile Logo - only visible on mobile */}
        <Link href="/" className="nav-mobile-logo" onClick={closeMenu}>
          HackTheVibe
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          <Link href="/">Home</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/hackers-guide">Hacker&apos;s Guide</Link>
          <Link href="/challenges">Challenges</Link>
          <Link href="/prizes">Prizes</Link>
          <Link href="/facilitators">Our Facilitators</Link>
          <a href="https://theayacommunity.com/community" target="_blank" rel="noopener noreferrer">Join our community</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="nav-hamburger" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`nav-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/timeline" onClick={closeMenu}>Timeline</Link>
        <Link href="/rules" onClick={closeMenu}>Rules</Link>
        <Link href="/hackers-guide" onClick={closeMenu}>Hacker&apos;s Guide</Link>
        <Link href="/challenges" onClick={closeMenu}>Challenges</Link>
        <Link href="/prizes" onClick={closeMenu}>Prizes</Link>
        <Link href="/facilitators" onClick={closeMenu}>Our Facilitators</Link>
        <a href="https://theayacommunity.com/community" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Join our community</a>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && <div className="nav-backdrop" onClick={closeMenu}></div>}
    </nav>
  );
}
