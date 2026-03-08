"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ApproachSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-[-200px] bottom-[-200px] w-[600px] h-[600px] bg-[#2391C4]/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          data-animate="fade-up"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Here's How We Approach <br />
          <span className="text-[#2391C4]">Performance Marketing</span>
        </h2>

        <p
          data-animate="fade-up"
          data-delay="1"
          className="text-gray-400 mb-16"
        >
          We build scalable systems that drive consistent growth
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            data-animate="fade-up"
            data-delay="2"
            className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#2391C4]/40 hover:shadow-[0_0_40px_rgba(35,145,196,0.2)] transition duration-300"
          >
            <div className="mb-6 text-[#2391C4] text-5xl">📊</div>
            <h3 className="text-2xl font-semibold mb-4">
              Data-Driven Strategy
            </h3>
            <p className="text-gray-400">
              We analyze metrics deeply and build campaigns based on data, not
              assumptions — ensuring consistent ROI.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-animate="fade-up"
            data-delay="3"
            className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#2391C4]/40 hover:shadow-[0_0_40px_rgba(35,145,196,0.2)] transition duration-300"
          >
            <div className="mb-6 text-[#2391C4] text-5xl">📢</div>
            <h3 className="text-2xl font-semibold mb-4">
              Real-Time Communication
            </h3>
            <p className="text-gray-400">
              Transparent communication, regular updates, and strategic
              discussions to keep you aligned.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-animate="fade-up"
            data-delay="4"
            className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-[#2391C4]/40 hover:shadow-[0_0_40px_rgba(35,145,196,0.2)] transition duration-300"
          >
            <div className="mb-6 text-[#2391C4] text-5xl">📈</div>
            <h3 className="text-2xl font-semibold mb-4">
              Insightful Reporting
            </h3>
            <p className="text-gray-400">
              Clear performance reports that show exactly how your revenue is
              growing.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            type="button"
            className="group px-8 py-3 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black transition duration-300 shadow-[0_0_48px_rgba(35,145,196,0.5)] hover:shadow-[0_0_62px_rgba(35,145,196,0.62)] inline-flex items-center gap-2"
          >
            <span>Find Potential</span>
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
        </div>

        {/* Reviews */}
        <div className="mt-6 text-gray-400 text-sm">
          ⭐⭐⭐⭐⭐ more than 50+ reviews
        </div>
      </div>
    </section>
  );
}
