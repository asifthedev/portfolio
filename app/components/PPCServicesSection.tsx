"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

// Service card data structure
type ServiceCard = {
  title: string;
  description: string;
  illustration: React.ReactNode;
  className?: string;
};

/**
 * PPC Services offered - Complete array of Amazon advertising services
 * Each service includes a title, description, and custom illustration
 */
const ppcServices: ServiceCard[] = [
  {
    title: "Sponsored Products",
    description:
      "We boost product visibility through targeted Sponsored Product campaigns, leveraging strategic keyword research to reach shoppers actively searching on Amazon.",
    illustration: (
      <div className="relative h-48 w-full flex flex-col justify-center px-6">
        {/* Bar chart illustration */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2391C4] rounded" />
            <div className="h-3 bg-gradient-to-r from-[#2391C4] to-[#2391C4]/50 rounded-full w-48" />
            <span className="text-gray-400 text-sm ml-auto">$45.00</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2391C4]/70 rounded" />
            <div className="h-3 bg-gradient-to-r from-[#2391C4]/70 to-[#2391C4]/30 rounded-full w-36" />
            <span className="text-gray-400 text-sm ml-auto">$24.00</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2391C4]/50 rounded" />
            <div className="h-3 bg-gradient-to-r from-[#2391C4]/50 to-[#2391C4]/20 rounded-full w-52" />
            <span className="text-gray-400 text-sm ml-auto">$85.00</span>
          </div>
        </div>
        {/* Sponsored button */}
        <div className="mt-6 flex justify-center">
          <div className="px-6 py-2 bg-[#2391C4]/80 rounded-full text-white text-sm cursor-pointer hover:bg-[#2391C4] transition">
            Sponsored
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Sponsored Brands",
    description:
      "Our Sponsored Brands campaigns showcase your products to shoppers searching for relevant keywords, elevating brand visibility and driving traffic to your listings.",
    illustration: (
      <div className="relative h-48 w-full flex items-center justify-center px-6">
        {/* Product grid illustration */}
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, productIndex) => (
            <div
              key={productIndex}
              className="flex items-center gap-2 bg-white/5 rounded-lg p-3"
            >
              <div className="w-4 h-4 rounded-full border-2 border-white/50" />
              <div className="w-8 h-8 bg-[#2391C4] rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Sponsored Display",
    description:
      "Using Sponsored Display, we re-engage potential customers who've shown interest in your products, driving them back to your detail pages and maximizing conversion opportunities.",
    illustration: (
      <div className="relative h-48 w-full overflow-hidden">
        {/* Circular design with Amazon logo */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2">
          <div className="w-40 h-40 rounded-full border border-[#2391C4]/30" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full border border-[#2391C4]/50 flex items-center justify-center bg-white/5">
            <span className="text-[#2391C4] text-3xl font-bold">a</span>
          </div>
        </div>
        <div className="absolute -right-4 top-4 w-16 h-16 rounded-full bg-[#2391C4]/20" />
        <div className="absolute left-4 bottom-4 w-32 h-1 bg-gradient-to-r from-[#2391C4] to-transparent rounded-full" />
      </div>
    ),
  },
  {
    title: "Amazon DSP",
    description:
      "With Amazon Demand Side Platform, we deliver targeted ads on and off Amazon, maximizing brand exposure and driving conversions with precision audience targeting.",
    illustration: (
      <div className="relative h-56 w-full px-4 py-6">
        {/* Line chart illustration - full width */}
        <svg
          className="w-full h-full"
          viewBox="0 0 400 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M20 90 Q60 100 100 70 Q160 30 220 80 Q280 110 320 60 Q360 40 380 50"
            stroke="url(#dsp-gradient)"
            strokeWidth="3"
            fill="none"
          />
          <defs>
            <linearGradient id="dsp-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2391C4" />
              <stop offset="100%" stopColor="#2391C4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Data points with circles */}
          <circle
            cx="20"
            cy="90"
            r="8"
            fill="none"
            stroke="#2391C4"
            strokeWidth="2"
          />
          <circle
            cx="320"
            cy="60"
            r="8"
            fill="none"
            stroke="#2391C4"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Sponsored Brand Video",
    description:
      "We produce captivating Sponsored Brand Videos that spotlight your products, engaging Amazon shoppers actively searching for related keywords.",
    illustration: (
      <div className="relative w-full flex items-center justify-center p-6">
        <div className="flex items-start gap-6">
          {/* Video player thumbnail - Left column */}
          <div className="flex flex-col gap-3">
            {/* Main video player */}
            <div className="w-28 h-24 bg-[#2391C4] rounded-xl flex items-center justify-center shadow-lg shadow-[#2391C4]/20">
              <div className="w-10 h-10 rounded-full bg-[#1a6a8f]/50 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[14px] border-l-[#1a6a8f] border-y-[9px] border-y-transparent ml-1" />
              </div>
            </div>
            {/* Small video thumbnails */}
            <div className="w-28 h-8 bg-[#2391C4] rounded-lg" />
            <div className="w-28 h-8 bg-[#2391C4]/90 rounded-lg" />
          </div>
          {/* Stats panel - Right column */}
          <div className="space-y-4 pt-2">
            {/* Top bar */}
            <div className="w-32 h-3 bg-white/15 rounded-full" />
            {/* Views indicator */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#5b9fd4] border-2 border-black/30" />
                <div className="w-6 h-6 rounded-full bg-[#f5a623] border-2 border-black/30" />
                <div className="w-6 h-6 rounded-full bg-[#2391C4] border-2 border-black/30" />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                25K Views
              </span>
            </div>
            {/* Progress bars */}
            <div className="space-y-2">
              <div className="w-32 h-2 bg-white/10 rounded-full" />
              <div className="w-28 h-2 bg-[#2391C4] rounded-full" />
            </div>
            {/* Analytics chart */}
            <svg className="w-36 h-12" viewBox="0 0 120 40">
              <path
                d="M0 35 L25 28 L50 32 L75 20 L100 24 L120 12"
                stroke="#2391C4"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
    className: "md:col-span-1",
  },
];

/**
 * PPCServicesSection - Showcase of all PPC services offered
 *
 * Displays a bento-style grid with 5 different Amazon advertising services.
 * Features custom illustrations, scroll-reveal animations, and responsive layout.
 * Uses a 3-column grid on desktop with specific cards spanning multiple columns.
 */
export default function PPCServicesSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] bg-[#2391C4]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            We Scale Amazon Brands with
            <br />
            <span className="text-[#2391C4]">Profitable PPC Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We manage all types of Sponsored Campaigns
          </p>
        </div>

        {/* Services Grid - Bento-Box Layout */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* First Three Services - Equal width columns */}
          {ppcServices.slice(0, 3).map((service, serviceIndex) => (
            <div
              key={service.title}
              data-animate="fade-up"
              data-delay={serviceIndex}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#2391C4]/30 hover:shadow-[0_0_25px_rgba(35,145,196,0.15)] transition-all duration-300"
            >
              {/* Visual illustration */}
              <div className="bg-gradient-to-br from-[#2391C4]/5 to-transparent">
                {service.illustration}
              </div>
              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Amazon DSP Service - Single column card */}
          <div
            data-animate="fade-up"
            data-delay="3"
            className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#2391C4]/30 hover:shadow-[0_0_25px_rgba(35,145,196,0.15)] transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-[#2391C4]/5 to-transparent">
              {ppcServices[3].illustration}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {ppcServices[3].title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {ppcServices[3].description}
              </p>
            </div>
          </div>

          {/* Sponsored Brand Video - Wide card (2 columns) */}
          <div
            data-animate="fade-up"
            data-delay="4"
            className="group rounded-2xl bg-gradient-to-br from-[#2391C4]/10 via-[#2391C4]/5 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[#2391C4]/30 hover:shadow-[0_0_25px_rgba(35,145,196,0.15)] transition-all duration-300 md:col-span-2"
          >
            <div className="md:flex h-full">
              {/* Service description */}
              <div className="p-6 md:w-1/2 md:order-2">
                <h3 className="text-xl font-bold text-white mb-3">
                  {ppcServices[4].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {ppcServices[4].description}
                </p>
              </div>
              {/* Video illustration */}
              <div className="md:w-1/2 md:order-1 flex items-center justify-center py-6">
                {ppcServices[4].illustration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
