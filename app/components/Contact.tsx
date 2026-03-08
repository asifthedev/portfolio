"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-black text-white text-center overflow-hidden"
    >
      {/* Blue Glow Effect */}
      <div className="absolute w-[800px] h-[800px] bg-[#2391C4]/15 rounded-full blur-[180px] left-1/2 -translate-x-1/2 top-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          data-animate="fade-up"
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Let&apos;s Build Something{" "}
          <span className="text-[#2391C4]">Powerful</span>
        </h2>

        <p
          data-animate="fade-up"
          data-delay="1"
          className="text-gray-400 mb-12 text-lg leading-relaxed"
        >
          Ready to scale your business with modern web solutions? Let’s connect
          and turn your vision into a high-performing reality.
        </p>

        <button
          data-animate="fade-up"
          data-delay="2"
          type="button"
          className="group px-8 py-3 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black transition duration-300 shadow-[0_0_48px_rgba(35,145,196,0.5)] hover:shadow-[0_0_62px_rgba(35,145,196,0.62)] inline-flex items-center gap-2"
        >
          <span>Get In Touch</span>
          <span className="relative h-4 w-4">
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

        <div className="mt-6 text-sm text-gray-400">
          Let’s create something exceptional together ✨
        </div>
      </div>
    </section>
  );
}
