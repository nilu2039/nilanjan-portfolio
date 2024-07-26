import { NAME } from "@/constants";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-muted-foreground items-center pb-10 gap-4">
      <p className="text-center">© 2024 {NAME}. All Rights Reserved.</p>
      <div className="flex flex-row gap-8">
        <Link href={"https://github.com/nilu2039/"} target="_blank">
          <Github />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nilanjan-mandal-a825961bb/"
          target="_blank"
        >
          <Linkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
