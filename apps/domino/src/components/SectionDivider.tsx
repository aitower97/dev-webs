export function SectionDivider({ variant = "cutlery" }: { variant?: "cutlery" | "dots" | "line" }) {
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center gap-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />
        <span className="h-2 w-2 rounded-full bg-primary-500" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="flex items-center justify-center gap-4 py-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-300" />
        <div className="h-2 w-2 rotate-45 border border-primary-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-300" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary-300" />
      <svg viewBox="0 0 60 30" className="h-6 w-12 text-primary-400" fill="none" stroke="currentColor" strokeWidth="1.5">
        {/* Fork */}
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="5" y1="2" x2="5" y2="10" />
        <line x1="8" y1="2" x2="8" y2="10" />
        <line x1="11" y1="2" x2="11" y2="10" />
        <path d="M5,10 Q8,14 11,10" />
        {/* Knife */}
        <line x1="52" y1="2" x2="52" y2="18" />
        <path d="M49,2 Q49,10 52,10" />
        {/* Plate circle */}
        <circle cx="30" cy="15" r="10" strokeWidth="1" />
        <circle cx="30" cy="15" r="7" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary-300" />
    </div>
  );
}
