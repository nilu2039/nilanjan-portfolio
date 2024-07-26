import profileImage from "@/assets/images/nilanjan.png";
import About from "@/components/about";
import NavBar from "@/components/navbar";
import Work from "@/components/work";
import { NAME } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-w-fit flex flex-col items-center min-h-dvh overflow-x-hidden">
      <div className="w-full md:w-9/12 h-full flex flex-col items-center">
        <NavBar />
        <div className="w-4/5 md:w-8/12 lg:w-7/12 mt-24 flex flex-col gap-10">
          <div className="text-sm md:text-base bg-secondary text-center py-2 rounded-lg font-medium px-5">
            Hello, I&apos;m a full-stack developer based in India
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl md:text-4xl font-semibold">{`${NAME} 👋`}</p>
            <Image src={profileImage} alt={NAME} className="w-28 h-28" />
          </div>
          <About />
          <Work />
        </div>
      </div>
    </div>
  );
}
