"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./button"; // Assuming Button is a custom component
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md w-full fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-100 py-5">
      <div className="px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="#" className="text-2xl font-semibold">
              Fitly<span className="text-primary">.</span>
            </Link>
          </div>
          {/* Hamburger menu (mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Links and button on larger screens */}
          <div className="hidden md:flex space-x-8 justify-center flex-1">
            <Link
              href="#"
              className="text-lg font-medium text-gray-600 hover:text-black duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-black duration-300"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-black duration-300"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-black duration-300"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-gray-700 hover:text-black duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex justify-end">
            <Button asChild className="rounded-xl z-10">
              <Link href="#" className="">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
      >
        <div className="md:hidden backdrop-blur-md">
          <div className="bg-white/90 backdrop-blur-md absolute right-0 w-2/3 h-screen z-40 p-6 transition-transform duration-300 ease-in-out top-5">
            <div className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-lg font-medium text-gray-600 hover:text-black duration-300"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-black duration-300"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-black duration-300"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-black duration-300"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-black duration-300"
              >
                Contact
              </Link>
            </div>
            <Button asChild className="rounded-xl z-10 mt-5 w-full">
              <Link href="#" className="">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
