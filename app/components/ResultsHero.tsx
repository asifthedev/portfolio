"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

// Result card data structure
type ResultCard = {
  stat: string;
  description: string;
};

// Scroll animation direction for card columns
type ScrollDirection = "up" | "down";

// Left column: Result cards with upward scroll animation
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

// Right column: Result cards with downward scroll animation
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

/**
 * CardColumn - Animating column of result cards
 *
 * Creates an infinite scroll effect by duplicating cards and applying
 * CSS animations. The direction prop controls whether the column
 * scrolls upward or downward.
 *
 * @param cards - Array of result cards to display
 * @param direction - Scroll direction ('up' or 'down')
 */
function CardColumn({
  cards,
  direction,
}: {
  cards: ResultCard[];
  direction: ScrollDirection;
}) {
  // Duplicate cards for seamless infinite loop effect
  const duplicatedCardsForLoop = [...cards, ...cards];
  const scrollAnimationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Top gradient fade for smooth scroll appearance */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient fade for smooth scroll appearance */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className={`flex flex-col gap-5 ${scrollAnimationClass}`}>
        {duplicatedCardsForLoop.map((card, cardIndex) => (
          <div
            key={`${card.stat}-${cardIndex}`}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition duration-300 hover:border-white/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#2391C4] mb-3">
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

/**
 * ResultsHero - Showcases client results with animated card columns
 *
 * Display section featuring two columns of auto-scrolling result cards.
 * Left column scrolls up, right column scrolls down for visual interest.
 * Includes scroll-reveal animations on text content.
 */
export default function ResultsHero() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center"
    >
      {/* Background Glow Effect */}
      <div className="absolute -left-40 top-0 w-[600px] h-[600px] bg-[#2391C4]/10 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side - Heading and tagline */}
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

        {/* Right Side - Two auto-scrolling columns of result cards */}
        <div className="grid grid-cols-2 gap-5">
          <CardColumn cards={leftColumnCards} direction="up" />
          <CardColumn cards={rightColumnCards} direction="down" />
        </div>
      </div>
    </section>
  );
}
