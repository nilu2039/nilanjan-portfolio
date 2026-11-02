import About from "@/components/about";
import Conclusion from "@/components/conclusion";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Work from "@/components/work";
import PageMotion from "@/components/page-motion";
import Tagline from "@/components/tagline";

export default function Home() {
  return (
    <>
      <a className="skip-link button-md" href="#main">Skip to content</a>
      <NavBar />
      <main id="main">
        <Intro />
        <Projects />
        <Tagline />
        <Work />
        <About />
        <Conclusion />
      </main>
      <Footer />
      <PageMotion />
    </>
  );
}
