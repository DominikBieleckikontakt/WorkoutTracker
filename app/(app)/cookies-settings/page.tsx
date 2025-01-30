import Container from "@/components/landing/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

const CookiesSettings = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-sm:mx-5">
        <h3 className="text-4xl font-semibold mt-36 text-center">
          Cookies Settings
        </h3>
        <p className="text-center font-light">Last updated: 27.10.2024</p>
        <Container className="mt-16">
          <div className="space-y-3">
            <div>
              <h2 className="font-semibold text-xl">1. What Are Cookies</h2>
              <p>
                Cookies are small files placed on your device that help us
                provide a better user experience.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">2. How We Use Cookies</h2>
              <p>
                We use cookies to understand how you use our app, remember your
                preferences, and provide personalized content.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">3. Managing Cookies</h2>
              <p>
                You can choose to accept or decline cookies. Most web browsers
                automatically accept cookies, but you can modify your browser
                settings to decline cookies if you prefer.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                4. Changes to This Policy
              </h2>
              <p>
                We may update our Cookies Policy from time to time. Any changes
                will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">5. Contact Us</h2>
              <p>
                If you have any questions about our Cookies Policy, please
                contact us at example@example.com.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default CookiesSettings;
