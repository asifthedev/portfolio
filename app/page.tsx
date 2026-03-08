import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AgencySection from "./components/AgencySection";
import NextStepSection from "./components/NextStepSection";
import ResultsHero from "./components/ResultsHero";
import ApproachSection from "./components/ApproachSection";
import BrandContactHero from "./components/contact/BrandContactHero";
import TestimonialsMasonry from "./components/TestimonialsMasonry";
import CaseStudiesSlider from "./components/CaseStudiesSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AgencySection />
      <Projects />
      <CaseStudiesSlider />
      <ResultsHero />
      <ApproachSection />
      <NextStepSection />
      {/* <BrandContactHero/>] */}
      <TestimonialsMasonry />
      <Contact />
    </>
  );
}
