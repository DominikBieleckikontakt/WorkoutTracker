"use client";
import ContactForm from "@/components/contact/contact-form";
import Container from "@/components/landing/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-sm:mx-5">
        <h3 className="text-4xl font-semibold mt-36 text-center">Contact us</h3>
        <button
          onClick={async () => {
            await fetch("/api/test");
          }}
        >
          try me
        </button>
        <p className="text-center font-light text-gray-500 mt-2 max-w-[36rem] mx-auto">
          Have questions or need support? Reach out to our team, and we’ll be
          happy to assist you on your fitness journey.
        </p>
        <Container>
          <ContactForm />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
