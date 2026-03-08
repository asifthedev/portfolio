"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

type ResultCard = {
  stat: string;
  description: string;
};

const leftColumnCards: ResultCard[] = [
  {
    stat: "1.5M$ Sales",
    description:
      "1.51 Million Dollar Sales in the last 12 Months at a profit margin of 29% on Supplement Brand",
  },
  {
    stat: "71% Revenue",
    description:
      "71% Revenue Boost in the Blanket Niche with strategic Amazon ad placement",
  },
  {
    stat: "200% ROAS",
    description:
      "Achieved 200% Return on Ad Spend in the Clothing niche with in 2 Months",
  },
];

const rightColumnCards: ResultCard[] = [
  {
    stat: "350% Revenue Increase",
    description: "350% Revenue Increase in the Clothing niche with in 2 Months",
  },
  {
    stat: "4% TACOS",
    description: "Lowered TACOS from 25% to 4% in the Baby Niche",
  },
  {
    stat: "100k$ Sales",
    description:
      "Added 100,000 Dollar Revenue in the first 60 days of product launch",
  },
];

function CardColumn({
  cards,
  direction,
}: {
  cards: ResultCard[];
  direction: "up" | "down";
}) {
  // Duplicate cards for seamless loop
  const doubled = [...cards, ...cards];
  const animationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className={`flex flex-col gap-5 ${animationClass}`}>
        {doubled.map((card, i) => (
          <div
            key={`${card.stat}-${i}`}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition duration-300 hover:border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-3">
              {card.stat}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResultsHero() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 w-[600px] h-[600px] bg-[#2391C4]/10 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT SIDE */}
        <div data-animate="fade-left">
          <p className="text-gray-400 mb-6 tracking-wide italic">
            We build Brand on Amazon by Advertising
          </p>

          <h1
            data-animate="fade-left"
            data-delay="1"
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight uppercase"
          >
            Results That
            <br />
            Speak For
            <br />
            Themselves
          </h1>
        </div>

        {/* RIGHT SIDE — Two vertical auto-scrolling columns */}
        <div className="grid grid-cols-2 gap-5">
          <CardColumn cards={leftColumnCards} direction="up" />
          <CardColumn cards={rightColumnCards} direction="down" />
        </div>
      </div>
    </section>
  );
}
