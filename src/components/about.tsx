import { Braces, GraduationCap, Layers3, Server, Smartphone } from "lucide-react";

const skills = [
  { icon: Braces, title: "Web & interfaces", tools: "React, Next.js, TypeScript, Tailwind CSS, TanStack Query, Zustand" },
  { icon: Smartphone, title: "Mobile experiences", tools: "React Native, Expo, Expo EAS, Fastlane" },
  { icon: Server, title: "Behind the scenes", tools: "Node.js, Express, PostgreSQL, Redis, REST APIs, WebSockets, FastAPI" },
  { icon: Layers3, title: "Shipping & infrastructure", tools: "AWS S3, Lambda, EC2, Amplify, Docker, GitHub Actions, Turborepo, Bun" },
];

export default function About() {
  return (
    <section id="about" className="section shell about-section" aria-labelledby="about-heading">
      <div className="about-copy"><p className="eyebrow section-index">03 / BEHIND THE CODE</p><h2 id="about-heading">Curious by default.<br /><span className="serif">Engineer by craft.</span></h2><p>I’m Nilanjan, a full-stack engineer based in West Bengal, India. I like getting into the details: how an upload recovers after a dropped connection, how a drawing tool handles a zoom, how four apps can share one solid foundation.</p><p>My work spans the interface and the systems behind it. I care about clear interactions, maintainable code, and making complicated things easier to use.</p><div className="education"><GraduationCap size={23} aria-hidden="true" /><div><strong>B.Tech in Information Technology</strong><p>RCC Institute of Information Technology, Kolkata</p><span>Class of 2024 · CGPA 8.37</span></div></div></div>
      <div className="toolbox"><p className="eyebrow">MY EVERYDAY TOOLKIT</p>{skills.map(({ icon: Icon, title, tools }) => <div className="skill-row" key={title}><span className="skill-icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span><div><h3>{title}</h3><p>{tools}</p></div></div>)}<p className="languages">Also comfortable with JavaScript, SQL, Python & Go.</p></div>
    </section>
  );
}
