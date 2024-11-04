import React from "react";

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/hero";
import Screens from "@/components/landing/screens";
import Sponsors from "@/components/landing/sponsors";
import Statscard from "@/components/landing/statscard";
import Choice from "@/components/landing/choice";
import Productivity from "@/components/landing/productivity";
import Testimonials from "@/components/landing/testimonials";
import Plans from "@/components/landing/plans";
import FAQ from "@/components/landing/faq";
import Banner from "@/components/landing/banner";
import Footer from "@/components/ui/footer";
import FadeInDiv from "@/components/ui/fade-in-div";

const components = [
  <Screens />,
  <Statscard />,
  <Choice />,
  <Productivity />,
  <Testimonials />,
  <Plans />,
  <FAQ />,
  <Banner />,
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        {components.map((component, index) => (
          <FadeInDiv key={index}>{component}</FadeInDiv>
        ))}
        <Footer />
      </main>
    </>
  );
}
