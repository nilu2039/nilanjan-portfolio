import flixrImage from "@/assets/images/flixr.png";
import hushmarkImage from "@/assets/images/hushmark.jpg";
import kaigiImage from "@/assets/images/kaigi.png";
import { GITHUB } from "@/constants";
import { ArrowRightIcon as ArrowRight, ArrowUpRightIcon as ArrowUpRight, SelectionIcon as BoxSelect, CheckIcon as Check, CaretDownIcon as ChevronDown, StackIcon as Layers3, ScanIcon as ScanLine, FingerprintIcon as ShieldCheck, DeviceMobileIcon as Smartphone, UploadSimpleIcon as Upload, FlowArrowIcon as Workflow, VideoCameraIcon as Video } from "@phosphor-icons/react/ssr";
import Image from "next/image";

function AnnotationVisual() {
  return (
    <div className="project-visual annotation-visual" aria-hidden="true">
      <span className="visual-caption caption-4">Workflow illustration</span>
      <div className="annotation-window">
        <div className="window-top caption-4"><span className="window-dots"><i /><i /><i /></span><span>annotation workspace</span><BoxSelect size={13} /></div>
        <div className="annotation-workspace">
          <div className="annotation-tools"><BoxSelect size={16} /><ScanLine size={16} /><Layers3 size={16} /></div>
          <div className="annotation-canvas"><span className="canvas-cross cross-one caption-4">+</span><span className="canvas-cross cross-two caption-4">+</span><div className="annotated-object object-one" /><div className="annotated-object object-two" /><div className="bounding-box"><span className="caption-4">object</span><i /><i /><i /><i /></div><div className="small-box"><span className="caption-4">object</span></div><span className="canvas-label caption-4">LABEL. REFINE. TRAIN.</span></div>
        </div>
        <div className="pipeline caption-4"><span><Upload size={11} /> Upload</span><ArrowRight size={12} /><span><BoxSelect size={11} /> Annotate</span><ArrowRight size={12} /><span><Workflow size={11} /> Train</span></div>
      </div>
      <div className="visual-sticker caption-4"><Check size={13} /> Every detail, in the right place.</div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="project-visual mobile-visual" aria-hidden="true">
      <span className="visual-caption caption-4">Platform illustration</span>
      <div className="mobile-orbit orbit-one" /><div className="mobile-orbit orbit-two" />
      <div className="shared-code caption-3"><Layers3 size={17} /><span>One shared codebase</span></div>
      <div className="phone-group">
        {["peach", "green", "lavender", "yellow"].map((color, index) => (
          <div className={`mini-phone phone-${color}`} key={color}>
            <span className="phone-camera" /><div className="phone-app-icon title-3">✳</div><span className="phone-title caption-3">Next<br />move.</span><div className="phone-tile"><span /><i /><i /></div><div className="phone-progress"><i /></div><div className="phone-bottom"><span /><span /><span /></div><span className="phone-brand caption-4">0{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="mobile-visual-footer caption-4"><span><Smartphone size={12} /> Four branded apps</span><span>React Native + Expo</span></div>
    </div>
  );
}

const personalProjects = [
  { title: "HushMark", category: "Personal information redaction", description: "Find sensitive information in text, documents, and audio. Review each match, redact selected details, and export protected text or beeped audio.", image: hushmarkImage, icon: ShieldCheck, tags: ["Next.js", "FastAPI", "Presidio", "OpenAI"], links: [{ label: "Live demo", href: "https://hush-mark.nilanjan.xyz/" }, { label: "Frontend source", href: `${GITHUB}/hush-mark-web` }, { label: "Backend source", href: `${GITHUB}/hush-mark` }] },
  { title: "Flixr", category: "YouTube workflow automation", description: "From an editor’s upload to an admin’s approval to a published video. A simpler workflow for content teams.", image: flixrImage, icon: Workflow, tags: ["Next.js", "Express", "PostgreSQL", "Redis"], links: [{ label: "Frontend source", href: `${GITHUB}/flixr-client` }, { label: "Backend source", href: `${GITHUB}/flixr-server` }] },
  { title: "Kaigi", category: "Live collaboration", description: "A space to talk, sketch, and work together, with peer to peer video, live messaging, and a shared whiteboard.", image: kaigiImage, icon: Video, tags: ["Next.js", "Fastify", "WebRTC", "Socket.IO"], links: [{ label: "Frontend source", href: `${GITHUB}/kaigi-client` }, { label: "Backend source", href: `${GITHUB}/kaigi-server` }] },
];

export default function Projects() {
  return (
    <section id="projects" className="section shell" data-reveal aria-labelledby="projects-heading">
      <div className="section-heading"><div><p className="eyebrow section-index caption-3">01 / Selected work</p><h2 id="projects-heading" className="heading-2">Built to solve<br /><span className="accent">something real.</span></h2></div><p className="section-intro body-3">A few projects where thoughtful interfaces meet the engineering underneath.</p></div>
      <div className="featured-grid">
        <article className="project-card">
          <AnnotationVisual />
          <div className="project-copy"><p className="project-category caption-4">23 Ventures · Web application</p><h3 className="heading-5">From raw data to model training.</h3><p className="body-6">An image annotation workspace connecting dataset uploads, precise labeling, training configuration, and model evaluation.</p><div className="tags"><span>React</span><span>TypeScript</span><span>TanStack Query</span><span>AWS S3</span></div>
            <details className="project-details"><summary className="title-4">My contribution <ChevronDown size={16} aria-hidden="true" /></summary><div><p className="detail-title title-4">Annotation Platform / TrainingObjects</p><ul className="body-6"><li>Resumable multipart uploads with concurrent transfers, retries, and renewal of signed URLs.</li><li>Bounding box editing with drawing, resizing, coordinate transforms, zoom, pan, and keyboard controls.</li><li>YOLOv8 dataset preparation and training interfaces, including augmentation, data splits, compute selection, and evaluation metrics.</li></ul></div></details>
          </div>
        </article>
        <article className="project-card">
          <MobileVisual />
          <div className="project-copy"><p className="project-category caption-4">23 Ventures · Mobile platform</p><h3 className="heading-5">Four identities. One foundation.</h3><p className="body-6">A shared mobile platform for four branded apps, bringing live games, rewards, and location based experiences together.</p><div className="tags"><span>React Native</span><span>Expo</span><span>TypeScript</span><span>WebSockets</span></div>
            <details className="project-details"><summary className="title-4">My contribution <ChevronDown size={16} aria-hidden="true" /></summary><div><p className="detail-title title-4">Social Change — Mobile Platform & Admin</p><ul className="body-6"><li>Reusable product logic, configurable experiences, and themes for each brand across four apps.</li><li>BLE beacon and GPS geofencing workflows with background tracking and recovery after signal loss.</li><li>Admin tools for venues, campaigns, rewards, wallet oversight, and bulk redemption decisions.</li><li>Automated branded iOS builds using Expo EAS and native project configuration.</li></ul></div></details>
          </div>
        </article>
      </div>
      <div className="side-project-heading"><span className="eyebrow caption-3">Built on my own time</span><a className="text-link title-4" href={GITHUB} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div>
      <div className="personal-grid">{personalProjects.map((project) => (
        <article className="personal-project" key={project.title}>
          <div className={`personal-image ${project.title.toLowerCase()}-image`}><Image src={project.image} alt={`${project.title} application interface`} sizes="(max-width: 700px) 90vw, 45vw" /></div>
          <div className="personal-copy"><p className="project-category caption-4">{project.category}</p><h3 className="heading-5">{project.title}<span className="project-title-icon"><project.icon size={22} aria-hidden="true" /></span></h3><p className="body-6">{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="repo-links">{project.links.map((link) => <a className="caption-1" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} ${link.label}`}>{link.label} <ArrowUpRight size={14} aria-hidden="true" /></a>)}</div></div>
        </article>
      ))}</div>
    </section>
  );
}
