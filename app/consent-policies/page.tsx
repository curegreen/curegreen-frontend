import FooterForm from "@/components/footer-form";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Consent Policies",
};

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-40 mt-16 bg-secondary-white text-lg">
      <h2 className="w-full px-5 md:w-1/2 font-heading text-primary-navy text-3xl">
        Pre consent form policies for telemarketing under VEU
      </h2>
      <div className="w-full px-5 md:w-1/2 flex flex-col gap-8">
        <p>
          I hereby grant my express written consent for CureGreen Pty Ltd to
          contact me via telephone about the activities offered under the VEU
          program.
        </p>

        <p>
          <strong>Scope of Consent: </strong>
          By providing this consent, I acknowledge that I may receive occasional
          telemarketing calls from CureGreen sales team related to
          energy-efficient products, hot water systems, air cons and aircons.
          These calls may include information about new product launches,
          exclusive deals, and other important updates.
        </p>

        <p>
          <strong>Validity & Right to Revoke: </strong>
          This consent remains effective for a period of{" "}
          <strong>12 months</strong> from the date signed below, unless I choose
          to withdraw it earlier.
        </p>

        <p>
          I understand that I can withdraw this consent at any time by providing
          written notice to CureGreen via email at{" "}
          <Link
            href={"mailto:infocuregreen@gmail.com"}
            className="text-primary-navy underline"
          >
            infocuregreen@gmail.com
          </Link>{" "}
          or by contacting their customer service team at{" "}
          <Link href={"tel:0475237850"} className="text-primary-navy underline">
            0475237850
          </Link>
          . Any withdrawal of consent will not affect the legality of any
          actions taken before the revocation.
        </p>

        <p>You can find the consent form here on below link</p>

        <Link href={"/consent"}>
          <Button
            variant="default"
            className="text-secondary-white bg-primary-navy hover:bg-secondary-darkBlue font-body text-lg font-semibold py-5 px-10"
          >
            View Consent Form
          </Button>
        </Link>
      </div>
      <div id="form" className="mt-20 pt-20 border-t-2">
        <FooterForm formTitle={"Get Quote"} />
      </div>
    </div>
  );
};

export default Page;
