import { WHY_CHOOSE } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-brand py-28 text-white sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Numar Electric"
          title="The Standard on Every Job"
          description="We know electrical work is about more than wiring — it's about trust, safety, and showing up prepared to solve the problem the right way."
          light
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-[4.5rem] lg:grid-cols-3">
          {WHY_CHOOSE.map((item, index) => (
            <article
              key={item.title}
              className="border border-white/10 bg-white/5 p-8 transition-[border-color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.08]"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading mt-5 text-[1.25rem] leading-snug">{item.title}</h3>
              <p className="mt-4 text-sm leading-[1.75] text-white/72 text-pretty">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
