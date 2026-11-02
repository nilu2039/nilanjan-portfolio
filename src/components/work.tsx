import Image from "next/image";
import venturesLogo from "@/assets/images/23-ventures.png";
import stepoutLogo from "@/assets/images/stepout.png";
import { ArrowDownIcon as ArrowDown, ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import { COMPANY_LINKS, RESUME } from "@/constants";

export default function Work() {
  return (
    <section id="works" className="section experience-section" data-reveal aria-labelledby="work-heading">
      <div className="shell experience-layout">
        <div className="experience-intro"><p className="eyebrow section-index caption-3">02 / The journey</p><h2 id="work-heading" className="heading-2">A little context.<br /><span className="accent">A lot of building.</span></h2><p className="body-3">Working across product interfaces, mobile experiences, and the infrastructure that makes them reliable.</p><a href={RESUME} download="Nilanjan-Mandal-Resume.pdf" className="text-link title-4">The full résumé <ArrowDown size={15} aria-hidden="true" /></a></div>
        <div className="timeline">
          <article className="experience-item"><div className="experience-meta"><span className="company-mark ventures-mark"><Image src={venturesLogo} alt="23 Ventures logo" sizes="48px" /></span><span className="caption-4">Sep 2024 to Oct 2026</span></div><h3 className="heading-5"><a className="company-link" href={COMPANY_LINKS.ventures} target="_blank" rel="noopener noreferrer">23 Ventures <ArrowUpRight size={18} aria-hidden="true" /></a></h3><p className="role title-4">Member of Technical Staff <span>· Remote, India</span></p><p className="body-6">Built web and mobile products across Social Change, TrainingObjects, and CryptoApe / FutureApe.</p><ul className="body-6"><li>Shared React Native / Expo experiences across four branded applications.</li><li>Annotation, dataset preparation, and model training interfaces.</li><li>Live trading competition workflows, portfolio rebalancing, and live rank notifications.</li></ul><div className="tags"><span>React & Next.js</span><span>React Native</span><span>AWS</span></div></article>
          <article className="experience-item"><div className="experience-meta"><span className="company-mark"><Image src={stepoutLogo} alt="StepOut logo" sizes="48px" /></span><span className="caption-4">Nov 2021 to May 2024</span></div><h3 className="heading-5"><a className="company-link" href={COMPANY_LINKS.stepout} target="_blank" rel="noopener noreferrer">StepOut <ArrowUpRight size={18} aria-hidden="true" /></a></h3><p className="role title-4">Software Engineering Intern <span>· Remote, India</span></p><p className="body-6">Improved upload, payment, analytics, and mobile workflows for a sports performance analysis platform.</p><ul className="body-6"><li>Multipart video uploads and AWS Lambda / Playwright document workflows.</li><li>Razorpay payments, Mixpanel and GA4 instrumentation, multilingual support, and wireless app updates.</li></ul><div className="tags"><span>React Native</span><span>Node.js</span><span>AWS Lambda</span></div></article>
        </div>
      </div>
    </section>
  );
}
