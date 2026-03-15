"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  User,
  Mail,
  Store,
  DollarSign,
  Package,
  ChevronRight,
} from "lucide-react";

// Total number of steps in the multi-step form
const TOTAL_STEPS = 3;
const INITIAL_STEP = 1;

// Form data type definition for contact audit form
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  storeName: string;
  annualRevenue: string;
  parentAsins: string;
  managingAds: string;
  currentChallenge: string;
  source: string;
  contact: string;
};

/**
 * Contact - Multi-step form component for free audit requests
 *
 * A 3-step contact form that collects:
 * - Step 1: Personal info (name, email)
 * - Step 2: Store details (store name, revenue, ASINs)
 * - Step 3: Additional info (ad management, challenges, source, contact method)
 *
 * Features scroll-reveal animations and visual step indicators.
 */
export default function Contact() {
  const ref = useScrollReveal();
  const [currentStep, setCurrentStep] = useState<number>(INITIAL_STEP);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    storeName: "",
    annualRevenue: "",
    parentAsins: "",
    managingAds: "",
    currentChallenge: "",
    source: "",
    contact: "",
  });

  /**
   * Updates form data when user types in any input field
   */
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Advances to the next step in the form
   */
  const goToNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  /**
   * Returns to the previous step in the form
   */
  const goToPreviousStep = () => {
    if (currentStep > INITIAL_STEP) {
      setCurrentStep(currentStep - 1);
    }
  };

  /**
   * Handles form submission
   * TODO: Implement actual form submission logic (API call, validation, etc.)
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form validation and API submission
    console.log("Form data submitted:", formData);
  };

  // Shared input field styles for consistency across all form fields
  const inputFieldClassName =
    "w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2391C4]/50 transition-colors";

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen py-24 px-6 bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* Blue Glow Effect for visual enhancement */}
      <div className="absolute w-[800px] h-[800px] bg-[#2391C4]/15 rounded-full blur-[180px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <h2
          data-animate="fade-up"
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-center"
        >
          Get your free audit
        </h2>

        <form onSubmit={handleFormSubmit}>
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={inputFieldClassName}
                />
              </div>
            </div>
          )}

          {/* Step 2: Store Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Store
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="storeName"
                    placeholder="What is your store name?"
                    value={formData.storeName}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
                <div className="relative">
                  <DollarSign
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="annualRevenue"
                    placeholder="Current annual revenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
              </div>
              <div className="relative">
                <Package
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  name="parentAsins"
                  placeholder="How many parent ASINS do you have?"
                  value={formData.parentAsins}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2391C4]/50 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="managingAds"
                    placeholder="How are you managing ads"
                    value={formData.managingAds}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <input
                    type="text"
                    name="currentChallenge"
                    placeholder="What is your current challenge"
                    value={formData.currentChallenge}
                    onChange={handleInputChange}
                    className={inputFieldClassName}
                  />
                </div>
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  name="source"
                  placeholder="How did you hear about StoreStride"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2391C4]/50 transition-colors"
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="What's your facebook or whatsapp contact?"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#2391C4]/50 transition-colors"
                />
              </div>
            </div>
          )}

          {/* Step Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {[1, 2, 3].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`h-2 rounded-full transition-all duration-300 ${
                  stepNumber === currentStep
                    ? "w-8 bg-white"
                    : stepNumber < currentStep
                      ? "w-8 bg-[#2391C4]"
                      : "w-8 bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex gap-4">
            {currentStep > INITIAL_STEP && (
              <button
                type="button"
                onClick={goToPreviousStep}
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Back
              </button>
            )}
            {currentStep < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={goToNextStep}
                className="flex-1 py-4 bg-[#2391C4] rounded-xl text-white font-semibold hover:bg-[#1a7ba8] transition-colors flex items-center justify-center gap-2"
              >
                {currentStep === 1 ? "Continue" : "Almost There"}
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 py-4 bg-[#2391C4] rounded-xl text-white font-semibold hover:bg-[#1a7ba8] transition-colors flex items-center justify-center gap-2"
              >
                Submit
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Trust Badge - Trustpilot Stars */}
          <div className="flex justify-center mt-8">
            <img
              src="/stars.svg"
              alt="5-star rating"
              className="w-60 h-auto mx-auto drop-shadow-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
