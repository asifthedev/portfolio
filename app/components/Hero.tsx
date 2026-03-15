import Image from "next/image";

/**
 * Hero - Main landing section with headline and CTA
 *
 * Features:
 * - Multiple background glow effects for visual depth
 * - Client badge with overlapping avatars
 * - Staggered fade-up animations
 * - CTA button with animated arrow transition
 * - Responsive typography scaling
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-80px)] flex items-start justify-center text-center overflow-hidden bg-black text-white px-6"
    >
      {/* Background Glow Effects - Multiple layered glows for depth */}
      <div
        className="absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full bg-[#2391C4]/24 blur-[155px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-28 -right-20 h-[430px] w-[430px] rounded-full bg-[#6c5ce7]/20 blur-[155px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="h-[620px] w-[620px] rounded-full bg-[#2391C4]/22 blur-[165px]" />
      </div>

      <div className="relative z-10 max-w-5xl flex flex-col items-center gap-5 md:gap-6 pt-6 md:pt-8">
        {/* Client Trust Badge - Overlapping avatars to show social proof */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-white animate-hero-fade-up">
          <div className="flex items-center">
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/80">
              <Image
                src="/c1.avif"
                alt="Client 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative -ml-1.5 h-7 w-7 overflow-hidden rounded-full border border-white/80">
              <Image
                src="/c2.webp"
                alt="Client 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative -ml-1.5 h-7 w-7 overflow-hidden rounded-full border border-white/80">
              <Image
                src="/client-3.webp"
                alt="Client 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-base leading-none">
            <span className="font-semibold">300+ </span>
            <span>Clients</span>
          </p>
        </div>

        {/* Main Value Proposition Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-balance animate-hero-fade-up hero-delay-1">
          <span className="block">Data Driven Amazon Advertising</span>
          <span className="block text-[#2391C4]">
            Powered by 100+ Case Studies
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-balance animate-hero-fade-up hero-delay-2">
          We use battle-tested Amazon ad strategies backed by real brand
          outcomes.
        </p>

        {/* Key Benefits Tagline */}
        <p className="text-gray-500 text-base md:text-lg animate-hero-fade-up hero-delay-3">
          Better Ads. Better Traffic. Better Margins.
        </p>

        {/* CTA Button with animated arrow */}
        <button
          type="button"
          className="group mt-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black transition duration-300 shadow-[0_0_48px_rgba(35,145,196,0.5)] hover:shadow-[0_0_62px_rgba(35,145,196,0.62)] inline-flex items-center gap-2 animate-hero-fade-up hero-delay-4"
        >
          <span>Get Free Audit</span>
          <span className="relative h-4 w-4">
            {/* Arrow transitions from black to white on hover */}
            <Image
              src="/arrow-black.svg"
              alt="Arrow"
              fill
              className="object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/arrow-white.svg"
              alt="Arrow"
              fill
              className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </span>
        </button>
      </div>
    </section>
  );
}
