import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-sm:mx-5">
        <h3 className="text-4xl font-semibold mt-36 text-center">
          Privacy Policy
        </h3>
        <div>
          <p className="text-center mt-8">
            Here will be some privacy policy text.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
