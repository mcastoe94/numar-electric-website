import Image from "next/image";
import Link from "next/link";

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
  const src =
    variant === "light"
      ? "/numar-electric-logo-light.png"
      : "/numar-electric-logo-green.png";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Numar Electric home"
    >
      <span
        className={`inline-flex shrink-0 ${
          elevated ? "rounded-sm bg-white p-2.5 shadow-sm" : ""
        }`}
      >
        <Image
          src={src}
          alt="Numar Electric logo"
          width={64}
          height={64}
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          priority
        />
      </span>
      {showWordmark ? (
        <span
          className={`font-heading hidden text-xl tracking-tight sm:inline lg:text-[1.35rem] ${
            variant === "light" || elevated ? "text-white" : "text-brand"
          }`}
        >
          Numar Electric
        </span>
      ) : null}
    </Link>
  );
}
