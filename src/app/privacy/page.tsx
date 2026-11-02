import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/constants";

export const metadata: Metadata = { title: "Privacy | Nilanjan Mandal", description: "How this portfolio uses browser storage and handles contact information." };

export default function Privacy() {
  return (
    <main className="shell legal-page">
      <Link href="/#intro" className="text-link title-4">← Back to the portfolio</Link>
      <p className="eyebrow caption-3">Nilanjan Mandal</p>
      <h1 className="heading-2">Privacy policy</h1>
      <h2 className="heading-5">Browsing this portfolio</h2>
      <p className="body-3">This portfolio does not include accounts, advertising, or analytics scripts. It saves your theme preference in your browser’s local storage. You can remove this preference by clearing this site’s browser data.</p>
      <h2 className="heading-5">Getting in touch</h2>
      <p className="body-3">Email links open your email application. If you contact me, your message and the details you choose to include are handled through email. Please share only the information needed for our conversation.</p>
      <h2 className="heading-5">External websites</h2>
      <p className="body-3">Project, source code, and social links lead to other websites. Those services have their own privacy policies.</p>
      <p className="body-3">For questions about this portfolio, email <a className="text-link title-3" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      <Link href="/terms" className="text-link title-4">Read the terms →</Link>
    </main>
  );
}
