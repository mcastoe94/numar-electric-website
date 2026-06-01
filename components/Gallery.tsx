import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Quality Electrical Work, Done Right"
          description="A look at the types of projects Numar Electric handles for Arizona homes and businesses."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden border border-zinc-200 bg-white transition-all hover:shadow-[0_8px_30px_rgba(57,68,57,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-[linear-gradient(145deg,#394439,#111111)]" />
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-white/20 bg-white/5 text-white backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                      <path
                        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <span className="absolute left-4 top-4 bg-accent px-3 py-1 text-xs font-medium tracking-wide text-brand-dark">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-brand-dark">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
