import React from "react";

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/hero";
import Screens from "@/components/landing/screens";
import Sponsors from "@/components/landing/sponsors";
import Statscard from "@/components/landing/statscard";
import Choice from "@/components/landing/choice";
import Productivity from "@/components/landing/productivity";

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
      </main>
    </>
  );
}
