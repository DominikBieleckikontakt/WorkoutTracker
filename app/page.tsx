import React from "react";

import Navbar from "@/components/ui/navbar";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}
