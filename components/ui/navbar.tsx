"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./button"; // Assuming Button is a custom component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-10 px-16 border-b-2 border-gray-200 z-50 sticky top-0 bg-background/5 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold">
          <Link href="#">
            Fitly<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Hamburger Menu Button for medium screens and below */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Change the icon based on isOpen state */}
            {isOpen ? (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center">
          <ul className="flex gap-8">
            <li>
              <Link
                href="#"
                className="text-black hover:text-black/80 duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black hover:text-black/80 duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black hover:text-black/80 duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-black hover:text-black/80 duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <ul>
            <li>
              <Button asChild className="px-8 py-6 duration-300">
                <Link href="#" className="font-semibold text-lg">
                  Login
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-background shadow-lg z-40 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-5 mt-5 p-5">
          <li>
            <Link
              href="#"
              className="text-black hover:text-black/80 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-black hover:text-black/80 duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-black hover:text-black/80 duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-black hover:text-black/80 duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Button asChild className="px-8 py-6 duration-300 w-full text-left">
              <Link href="#" className="font-semibold text-lg">
                Login
              </Link>
            </Button>
          </li>
        </ul>
      </div>

      {/* Overlay (Optional): To create an overlay when the mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
