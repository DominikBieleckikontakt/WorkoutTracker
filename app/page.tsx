import React from "react";

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/hero";
import Screens from "@/components/landing/screens";
import Sponsors from "@/components/landing/sponsors";
import Statscard from "@/components/landing/statscard";
import Choice from "@/components/landing/choice";
import Productivity from "@/components/landing/productivity";
import Tabs from "@/components/landing/tabs";
import Testimonials from "@/components/landing/testimonials";
import Plans from "@/components/landing/plans";
import FAQ from "@/components/landing/faq";
import Banner from "@/components/landing/banner";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Screens />
        <Sponsors />
        <Statscard />
        <Choice />
        <Productivity />
        <Tabs />
        <Testimonials />
        <Plans />
        <FAQ />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
