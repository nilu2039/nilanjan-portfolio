export default function Tagline() {
  return (
    <section className="tagline-section" aria-labelledby="tagline-heading">
      <div className="shell tagline-layout">
        <p className="eyebrow caption-3">The way I build</p>
        <h2 id="tagline-heading" className="tagline-text heading-2" aria-label="Complex on the inside. Simple where it matters.">
          {["Complex on the inside.", "Simple where it matters."].map((line) => (
            <span className="tagline-line" key={line} aria-hidden="true">
              {line.split(" ").map((word, index) => <span key={`${line}-${index}`}><span className="tagline-word">{word}</span>{" "}</span>)}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
