import profileImage from "@/assets/images/nilanjan.png";
import { NAME } from "@/constants";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="text-sm md:text-base bg-secondary text-center py-2 rounded-lg font-medium px-5">
        Hello, I&apos;m a full-stack developer based in India
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-3xl md:text-4xl font-semibold">{`${NAME} 👋`}</p>
        <Image src={profileImage} alt={NAME} className="w-28 h-28" />
      </div>
    </>
  );
};

export default Intro;
