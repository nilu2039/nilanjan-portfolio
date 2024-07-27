"use client";

import profileImage from "@/assets/images/nilanjan.png";
import About from "@/components/about";
import Conclusion from "@/components/conclusion";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Projects from "@/components/projects";
import Work from "@/components/work";
import { NAME } from "@/constants";
import Image from "next/image";
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
          <div className="text-sm md:text-base bg-secondary text-center py-2 rounded-lg font-medium px-5">
            Hello, I&apos;m a full-stack developer based in India
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl md:text-4xl font-semibold">{`${NAME} 👋`}</p>
            <Image src={profileImage} alt={NAME} className="w-28 h-28" />
          </div>
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
