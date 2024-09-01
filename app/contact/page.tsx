import ContactForm from "@/components/contact-form";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoMention } from "react-icons/go";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us",
  openGraph: {
    images: [
      {
        url: "/images/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact",
      },
      {
        url: "/images/dummyPic.jpeg",
        width: 1200,
        height: 630,
        alt: "CureGreen",
      },
    ]
  }
};

const Page = () => {
  return (
    <div className="sm:pt-40 pt-16 mt-16 bg-primary-navy min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-8 text-secondary-white">
            <h1 className="text-5xl font-heading font-bold">Get in Touch</h1>
            <p>
              If you have any questions, feel free to contact us. We would love
              to hear from you!
            </p>

            {/* Address and Contact Information */}
            <div className="space-y-3">
              <div className="flex justify-start items-center gap-3">
                <span>
                  <FaPhoneVolume className="text-secondary-lightGreen text-5xl" />
                </span>
                <div className="flex flex-col">
                  <h6 className="font-heading font-semibold text-2xl">Phone</h6>
                  <div className="flex justify-center items-center gap-1">
                    <Link
                      href={"tel:0426722199"}
                      className="hover:text-primary-green text-secondary-lightGreen"
                    >
                      0426722199
                    </Link>
                    {" / "}
                    <Link
                      href={"tel:0475237850"}
                      className="hover:text-primary-green text-secondary-lightGreen"
                    >
                      0475237850
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href={"mailto:infocuregreen@gmail.com"}
                className="flex justify-start items-center gap-3"
              >
                <span>
                  <GoMention className="text-secondary-lightGreen text-5xl" />
                </span>
                <div className="flex flex-col">
                  <h6 className="font-heading font-semibold text-2xl">Email</h6>
                  <p className="hover:text-primary-green text-secondary-lightGreen">
                    infocuregreen@gmail.com
                  </p>
                </div>
              </Link>
            </div>

            {/* Display Image */}
            <div className="relative w-full h-96">
              <Image
                src="/images/dummyPic.jpeg" // Replace with your optimized image path
                alt="Contact Us"
                className="rounded-lg object-cover object-center"
                fill
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
