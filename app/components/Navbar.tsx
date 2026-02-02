import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="site-nav-inner">
        <Link href="/">Home</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/rules">Rules</Link>
        <Link href="/prizes">Prizes</Link>
        <Link href="/facilitators">Our Facilitators</Link>
        <a href="https://t.me/ayahackathonnews" target="_blank" rel="noopener noreferrer">Join our community</a>
      </div>
    </nav>
  );
}
