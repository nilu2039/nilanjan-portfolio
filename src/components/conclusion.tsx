import { EMAIL, GITHUB, LINKEDIN } from "@/constants";
import { ArrowUpRight, Asterisk, Github, Linkedin, Mail } from "lucide-react";

export default function Conclusion() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="shell contact-inner"><div><p className="eyebrow">04 / WHAT’S NEXT?</p><h2 id="contact-heading">Have something<br /><span className="serif">good in mind?</span></h2><p>A product to build, a tricky problem, or just a hello.<br />I’d love to hear from you.</p><a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}<ArrowUpRight aria-hidden="true" /></a><div className="contact-socials"><a href={`mailto:${EMAIL}`}><Mail size={16} aria-hidden="true" /> Email me <ArrowUpRight size={13} aria-hidden="true" /></a><a href={GITHUB} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a></div></div><Asterisk className="contact-asterisk" strokeWidth={0.9} aria-hidden="true" /></div>
    </section>
  );
}
