import { TRUST_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-zinc-200 bg-white" aria-label="Trust highlights">
      <ul className="mx-auto grid max-w-7xl list-none grid-cols-1 border-l border-t border-zinc-200 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <li
            key={item}
            className="flex min-h-[5.5rem] items-center justify-center gap-3 border-b border-r border-zinc-200 px-6 py-7 text-center"
          >
            <CheckIcon />
            <span className="text-sm font-medium tracking-wide text-brand-dark sm:text-[0.9375rem]">
              {item}
            </span>
          </li>
        ))}
      </ul>
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
