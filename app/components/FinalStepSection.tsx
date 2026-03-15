import Image from "next/image";

/**
 * FinalStepSection - Renders the final call-to-action section on the homepage.
 * Includes a glowing background, heading, subheading, CTA button, and stats image.
 */
export default function FinalStepSection() {
  // Section styles
  const sectionClass =
    "relative py-24 px-6 bg-black text-white flex flex-col items-center justify-center overflow-hidden";
  // Glowing background styles
  const glowClass =
    "absolute w-[800px] h-[300px] bg-[#2391C4]/20 rounded-full blur-[120px] left-1/2 -translate-x-1/2 top-0";
  // Container styles
  const containerClass = "max-w-2xl mx-auto w-full text-center relative z-10";
  // Heading styles
  const headingClass = "text-4xl md:text-5xl font-bold mb-6 tracking-tight";
  // Subheading styles
  const subheadingClass = "mb-8 text-lg md:text-xl text-white/80";
  // CTA button styles (matches Hero section)
  const buttonClass =
    "group mx-auto mb-8 px-8 py-4 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black text-xl transition duration-300 shadow-[0_0_48px_rgba(35,145,196,0.5)] hover:shadow-[0_0_62px_rgba(35,145,196,0.62)] inline-flex items-center gap-2";
  // Stats image styles
  const statsImageClass = "w-60 h-auto drop-shadow-lg mb-2";

  return (
    <section className={sectionClass}>
      {/* Glowing blue background for visual emphasis */}
      <div className={glowClass} />
      <div className={containerClass}>
        {/* Main heading */}
        <h2 className={headingClass}>So are you ready to take the next step</h2>
        {/* Subheading text */}
        <p className={subheadingClass}>
          We build Brand on Amazon by Advertising
        </p>
        {/* Call-to-action button with gradient and animated arrow */}
        <button type="button" className={buttonClass}>
          <span>Get Free Audit</span>
          <span className="relative h-5 w-5">
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
        {/* Stats image (Trustpilot stars) */}
        <div className="flex flex-col items-center mt-4">
          <img src="/stars.svg" alt="Stats" className={statsImageClass} />
        </div>
      </div>
    </section>
  );
}
