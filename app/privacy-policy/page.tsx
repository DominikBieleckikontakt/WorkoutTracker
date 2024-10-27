import Container from "@/components/landing/container";
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
        <p className="text-center font-light">Last updated: 27.10.2024</p>
        <Container className="mt-16">
          <div className="space-y-3">
            <div>
              <h2 className="font-semibold text-xl">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide to us directly, such as when
                you create an account, log in, or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                2. How We Use Your Information
              </h2>
              <p>
                We use your information to operate and improve our app,
                communicate with you, and provide customer support.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                3. Sharing Your Information
              </h2>
              <p>
                We do not sell or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist us in delivering our services.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                4. Security of Your Information
              </h2>
              <p>
                We take reasonable measures to protect your information from
                unauthorized access or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You can also withdraw your consent to our
                processing of your data.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl">7. Contact Us</h2>
              <p>
                If you have any questions about our Privacy Policy, please
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

export default PrivacyPolicy;
