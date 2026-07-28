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
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-[0.6875rem] font-medium uppercase tracking-[0.2em] sm:mb-5 sm:text-xs sm:tracking-[0.22em] ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-[2rem] leading-[1.16] sm:text-4xl sm:leading-[1.12] lg:text-[3.15rem] lg:leading-[1.08] ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-[0.9875rem] leading-[1.78] text-pretty sm:mt-6 sm:text-lg sm:leading-[1.75] ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/72" : "text-zinc-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
