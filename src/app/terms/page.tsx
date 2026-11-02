import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL } from "@/constants";

export const metadata: Metadata = { title: "Terms | Nilanjan Mandal", description: "Information about portfolio content, project ownership, and external links." };

export default function Terms() {
  return (
    <main className="shell legal-page">
      <Link href="/#intro" className="text-link title-4">← Back to the portfolio</Link>
      <p className="eyebrow caption-3">Nilanjan Mandal</p>
      <h1 className="heading-2">Terms of use</h1>
      <h2 className="heading-5">About this site</h2>
      <p className="body-3">This personal portfolio presents my engineering work, experience, and projects. Project descriptions explain my contributions. Professional project visuals marked as illustrations show the workflows, rather than production screenshots.</p>
      <h2 className="heading-5">Content and ownership</h2>
      <p className="body-3">Company names, logos, and project assets belong to their respective owners. Linked source repositories specify their own licenses. Displaying a project here does not grant permission to reuse its assets or source code.</p>
      <h2 className="heading-5">External links</h2>
      <p className="body-3">External project demos, repositories, and profiles are maintained on other services. Their content and availability may change.</p>
      <p className="body-3">For questions about using portfolio material, email <a className="text-link title-3" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      <Link href="/privacy" className="text-link title-4">Read the privacy policy →</Link>
    </main>
  );
}
