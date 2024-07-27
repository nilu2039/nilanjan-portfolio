"use client";

import About from "@/components/about";
import Conclusion from "@/components/conclusion";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Work from "@/components/work";

import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});

    Events.scrollEvent.register("end", () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className="min-w-fit flex flex-col items-center min-h-dvh overflow-x-hidden">
      <div className="w-full md:w-9/12 h-full flex flex-col items-center">
        <NavBar />
        <div className="w-4/5 md:w-4/5 lg:w-8/12 mt-24 flex flex-col gap-10">
          <Intro />
          <About />
          <Work />
          <Projects />
          <Conclusion />
          <Footer />
        </div>
      </div>
    </div>
  );
}
