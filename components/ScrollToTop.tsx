"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollWindowToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  html.scrollTop = 0;
  html.style.scrollBehavior = previous;
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

    if (!hash) {
      scrollWindowToTop();
    }
  }, [pathname]);

  return null;
}
