"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LogoProps = {
  variant?: "green" | "light";
  className?: string;
  showWordmark?: boolean;
  /** White backing pad — improves green logo visibility on dark backgrounds */
  elevated?: boolean;
};

export function Logo({
  variant = "green",
  className = "",
  showWordmark = true,
  elevated = false,
}: LogoProps) {
  const pathname = usePathname();
  const src =
    variant === "light"
      ? "/numar-electric-logo-light.png"
      : "/numar-electric-logo-green.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-4 transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Numar Electric home"
      onClick={() => {
        if (pathname === "/") {
          const html = document.documentElement;
          const previous = html.style.scrollBehavior;
          html.style.scrollBehavior = "auto";
          window.scrollTo(0, 0);
          html.style.scrollBehavior = previous;
          if (window.location.hash) {
            window.history.replaceState(null, "", "/");
          }
        }
      }}
    >
      <span
        className={`inline-flex shrink-0 ${
          elevated ? "rounded-sm bg-white p-2.5 shadow-sm" : ""
        }`}
      >
        <Image
          src={src}
          alt="Numar Electric logo"
          width={80}
          height={80}
          className="h-[4.375rem] w-[4.375rem] object-contain sm:h-20 sm:w-20"
          priority
        />
      </span>
      {showWordmark ? (
        <span
          className={`font-heading hidden text-[1.375rem] leading-none tracking-[-0.02em] sm:inline lg:text-[1.55rem] ${
            variant === "light" || elevated ? "text-white" : "text-brand"
          }`}
        >
          Numar Electric
        </span>
      ) : null}
    </Link>
  );
}
