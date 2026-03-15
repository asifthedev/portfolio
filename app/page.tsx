// Component imports for homepage sections
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AgencySection from "./components/AgencySection";
import NextStepSection from "./components/NextStepSection";
import ResultsHero from "./components/ResultsHero";
import ApproachSection from "./components/ApproachSection";
import TestimonialsMasonry from "./components/TestimonialsMasonry";
import CaseStudiesSlider from "./components/CaseStudiesSlider";
import PPCServicesSection from "./components/PPCServicesSection";
import FinalStepSection from "./components/FinalStepSection";

/**
 * Home - Main homepage with all marketing sections
 *
 * Comprehensive landing page showcasing:
 * - Hero section with value proposition
 * - About and agency information
 * - PPC services offered
 * - Projects and case studies
 * - Client results and testimonials
 * - Process approach
 * - Final CTA section
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AgencySection />
      <PPCServicesSection />
      <Projects />
      <CaseStudiesSlider />
      <ResultsHero />
      <ApproachSection />
      <NextStepSection />
      <TestimonialsMasonry />
      <FinalStepSection />
    </>
  );
}
