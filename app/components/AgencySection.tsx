"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AgencySection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Blue Background Glow */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#2391C4]/15 blur-[200px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2
            data-animate="fade-left"
            className="text-5xl font-bold leading-tight mb-8 tracking-tight"
          >
            We&apos;re Not Your Average <br />
            <span className="text-[#2391C4]">Amazon Advertising Agency</span>
          </h2>

          <p
            data-animate="fade-left"
            data-delay="1"
            className="text-gray-400 mb-6"
          >
            Have you been let down by a big-named Amazon advertising agency or
            feel like &quot;Agencies never deliver what they promise&quot;?
          </p>

          <p
            data-animate="fade-left"
            data-delay="2"
            className="text-xl mb-6 text-white"
          >
            We&apos;re right there with you.
          </p>

          <p className="text-gray-400 mb-6">
            It&apos;s frustrating to invest thousands of dollars 💵 only to be
            disappointed by the results 😞
          </p>

          <p className="mb-6">
            <span className="text-[#2391C4] font-semibold">
              But Amazon PPC?
            </span>{" "}
            It&apos;s a whole other beast that&apos;s always on the move.
          </p>

          <p className="text-gray-400 mb-10">
            Big agencies might not understand your needs — they&apos;re juggling
            too many clients.
          </p>

          <h3 className="text-2xl font-semibold mb-4">The Solution ✨</h3>

          <p className="text-gray-400 mb-10">
            Partner with a team that truly cares and delivers results. We work
            closely with brands that want sustainable growth, not just
            short-term spikes.
          </p>

          <p className="mb-6 text-gray-300">
            Ready to see the difference firsthand?
          </p>

          {/* CTA */}
          <button
            type="button"
            className="group px-8 py-3 bg-gradient-to-r from-white to-[#2391C4] hover:scale-105 rounded-full font-semibold text-black transition duration-300 shadow-[0_0_48px_rgba(35,145,196,0.5)] hover:shadow-[0_0_62px_rgba(35,145,196,0.62)] inline-flex items-center gap-2"
          >
            <span>Get Free Audit</span>
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

          <div className="mt-4 text-sm text-gray-400">
            ⭐⭐⭐⭐⭐ more than 50+ reviews
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="relative flex flex-col items-center gap-20">
          {/* Connecting Vertical Line */}
          <div className="absolute top-10 bottom-10 w-[2px] bg-[#2391C4]/30"></div>

          {[
            {
              title: "3+ Years Experience",
              desc: "Delivering Top Notch Quality since 2021",
            },
            {
              title: "10M$+",
              desc: "Tens of Million Dollars Under Management",
            },
            {
              title: "50+ Brands",
              desc: "Successfully Managed",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-animate="fade-right"
              data-delay={index + 1}
              className="relative w-[350px] p-10 rounded-2xl bg-gradient-to-br from-[#071c26] to-black border border-[#2391C4]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(35,145,196,0.2)] transition duration-300 hover:border-[#2391C4]/60 hover:shadow-[0_0_50px_rgba(35,145,196,0.4)]"
            >
              <h4 className="text-3xl font-bold mb-3 text-[#2391C4]">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
