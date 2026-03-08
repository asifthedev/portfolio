"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Project = {
  title: string;
  desc: string;
};

const projects: Project[] = [
  {
    title: "Amazon Ad Dashboard",
    desc: "Advanced analytics & campaign management platform with real-time performance tracking.",
  },
  {
    title: "Marketing Website",
    desc: "High-converting responsive website built with Next.js & Tailwind CSS.",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Blue Glow Background */}
      <div className="absolute w-[800px] h-[800px] bg-[#2391C4]/10 rounded-full blur-[180px] left-1/2 -translate-x-1/2 top-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2
          data-animate="fade-up"
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          My <span className="text-[#2391C4]">Projects</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={i + 1}
              className="p-10 rounded-2xl bg-gradient-to-br from-[#071c26] to-black border border-[#2391C4]/20 backdrop-blur-xl transition duration-300 hover:border-[#2391C4]/50 hover:shadow-[0_0_40px_rgba(35,145,196,0.3)] hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#2391C4]">
                {p.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{p.desc}</p>

              {/* Optional View Button */}
              <div className="mt-6">
                <button
                  type="button"
                  className="group text-sm text-[#2391C4] hover:underline rounded-full inline-flex items-center gap-1.5"
                >
                  <span>View Project</span>
                  <span className="relative h-3.5 w-3.5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
