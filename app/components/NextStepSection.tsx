"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const items = [
  {
    title: "What If You Could Invest in Advertising Services Worry-Free?",
    content:
      "Our performance-driven approach ensures predictable growth without unnecessary risk.",
  },
  {
    title: "How we scale your Brand without the Work?",
    content:
      "Running a business is hard. We handle strategy, ads, scaling, and optimization — so you can focus on growth.",
  },
  {
    title: "Why Our Clients Repeatedly Choose Us?",
    content:
      "We deliver measurable ROI, transparent reporting, and scalable systems that work.",
  },
  {
    title: "Isn’t that just what you’re looking for?",
    content:
      "If you're serious about scaling profitably, we’re ready to help you move forward.",
  },
  {
    title: "Why Should you trust Us?",
    content:
      "Because we focus on results, not vanity metrics — real revenue, real growth.",
  },
];

export default function NextStepSection() {
  const [active, setActive] = useState<number | null>(1);
  const ref = useScrollReveal();

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-[-200px] top-0 w-[600px] h-[600px] bg-[#2391C4]/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            data-animate="fade-up"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Your Next Step
          </h2>
          <p data-animate="fade-up" data-delay="1" className="text-gray-400">
            We build brands with performance marketing
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {items.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                data-animate="fade-up"
                data-delay={index + 1}
                className={`rounded-xl border transition-all duration-300 backdrop-blur-xl
                ${
                  isOpen
                    ? "bg-[#2391C4]/10 border-[#2391C4]/40 shadow-[0_0_40px_rgba(35,145,196,0.15)]"
                    : "bg-white/5 border-white/10 hover:border-[#2391C4]/30"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left rounded-full"
                >
                  <span className="font-semibold text-lg">{item.title}</span>

                  {isOpen ? (
                    <ChevronDown className="text-[#2391C4]" />
                  ) : (
                    <ChevronRight className="text-gray-400" />
                  )}
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
