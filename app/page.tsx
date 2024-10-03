import React from "react";

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/hero";
import Screens from "@/components/landing/screens";
import Sponsors from "@/components/landing/sponsors";
import Statscard from "@/components/landing/statscard";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Screens />
        <Sponsors />
        <Statscard />
      </main>
    </>
  );
}
