import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Education } from "./components/Education.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
