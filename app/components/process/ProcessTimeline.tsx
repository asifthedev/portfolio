"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type Step = {
  title: string;
  description: string;
  iconImageSrc?: string;
  iconAlt?: string;
  iconFallback?: string;
};

const steps: Step[] = [
  {
    title: "Listing Evaluation",
    description:
      "Before launching any ads, we'll thoroughly evaluate your listing to identify areas for enhancement...",
    iconFallback: "🖼️",
  },
  {
    title: "Audit of Campaign Manager",
    description:
      "We'll examine your existing campaigns to determine what's effective and what isn't...",
    iconFallback: "📋",
  },
  {
    title: "Plan of Action",
    description:
      "Following a detailed audit, we'll collaborate to set clear goals and milestones...",
    iconFallback: "🧭",
  },
  {
    title: "Launch and Scale",
    description: "Watch our team spring into action and take the reins...",
    iconFallback: "🚀",
  },
  {
    title: "Regular Analytics Updates",
    description:
      "We keep you informed with regular updates and detailed reports...",
    iconFallback: "📊",
  },
  {
    title: "Collaborative Communication on Slack",
    description: "During onboarding, we'll set up a dedicated Slack channel...",
    iconFallback: "💬",
  },
];

function StepIcon({ step }: { step: Step }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-900/60 ring-1 ring-white/10">
      {step.iconImageSrc ? (
        <Image
          src={step.iconImageSrc}
          alt={step.iconAlt ?? step.title}
          width={64}
          height={64}
          className="h-14 w-14 object-contain"
        />
      ) : (
        <span className="text-3xl">{step.iconFallback ?? "✨"}</span>
      )}
    </div>
  );
}

export default function ProcessTimeline() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Blue glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#2391C4]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2
            data-animate="fade-up"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Our Process: Streamlined
            <br />
            <span className="text-[#2391C4]">for Success</span>
          </h2>

          <p
            data-animate="fade-up"
            data-delay="1"
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base"
          >
            Our comprehensive approach to Amazon advertising is designed to
            maximize your ROI.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#2391C4] sm:block" />

          {/* Top Dot */}
          <div className="absolute left-6 top-0 hidden -translate-x-1/2 sm:block">
            <div className="h-3 w-3 rounded-full bg-[#2391C4]" />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative sm:pl-16"
                data-animate="fade-left"
                data-delay={Math.min(idx + 1, 6)}
              >
                {/* Connector Dot */}
                <div className="absolute left-6 top-8 hidden -translate-x-1/2 sm:block">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2391C4]" />
                </div>

                <div
                  className={[
                    "group relative rounded-xl border border-[#2391C4]/60",
                    "bg-gradient-to-b from-zinc-900/60 to-zinc-950/80",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_60px_-30px_rgba(0,0,0,0.9)]",
                    "transition-transform duration-200 hover:-translate-y-1",
                  ].join(" ")}
                >
                  {/* Blue inner highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_top,rgba(35,145,196,0.15),transparent_60%)] opacity-80" />

                  <div className="relative flex gap-4 p-6 sm:gap-6 sm:p-7">
                    <StepIcon step={step} />

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/65 sm:text-[15px]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2391C4]/40 to-transparent" />
                </div>

                {idx === 0 && <div className="hidden sm:block h-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
