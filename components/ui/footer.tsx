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
            PulseFit<span className="text-primary">.</span>
          </h3>
        </div>
        <div>
          <ul className="grid gap-2">
            <li className="font-semibold">
              <Link href="#">Product</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Dashboard</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Features</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Pricing</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Help</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid gap-2">
            <li className="font-semibold">
              <Link href="#">Company</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">About Us</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Careers</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Blog</Link>
            </li>
            <li className="text-gray-600 hover:text-black duration-300">
              <Link href="#">Contact Us</Link>
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
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">Cookies Settings</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
