"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function BrandContactHero() {
  const [step, setStep] = useState(1);
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen bg-black text-white flex flex-col md:flex-row pt-24"
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 px-6 md:px-12 py-20 flex flex-col justify-center relative overflow-hidden">
        {/* Blue Gradient Glow */}
        <div className="absolute w-[700px] h-[700px] bg-[#2391C4]/20 blur-[150px] rounded-full -left-40 top-20"></div>

        <div className="relative z-10 max-w-xl">
          {/* Badge */}
          <div
            data-animate="fade-left"
            className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-gray-300"
          >
            New Look, Coming Soon
          </div>

          {/* Heading */}
          <h1
            data-animate="fade-left"
            data-delay="1"
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            We build Brand on <br />
            Amazon by Advertising
          </h1>

          <p
            data-animate="fade-left"
            data-delay="2"
            className="text-gray-400 mb-8 text-lg"
          >
            Get your free audit
          </p>

          {/* FORM */}
          <div className="space-y-5">
            {step === 1 && (
              <>
                <Input placeholder="What is your store name?" />
                <Input placeholder="Current annual revenue" />
                <Input placeholder="How many parent ASINS do you have?" />

                <button
                  onClick={() => setStep(2)}
                  className="group w-full mt-4 py-4 rounded-full bg-gradient-to-r from-white to-[#2391C4] text-black hover:scale-105 transition font-semibold shadow-[0_0_48px_rgba(35,145,196,0.5)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>Almost There</span>
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
                  </span>
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <Input placeholder="How are you managing ads?" />
                <Input placeholder="What is your current challenge?" />
                <Input placeholder="How did you hear about us?" />
                <Input placeholder="Your WhatsApp / Facebook contact?" />

                <button
                  type="submit"
                  className="group w-full mt-4 py-4 rounded-full bg-gradient-to-r from-white to-[#2391C4] text-black hover:scale-105 transition font-semibold shadow-[0_0_48px_rgba(35,145,196,0.5)]"
                >
                  <span className="inline-flex items-center gap-2">
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
                  </span>
                </button>
              </>
            )}

            {/* Step Indicators */}
            <div className="flex gap-2 justify-center mt-6">
              <div
                className={`h-2 w-10 rounded-full ${step === 1 ? "bg-[#2391C4]" : "bg-white/20"}`}
              ></div>
              <div
                className={`h-2 w-10 rounded-full ${step === 2 ? "bg-[#2391C4]" : "bg-white/20"}`}
              ></div>
            </div>

            {/* Reviews */}
            <p className="text-sm text-gray-400 text-center mt-4">
              ⭐⭐⭐⭐⭐ more than 50+ reviews
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block w-1/2 relative">
        <Image src="/rocket.jpg" alt="Rocket" fill className="object-cover" />
      </div>
    </section>
  );
}

/* Reusable Input Component */

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      aria-label={placeholder}
      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 
                 focus:border-[#2391C4] focus:ring-2 focus:ring-[#2391C4]/40 
                 outline-none transition backdrop-blur-md"
    />
  );
}
