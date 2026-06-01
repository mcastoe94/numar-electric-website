type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-medium uppercase tracking-[0.22em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-4xl leading-[1.12] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg sm:leading-8 ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/72" : "text-zinc-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
