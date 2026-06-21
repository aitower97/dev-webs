import type { ReactNode } from "react";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
