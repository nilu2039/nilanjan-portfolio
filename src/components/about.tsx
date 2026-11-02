import { CodeIcon as Braces, GraduationCapIcon as GraduationCap, StackIcon as Layers3, HardDrivesIcon as Server, DeviceMobileIcon as Smartphone } from "@phosphor-icons/react/ssr";

const skills = [
  { icon: Braces, title: "Web & interfaces", tools: "React, Next.js, TypeScript, Tailwind CSS, TanStack Query, Zustand" },
  { icon: Smartphone, title: "Mobile experiences", tools: "React Native, Expo, Expo EAS, Fastlane" },
  { icon: Server, title: "Behind the scenes", tools: "Node.js, Express, PostgreSQL, Redis, REST APIs, WebSockets, FastAPI" },
  { icon: Layers3, title: "Shipping & infrastructure", tools: "AWS S3, Lambda, EC2, Amplify, Docker, GitHub Actions, Turborepo, Bun" },
];

export default function About() {
  return (
    <section id="about" className="section shell about-section" data-reveal aria-labelledby="about-heading">
      <div className="about-copy"><p className="eyebrow section-index caption-3">03 / Behind the code</p><h2 id="about-heading" className="heading-2">Curious by default.<br /><span className="accent">Engineer by craft.</span></h2><p className="body-3">I’m Nilanjan, a full stack engineer based in West Bengal, India. I like getting into the details: how an upload recovers after a dropped connection, how a drawing tool handles a zoom, how four apps can share one solid foundation.</p><p className="body-3">My work spans the interface and the systems behind it. I care about clear interactions, maintainable code, and making complicated things easier to use.</p><div className="education"><GraduationCap size={23} aria-hidden="true" /><div><strong className="title-4">B.Tech in Information Technology</strong><p className="body-6">RCC Institute of Information Technology, Kolkata</p><span className="caption-4">Class of 2024 · CGPA 8.37</span></div></div></div>
      <div className="toolbox"><p className="eyebrow caption-3">My everyday toolkit</p>{skills.map(({ icon: Icon, title, tools }) => <div className="skill-row" key={title}><span className="skill-icon"><Icon size={20} weight="regular" aria-hidden="true" /></span><div><h3 className="title-3">{title}</h3><p className="body-6">{tools}</p></div></div>)}<p className="languages caption-2">Also comfortable with JavaScript, SQL, Python & Go.</p></div>
    </section>
  );
}
