import { GITHUB, NAME } from "@/constants";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="shell site-footer"><p>© {new Date().getFullYear()} {NAME}</p><a href={`${GITHUB}/nilanjan-portfolio`} target="_blank" rel="noopener noreferrer" className="footer-source">Built with care. View source <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#" className="back-top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></footer>
  );
}
