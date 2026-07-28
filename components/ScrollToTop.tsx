"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function withInstantScroll(fn: () => void) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  fn();
  html.style.scrollBehavior = previous;
}

function scrollWindowToTop() {
  withInstantScroll(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  withInstantScroll(() => {
    el.scrollIntoView({ block: "start", behavior: "auto" });
  });
}

/** Ensures soft navigations land at the intended scroll position. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    // Homepage hero must open at scroll 0 — the exact first-viewport layout.
    if (pathname === "/" && (hash === "" || hash === "#about")) {
      if (hash === "#about") {
        window.history.replaceState(null, "", "/");
      }
      scrollWindowToTop();
      requestAnimationFrame(scrollWindowToTop);
      const timeoutId = window.setTimeout(scrollWindowToTop, 0);
      return () => window.clearTimeout(timeoutId);
    }

    if (hash) {
      // Defer so the destination page (and sticky header offset) is painted first.
      const timeoutId = window.setTimeout(() => scrollToHash(hash), 0);
      return () => window.clearTimeout(timeoutId);
    }

    scrollWindowToTop();
  }, [pathname]);

  return null;
}
