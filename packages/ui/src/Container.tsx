import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[92vw] px-4 sm:px-6 lg:px-[4vw] ${className}`}>
      {children}
    </div>
  );
}
