import About from "@/components/about";
import Conclusion from "@/components/conclusion";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Work from "@/components/work";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar />
      <main id="main">
        <Intro />
        <Projects />
        <Work />
        <About />
        <Conclusion />
      </main>
      <Footer />
    </>
  );
}
