"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Blue Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#2391C4]/15 rounded-full blur-[160px] left-1/2 -translate-x-1/2 top-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <h2
            data-animate="fade-left"
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            About <span className="text-[#2391C4]">Me</span>
          </h2>

          <p
            data-animate="fade-left"
            data-delay="1"
            className="text-gray-400 leading-relaxed mb-6"
          >
            I specialize in building high-performance, scalable web applications
            using modern technologies like Next.js, TypeScript, and Tailwind
            CSS.
          </p>

          <p
            data-animate="fade-left"
            data-delay="2"
            className="text-gray-500 leading-relaxed"
          >
            My focus is on creating clean UI, smooth user experience, and
            business-driven solutions that actually convert. I build systems
            that are not just beautiful — but powerful.
          </p>
        </div>

        {/* Right Side - Premium Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Happy Clients" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <div
              key={index}
              data-animate="scale-in"
              data-delay={index + 1}
              className="p-8 bg-white/5 backdrop-blur-xl border border-[#2391C4]/20 rounded-2xl text-center transition duration-300 hover:border-[#2391C4]/50 hover:shadow-[0_0_30px_rgba(35,145,196,0.3)]"
            >
              <h3 className="text-3xl font-bold text-[#2391C4]">
                {item.number}
              </h3>
              <p className="text-gray-400 mt-3 text-sm tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
