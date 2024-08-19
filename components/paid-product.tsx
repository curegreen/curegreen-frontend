import React, { Fragment } from "react";
import ImageContentBlock from "./image-content";
import { products } from "@/lib/definitions";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { Button } from "./ui/button";
import SizeCard from "./ui/size-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import GifContentBlock from "./gif-content";
import GenericForm from "./generic-form";
import { homePageFields } from "@/data/formItems";
const DummyPic = "/images/dummyPic.jpeg";

export default function PaidProduct({ product }: { product: products }) {
  const themeMap: {
    [key: string]: {
      bg: string;
      text: string;
      hover: string;
    };
  } = {
    yellow: {
      bg: "bg-primary-yellow",
      text: "text-secondary-white",
      hover: "hover:bg-secondary-lightYellow",
    },
    blue: {
      bg: "bg-primary-blue",
      text: "text-secondary-white",
      hover: "hover:bg-secondary-darkBlue",
    },
    green: {
      bg: "bg-primary-green",
      text: "text-secondary-white",
      hover: "hover:bg-secondary-lightGreen",
    },
    white: {
      bg: "bg-secondary-white",
      text: "text-secondary-black",
      hover: "hover:bg-neutral-600",
    },
  };
  const {
    id,
    slug,
    name,
    description,
    sizes,
    isCategory,
    category,
    howItWorks,
    stats,
    rebate,
    whyUpgrade,
  } = product;
  let theme;
  if (id === 1) theme = "yellow";
  else if (id === 2) theme = "blue";
  else if (id === 3) theme = "green";
  else theme = "white";

  const { bg, text, hover } = themeMap[theme];

  return (
    <>
      <div className="min-h-screen flex flex-col items-start w-full">
        {/* hero */}
        <div className="w-full bg-white flex flex-col md:flex-row justify-center items-center gap-5 mb-16">
          <div className="w-full md:w-2/3 h-full min-h-96 flex flex-col items-start p-10 space-y-10">
            <h4 className="font-heading text-2xl font-bold">
              Under Victoria&apos;s Energy Upgrade Program
            </h4>
            <h1 className="font-heading text-5xl font-bold">
              Are you Eligible for {name}?
            </h1>
            <div className="flex flex-col items-start font-body">
              <p className="font-body text-secondary-black">
                Rebates are now available through the program to upgrade/install
                your {name}!
              </p>
              <br />
              <p className="font-body text-secondary-black">
                Please check your eligibility by filling out the form below and
                we&apos;ll reach out with more details. You can specify the
                details so we have an idea.
              </p>
            </div>
          </div>
          <div
            className={`w-full md:w-1/3 h-full min-h-96 flex justify-center items-center ${bg} px-10`}
          >
            <div className="flex flex-col items-start gap-16">
              <h1 className={`font-heading text-3xl font-bold ${text}`}>
                Are you eligible for rebates in {name} under VEU?
              </h1>
              <Link href={"#form"}>
                <Button
                  variant={"default"}
                  className="bg-secondary-white text-secondary-black hover:bg-secondary-black hover:text-secondary-white flex justify-center items-center gap-1"
                >
                  <FaEdit />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mb-20">
          <h1 className="font-heading text-5xl font-bold text-center mb-8">
            {name}
          </h1>
          <p className="w-full sm:w-1/2 font-body text-secondary-black text-center mb-12">
            {description}
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-evenly items-center flex-wrap gap-10">
            {!isCategory && sizes && (
              <SizeCard
                sizes={sizes}
                title={name}
                btnClassName={`${bg} ${text} ${hover}`}
              />
            )}
          </div>
          <div className="w-full md:w-3/4">
            {isCategory && category && (
              <Tabs defaultValue={category[0].slug} className="w-full">
                <TabsList className="w-full rounded-md bg-neutral-200 p-1 mb-8">
                  {category.map(({ id, slug, name }) => (
                    <Fragment key={slug + id}>
                      <TabsTrigger
                        value={slug}
                        className="w-1/2 capitalize data-[state=active]:border-2 data-[state=active]:border-b-2 rounded-md text-neutral-500 data-[state=active]:bg-white data-[state=active]:shadow-sm font-heading md:text-lg data-[state=active]:text-primary-green data-[state=active]:border-b-primary-green"
                      >
                        {name}
                      </TabsTrigger>
                    </Fragment>
                  ))}
                </TabsList>
                {category.map(({ id, slug, name, sizes }) => (
                  <Fragment key={slug + id}>
                    <TabsContent value={slug} className="px-5">
                      <div className="w-full flex flex-col sm:flex-row justify-evenly items-center gap-10">
                        {sizes && (
                          <SizeCard
                            sizes={sizes}
                            title={name}
                            btnClassName={`${bg} ${text} ${hover}`}
                          />
                        )}
                      </div>
                    </TabsContent>
                  </Fragment>
                ))}
              </Tabs>
            )}
          </div>
        </div>

        {howItWorks && (
          <div className="bg-white w-full mb-16 py-4">
            <GifContentBlock
              header={howItWorks.header}
              content={howItWorks.desc}
              gif={howItWorks.gif}
              gifPosition="right"
              className="mb-16 px-12"
            />
          </div>
        )}

        {stats && (
          <ImageContentBlock
            header={stats.header}
            content={stats.desc}
            images={stats.img}
            imagePosition="left"
            className="mb-16 px-12"
          />
        )}

        {rebate && (
          <div className="bg-white w-full py-4 mb-16">
            <ImageContentBlock
              header={rebate.header}
              content={rebate.desc}
              images={rebate.img}
              imagePosition="right"
              className="px-12"
            />
          </div>
        )}
        {whyUpgrade && (
          <div className="bg-white w-full py-4 mb-16">
            <ImageContentBlock
              header={whyUpgrade.header}
              content={whyUpgrade.desc}
              images={whyUpgrade.img}
              imagePosition="right"
              className="px-12"
            />
          </div>
        )}
        <div id="form" className="mt-20 pt-20 border-t-2 w-full">
          <GenericForm
            formFields={JSON.stringify(homePageFields)}
            color={text}
            bgColor={bg}
            formTitle={product.serviceType ? "Get Quote" : "Contact Us"}
            imageOverlayColor={text}
            buttonTextColor={bg}
            buttonBgColor={text}
            image={DummyPic}
          />
        </div>
      </div>
    </>
  );
}
