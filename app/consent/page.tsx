import ConsentForm from "@/components/consent-form";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const topLogo = "/images/logos/headerLogo.png";

export const metadata: Metadata = {
  title: "Consent",
};

const Page = () => {
  return (
    <div className="pt-40 mt-16 bg-secondary-white">
      <div className="min-h-screen px-5 flex flex-col justify-start items-center gap-20">
        {/* logo */}
        <section className="bg-white p-5 h-36 sm:h-44 md:h-60 w-full lg:w-1/2 rounded-md">
          <div className="relative h-full w-full">
            <Image
              src={topLogo}
              alt="consent-form top logo"
              fill
              loading="lazy"
            />
          </div>
        </section>
        <article className="bg-white w-full lg:w-1/2 p-5 mb-16">
          {/* Top Bar of form */}
          <section className="flex flex-col gap-3 border-b-2 border-secondary-white py-5">
            <h1 className="font-heading text-primary-green text-5xl">
              VEU Upgrades Consent Form (CureGreen)
            </h1>
            <p className="font-body font-medium text-lg text-primary-green">
              To Receive a phone call or information about VEU Activities for
              your residential premises.
            </p>
          </section>

          {/* form section */}
          <section className="flex flex-col gap-3 py-5">
            <h3 className="pb-5 text-2xl text-primary-green font-semibold border-b-2 border-secondary-white">
              Please fill out the details:
            </h3>
            <ConsentForm />
          </section>
        </article>
      </div>
    </div>
  );
};

export default Page;
