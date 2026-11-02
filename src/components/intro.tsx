import { GitHubIcon, LinkedInIcon } from "./brand-icons";
import profileImage from "@/assets/images/nilanjan.png";
import { COMPANY_LINKS, GITHUB, LINKEDIN, RESUME } from "@/constants";
import { ArrowDownIcon as ArrowDown, ArrowDownRightIcon as ArrowDownRight, ArrowUpRightIcon as ArrowUpRight, AsteriskIcon as Asterisk } from "@phosphor-icons/react/ssr";
import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="hero shell" aria-labelledby="intro-heading">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow caption-3"><span className="status-dot" /> Full stack engineer · India</p>
          <p className="hello title-2">Hey, I’m Nilanjan.</p>
          <h1 id="intro-heading" className="heading-1 hero-title">Thoughtful code.<br />Useful things.</h1>
          <p className="hero-description body-3">I build web and mobile products that make complex work feel simple. From the first interaction to the systems behind it.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary button-md">Explore my work <ArrowDownRight size={20} aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <a className="caption-1" href={GITHUB} target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            <span className="social-divider" />
            <a className="caption-1" href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="caption-1 resume-link" href={RESUME} download="Nilanjan-Mandal-Resume.pdf">Résumé <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <p className="hero-proof caption-2">Experience at <span className="title-4">23 Ventures</span> and <span className="title-4">StepOut</span>.</p>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-card">
            <div className="portrait-topline caption-4"><span>A little human<br />behind the code.</span><span>NM / 26</span></div>
            <div className="portrait-circle"><Image src={profileImage} alt="Nilanjan Mandal" priority sizes="(max-width: 700px) 70vw, 340px" /></div>
            <Asterisk className="portrait-asterisk" weight="light" aria-hidden="true" />
            <div className="portrait-caption caption-4"><span>West Bengal, India</span><span>Web · Mobile · Systems</span></div>
          </div>
          <div className="portrait-note caption-2"><span className="note-line" /> Building across web & mobile.</div>
        </div>
      </div>
      <div className="hero-bottom">
        <p className="caption-4">Experience at <a className="title-3" href={COMPANY_LINKS.ventures} target="_blank" rel="noopener noreferrer">23 Ventures</a><span className="hero-bottom-plus">+</span><a className="title-3" href={COMPANY_LINKS.stepout} target="_blank" rel="noopener noreferrer">StepOut</a></p>
        <a className="caption-1" href="#projects">A few things I’ve worked on <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
