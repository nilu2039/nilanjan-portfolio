import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";

export default function NotFound() {
  return (
    <main className="shell not-found">
      <p className="eyebrow caption-3">Nilanjan Mandal · 404</p>
      <h1 className="heading-1">A page out of place.</h1>
      <p className="body-3">This address doesn’t lead anywhere. Head back to my portfolio to explore my projects and experience.</p>
      <Link href="/#intro" className="button button-primary button-md"><ArrowLeftIcon size={20} aria-hidden="true" /> Back to my work</Link>
    </main>
  );
}
