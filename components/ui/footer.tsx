import React from "react";
import Container from "../landing/container";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Container className="space-y-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="text-3xl font-bold">
            <Link href="/">
              PulseFit<span className="text-primary">.</span>
            </Link>
          </h3>
          <p className="text-sm font-light">
            Track your workouts, monitor your progress, and achieve your fitness
            goals with ease. Our premium app is designed to keep you motivated
            and on track every step of the way.
          </p>
        </div>
        <div>
          <ul className="grid gap-2">
            <li className="font-semibold">
              <p>Product</p>
            </li>
            <li className="text-foreground/80 hover:text-foreground duration-300">
              <Link href="/authentication/login">Dashboard</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="/#features">Features</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="/contact">Help</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-2">
            <li className="font-semibold">
              <Link href="#">Company</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="#">About Us</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="#">Careers</Link>
            </li>
            <li className=" text-foreground/80 hover:text-foreground duration-300">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="#">
                <Image
                  src="/icons/socials/fb_icon.png"
                  alt="fb icon"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/socials/ig_icon.png"
                  alt="ig icon"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/socials/twitter_icon.png"
                  alt="twitter icon"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/socials/linkedin_icon.png"
                  alt="linkedin icon"
                  width={30}
                  height={30}
                  className="icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray-200"></div>
      <div className="flex flex-col sm:flex-row justify-between text-sm gap-5">
        <p>
          Landing page layout inspired on{" "}
          <Link
            href="https://dribbble.com/shots/24865917-SaaS-Workout-Landing-Page"
            target="_blank"
            className="text-primary font-semibold hover:text-primary/90 duration-300"
          >
            Vetrick Wilsen
          </Link>{" "}
          project from Dribble.
        </p>
        <ul className="font-light flex gap-5">
          <li>
            <Link
              href="/privacy-policy"
              className=" text-foreground/80 hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-service"
              className=" text-foreground/80 hover:text-foreground"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/cookies-settings"
              className=" text-foreground/80 hover:text-foreground"
            >
              Cookies Settings
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
