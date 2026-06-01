import { TRUST_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-white" aria-label="Trust highlights">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-zinc-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-3 px-8 py-7 text-center sm:py-8"
          >
            <CheckIcon />
            <span className="text-sm font-medium tracking-wide text-brand-dark sm:text-[0.9375rem]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-accent">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12l4 4L19 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
