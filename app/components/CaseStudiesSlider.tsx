"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "A Million Dollar Case Study",
    description:
      "1M$ case study within the supplement niche at a 40% Net Margin in 2022! No external traffic, no social media ads! Just Amazon Advertising!",
    image: "/case-studies-thumbnail.png",
    link: "#",
  },
  {
    title: "Blanket Brilliance: A Strategic Turnaround",
    description:
      "Wrapped in Success: A Strategic Turnaround in the Blanket Niche – Achieving a 71% Revenue Boost",
    image: "/case-studies-thumbnail.png",
    link: "#",
  },
  {
    title: "Pet Supplies Growth Engine",
    description:
      "How we scaled a pet supplies brand from $200K to $1.2M annual revenue using targeted Amazon PPC strategies.",
    image: "/case-studies-thumbnail.png",
    link: "#",
  },
  {
    title: "Beauty Brand Breakout",
    description:
      "Helping a beauty brand achieve 3x ROAS and dominate page-one rankings within 6 months of launch.",
    image: "/case-studies-thumbnail.png",
    link: "#",
  },
];

export default function CaseStudiesSlider() {
  const sectionRef = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 400;
    const gap = 24;
    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#2391C4]/8 rounded-full blur-[180px] left-0 top-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto pl-4 md:pl-8 lg:pl-12">
        {/* Header */}
        <div
          className="flex items-end justify-between mb-12"
          data-animate="fade-up"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Some of our classic case
              <br />
              studies
            </h2>
            <p className="mt-3 text-gray-400 text-lg">
              We build Brand on Amazon by Advertising
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous case study"
              className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:border-[#2391C4] hover:text-[#2391C4] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next case study"
              className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:border-[#2391C4] hover:text-[#2391C4] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-4 -mb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              data-card
              data-animate="fade-up"
              data-delay={i + 1}
              className="snap-start shrink-0 w-[85vw] sm:w-[420px] md:w-[540px] lg:w-[600px]"
            >
              <div className="group h-full rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#2391C4]/40 hover:shadow-[0_0_40px_rgba(35,145,196,0.15)]">
                <div className="flex flex-row h-[320px]">
                  {/* Text Content */}
                  <div className="flex flex-col justify-between p-6 w-1/2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 line-clamp-3">
                        {study.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {study.description}
                      </p>
                    </div>
                    <a
                      href={study.link}
                      className="mt-4 inline-flex items-center gap-2 border border-white/20 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:border-[#2391C4] hover:text-[#2391C4] w-fit"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Image */}
                  <div className="relative w-1/2 bg-gradient-to-br from-[#2391C4]/20 to-[#6c5ce7]/10">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, 300px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
            className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:border-[#2391C4] hover:text-[#2391C4] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next case study"
            className="h-11 w-11 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 hover:border-[#2391C4] hover:text-[#2391C4] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
