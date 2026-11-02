import { GitHubIcon, LinkedInIcon } from "./brand-icons";
import { EMAIL, GITHUB, LINKEDIN } from "@/constants";
import { ArrowUpRightIcon as ArrowUpRight, AsteriskIcon as Asterisk, EnvelopeIcon as Mail } from "@phosphor-icons/react/ssr";

export default function Conclusion() {
  return (
    <section id="contact" className="contact-section" data-reveal aria-labelledby="contact-heading">
      <div className="shell contact-inner"><div><p className="eyebrow caption-3">04 / What’s next?</p><h2 id="contact-heading" className="heading-2">Have something<br /><span className="accent">good in mind?</span></h2><p className="body-3">A product to build, a tricky problem, or just a hello.<br />I’d love to hear from you.</p><a href={`mailto:${EMAIL}`} className="contact-email title-1">{EMAIL}<ArrowUpRight aria-hidden="true" /></a><div className="contact-socials caption-1"><a href={`mailto:${EMAIL}`}><Mail size={16} aria-hidden="true" /> Email me <ArrowUpRight size={13} aria-hidden="true" /></a><a href={GITHUB} target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><LinkedInIcon size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a></div><div className="contact-work"><a className="button button-primary button-md" href="#projects">Explore my work <ArrowUpRight size={20} aria-hidden="true" /></a></div></div><Asterisk className="contact-asterisk" weight="light" aria-hidden="true" /></div>
    </section>
  );
}
