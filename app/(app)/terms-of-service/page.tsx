import Container from "@/components/landing/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import React from "react";

const TermsOfServicePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-sm:mx-5 space-y-1">
        <h3 className="text-4xl font-semibold mt-36 text-center">
          Terms Of Service
        </h3>
        <p className="text-center font-light">Last updated: 27.10.2024</p>
        <Container className="mt-16">
          <div className="space-y-3">
            <div>
              <h2 className="font-semibold text-xl">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our app, you agree to comply with and be
                bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">2. Use of the App</h2>
              <p>
                You must be at least 13 years old to use this app. You agree to
                use the app only for lawful purposes.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">3. Account Registration</h2>
              <p>
                You may need to create an account to access certain features.
                You are responsible for maintaining the confidentiality of your
                account.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                4. Subscription Services
              </h2>
              <p>
                Some features may require a subscription. By subscribing, you
                agree to pay the applicable fees.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                5. Limitation of Liability
              </h2>
              <p>
                We are not liable for any damages arising from your use of the
                app.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. Your continued use of the app after any changes
                constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at <i>example@example.com</i>.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfServicePage;
