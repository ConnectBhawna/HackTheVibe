import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsGrid from "../components/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="rules-page-bg">
      <Navbar />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
