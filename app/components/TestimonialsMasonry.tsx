// components/TestimonialsMasonry.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Testimonial = {
  name: string;
  text: string;
  avatar?: string;
  rating?: number;
};
const testimonials: Testimonial[] = [
  {
    name: "Marco",
    text: "Company made up of young and competent people. We entrusted them with the development and growth of our brand on Amazon starting from the launch of our first product in Italy. We have now been collaborating with them for 1 year and we can only speak well of them. I recommend them.",
    avatar: "/c1.avif",
  },
  {
    name: "Casey",
    text: "I highly recommend AdAutomaters for managing your ppc and helping you get profitable with Amazon ppc. Moeed and his team (Haris ) are very professional and are extremely knowledgeable with the Amazon algorithm so they know exactly how to help KW for your products, which leads to increase in sales and profit. They are great communicators and listen to your suggestions while developing a game plan to suit your product needs. Once again I highly recommend them you won’t be disappointed.",
    avatar: "/c2.webp",
  },
  {
    name: "Hasan",
    text: "I’m so glad I chose AdAutomaters for my Amazon advertising needs. Moeed and the team have been consistent proving their skills and commitment over the past few months. By the end of the fourth month, they had doubled my profits and generated six figures in revenue. Their professionalism, responsiveness, and knowledge are truly impressive. I highly recommend AdAutomaters to anyone looking for a reliable partner for their advertising needs.",
    avatar: "/c3.webp",
  },
  {
    name: "Donnie",
    text: "I had help from moeed with marketing and back end work and it was a pleasure to work with him. He has passion for what he does & takes a lot of task off your agenda and takes over at a high level.",
    avatar: "/c1.avif",
  },
  {
    name: "Emile",
    text: "The AdAutomaters team are hands down one of the best Amazon advertising agencies. They put themselves in the shoes of your potential customers and research what is important to them to help you get the right buyers and convert them to sales.",
    avatar: "/c2.webp",
  },
  {
    name: "Yas",
    text: "Moeed and his team have been great to work with. Very responsive and easy to work with.",
    avatar: "/c3.webp",
  },
  {
    name: "James",
    text: "Great company to work with, Moeed and his team are very knowledgeable and have saved us a lot of money by optimising our campaigns. We have seen significant growth in the first 3 months already. Fast communication and easy to deal with, I highly recommend Adautomaters",
    avatar: "/c1.avif",
  },
  {
    name: "Traci",
    text: "Super helpful team. Strong results and great communication throughout.",
    avatar: "/c2.webp",
  },
  {
    name: "Fatso",
    text: "Moeed and his team are 100% customer-focused and dedicated to getting results. They are super-helpful and will go out of their way to deliver what is required. Highly recommended!",
    avatar: "/c3.webp",
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(0, Math.min(5, rating));

  return (
    <div className="mt-3 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < r;
        return (
          <span
            key={i}
            className={[
              "inline-flex h-4 w-4 items-center justify-center rounded-sm transition",
              filled
                ? "bg-[#2391C4] shadow-[0_0_8px_rgba(35,145,196,0.6)]"
                : "bg-white/10",
            ].join(" ")}
          >
            <svg viewBox="0 0 20 20" className="h-3 w-3 fill-white">
              <path d="M10 1.5l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.2l1-5.7-4.1-4 5.7-.8L10 1.5z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

function Avatar({ src, name }: { src?: string; name: string }) {
  return (
    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-[#2391C4]/40">
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="44px"
          className="object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[#2391C4]/20 text-sm font-semibold text-white">
          {name.slice(0, 1).toUpperCase()}
        </div>
      )}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={[
        "relative break-inside-avoid rounded-2xl border border-[#2391C4]/40",
        "bg-gradient-to-b from-zinc-900/80 via-zinc-950/80 to-black/90",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_-40px_rgba(0,0,0,0.9)]",
        "transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(35,145,196,0.25)]",
      ].join(" ")}
    >
      {/* Blue glow highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(35,145,196,0.15),transparent_60%)] opacity-80" />

      <div className="relative p-6">
        <div className="flex items-center gap-4">
          <Avatar src={t.avatar} name={t.name} />
          <div className="text-lg font-semibold text-white">{t.name}</div>
        </div>

        <Stars rating={t.rating ?? 5} />

        <p className="mt-4 text-sm leading-6 text-white/70">{t.text}</p>
      </div>

      {/* Bottom subtle glow line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2391C4]/40 to-transparent" />
    </div>
  );
}

export default function TestimonialsMasonry() {
  const ref = useScrollReveal();

  return (
    <section
      id="case-studies"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Blue background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#2391C4]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2
            data-animate="fade-up"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            We are loved by our customers
          </h2>

          <p
            data-animate="fade-up"
            data-delay="1"
            className="mx-auto mt-4 max-w-2xl text-sm text-[#2391C4] sm:text-base"
          >
            We build Brand on Amazon by Advertising
          </p>
        </div>

        <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name + t.text.slice(0, 12)}
              data-animate="fade-up"
              data-delay={Math.min((i % 3) + 1, 3)}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
