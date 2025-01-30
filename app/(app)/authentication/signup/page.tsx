import React from "react";
import Image from "next/image";

import SignupForm from "@/components/authentication/signup-form";

const SignupPage = () => {
  return (
    <main className="min-h-screen max-sm:mx-5 w-full flex">
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="space-y-10 max-lg:p-8 max-lg:shadow-md max-lg:rounded-lg">
          <div>
            <h1 className="text-4xl font-semibold">Register</h1>
            <p className="text-md text-gray-400">
              You have an account?{" "}
              <a
                href="/authentication/login"
                className="text-primary font-semibold hover:text-primary/80 duration-300"
              >
                Log in
              </a>
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="w-1/2 bg-gray-200/80 min-h-full flex justify-center items-center rounded-l-3xl max-lg:hidden">
        <Image
          src="/icons/image_placeholder.png"
          alt="placeholder"
          width={200}
          height={200}
        />
      </div>
    </main>
  );
};

export default SignupPage;
