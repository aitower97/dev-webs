import { CTAButton } from "./CTAButton";

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundGradient = "from-primary-900 via-primary-800 to-primary-700",
}: {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundGradient?: string;
}) {
  return (
    <section
      className={`relative bg-gradient-to-br ${backgroundGradient} overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2MmgxMnptLTI0IDBoMnYtMkgxMnYyem0wIDRoMnYtMkgxMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={ctaHref} variant="primary">
              {ctaLabel}
            </CTAButton>
            {secondaryCtaLabel && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
              >
                {secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
