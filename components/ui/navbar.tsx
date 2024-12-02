"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "./button"; // Assuming Button is a custom component
import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md w-full fixed top-0 left-0 right-0 z-50 border-b-2 border-background-100 py-5">
      <div className="px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="text-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              PulseFit<span className="text-primary">.</span>
            </Link>
          </div>
          {/* Hamburger menu (mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" text-foreground/80 hover:text-foreground focus:outline-none"
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
            {pathname === "/" ? (
              <div
                className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300 cursor-pointer"
                onClick={scrollToTop}
              >
                Home
              </div>
            ) : (
              <Link
                href="/"
                className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
              >
                Home
              </Link>
            )}
            <Link
              href="/#features"
              className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex justify-end space-x-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              asChild
              className="text-white rounded-xl hover:bg-primary/70 duration-300 z-10 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm transition hover:after:blur-[6px] after:transition after:duration-300"
            >
              <Link
                href="/authentication/login"
                className="text-white"
                prefetch
              >
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
          <div className="bg-background/95 backdrop-blur-md absolute right-0 w-2/3 h-screen z-40 p-6 transition-transform duration-300 ease-in-out top-5">
            <div className="flex flex-col space-y-4">
              {pathname === "/" ? (
                <div
                  className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300 cursor-pointer"
                  onClick={scrollToTop}
                >
                  Home
                </div>
              ) : (
                <Link
                  href="/"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                href="/#features"
                className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-foreground/80 hover:text-foreground duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <Button
                asChild
                className="flex-1 text-white rounded-xl hover:bg-primary/70 duration-300 z-10 relative after:content-[''] after:absolute after:w-full after:h-full after:-z-10 after:rounded-lg after:bg-primary after:blur-sm transition hover:after:blur-[6px] after:transition after:duration-300"
              >
                <Link href="/authentication/login" className="text-white">
                  Get Started
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl"
                onClick={() =>
                  theme === "light" ? setTheme("dark") : setTheme("light")
                }
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
