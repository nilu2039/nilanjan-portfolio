import { GITHUB, NAME } from "@/constants";
import { ArrowUpIcon as ArrowUp, ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shell site-footer caption-2"><p>© {new Date().getFullYear()} {NAME}</p><a href={`${GITHUB}/nilanjan-portfolio`} target="_blank" rel="noopener noreferrer" className="footer-source">Built with care. View source <ArrowUpRight size={16} aria-hidden="true" /></a><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><a href="/#intro" className="back-top">Back to top <ArrowUp size={16} aria-hidden="true" /></a></footer>
  );
}
