import { WHY_CHOOSE } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-brand py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Numar Electric"
          title="The Standard We Hold on Every Job"
          description="We know electrical work is about more than wiring — it's about trust, safety, and showing up prepared to solve the problem the right way."
          light
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/5 p-8 transition-all hover:border-accent/30 hover:bg-white/8"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading mt-5 text-xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
