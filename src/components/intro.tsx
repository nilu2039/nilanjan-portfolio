import { GitHubIcon, LinkedInIcon } from "./brand-icons";
import profileImage from "@/assets/images/nilanjan.png";
import { COMPANY_LINKS, GITHUB, LINKEDIN, RESUME } from "@/constants";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="hero shell" aria-labelledby="intro-heading">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> FULL-STACK ENGINEER · INDIA</p>
          <p className="hello">Hey, I’m Nilanjan <span className="wave" aria-hidden="true">↗</span></p>
          <h1 id="intro-heading">Thoughtful code.<br /><span className="serif">Useful things.</span></h1>
          <p className="hero-description">I turn complex problems into web and mobile experiences that feel simple. From the first interaction to the systems behind it.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={18} aria-hidden="true" /></a>
            <a href={RESUME} download="Nilanjan-Mandal-Resume.pdf" className="button button-text">Download résumé <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            <span className="social-divider" />
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-card">
            <div className="portrait-topline"><span>A LITTLE HUMAN<br />BEHIND THE CODE.</span><span>NM / 26</span></div>
            <div className="portrait-circle"><Image src={profileImage} alt="Nilanjan Mandal" priority sizes="(max-width: 700px) 70vw, 340px" /></div>
            <Asterisk className="portrait-asterisk" strokeWidth={1.2} aria-hidden="true" />
            <div className="portrait-caption"><span>West Bengal, India</span><span>WEB · MOBILE · SYSTEMS</span></div>
          </div>
          <div className="portrait-note"><span className="note-line" /> Building across web & mobile.</div>
        </div>
      </div>
      <div className="hero-bottom">
        <p>EXPERIENCE AT <a href={COMPANY_LINKS.ventures} target="_blank" rel="noopener noreferrer"><strong>23 Ventures</strong></a><span className="hero-bottom-plus">+</span><a href={COMPANY_LINKS.stepout} target="_blank" rel="noopener noreferrer"><strong>StepOut</strong></a></p>
        <a href="#projects">A few things I’ve worked on <ArrowDown size={15} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
