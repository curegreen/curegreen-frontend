import ConsentForm from "@/components/consent-form";
import GifContentBlock from "@/components/gif-content";
import ImageContentBlock from "@/components/image-content";
import ProductsArchive from "@/components/products-archive";
import { Products } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { Fragment } from "react";
const homeUrl = "/images/Home Page";
const aboutUsImg = `${homeUrl}/2 About us.jpg`;
const operator = `${homeUrl}/4 How We will Operate.jpg`;
const veu1 = `${homeUrl}/5 why join VEU a.jpg`;
const veu2 = `${homeUrl}/5 why join VEU b.jpg`;
const veu3 = `${homeUrl}/5 why join VEU c.jpg`;
const veu4 = `${homeUrl}/5 why join VEU d.jpg`;
const formPic = `${homeUrl}/6 Get Quote Collage.png`;
const desktopImg = `${homeUrl}/city-with-eco-concept-elements-vector-illustration-desktop.png`
const mobileImg = `${homeUrl}/city-with-eco-concept-elements-vector-illustration-mobile.png`

export default function Home() {
  const products = Products.slice(0, 3);
  return (
    <main className="flex bg-secondary-white min-h-screen flex-col items-center justify-between">
      {/* Home Background Image */}
      <div className="hidden sm:block mt-20 md:mt-32 3xl:mt-52 mb-16 relative w-full h-[50rem] lg:h-[60rem] xl:h-[70rem] overflow-clip">
        <Image
          src={desktopImg}
          alt="Landscape image"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className="sm:hidden mt-20 md:mt-32 mb-16 relative w-full h-[50rem] lg:h-[60rem] overflow-clip">
        <Image
          src={mobileImg}
          alt="Vertical image"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="px-5 sm:px-16">
        {/* About Us */}
        <div id="about">
          <ImageContentBlock
            header="About Us"
            content={
              <>
                <p className="font-body">
                  CureGreen is dedicated to providing sustainable solutions for
                  a cleaner and greener future. Specializing in high-quality
                  solar, water, and air conditioning systems, we empower homes and
                  businesses to reduce their environmental footprint while
                  saving on energy costs. Our cutting-edge products are designed
                  to enhance the quality of life by harnessing the power of
                  nature.
                </p>
                <br />
                <p>
                  To learn more about how CureGreen can help you achieve your
                  sustainability goals, contact us today for a personalized
                  Contact Us tailored to your needs.
                </p>
              </>
            }
            images={aboutUsImg}
            imagePosition="left"
            className="mb-16"
          />
        </div>

        <ProductsArchive className="mb-16" header={"Services and Products"} />

        {/* How it works */}
        <div className="h-full p-2 mb-16">
          <h2 className="font-heading text-5xl text-secondary-black text-center mb-8 md:mb-14">
            How It Works
          </h2>
          <Tabs defaultValue={products[0].slug} className="w-full">
            <TabsList className="w-full rounded-md p-1 mb-8">
              {products.map(({ id, slug, name }) => (
                <Fragment key={id}>
                  <TabsTrigger
                    value={slug}
                    className={`w-1/3 capitalize data-[state=active]:border-2 data-[state=active]:border-b-4 rounded-md text-neutral-500 data-[state=active]:bg-white data-[state=active]:shadow-sm font-heading md:text-lg ${
                      id === 1
                        ? "data-[state=active]:text-primary-yellow data-[state=active]:border-b-primary-yellow"
                        : id === 2
                        ? "data-[state=active]:text-primary-blue data-[state=active]:border-b-primary-blue"
                        : "data-[state=active]:text-primary-green data-[state=active]:border-b-primary-green"
                    }`}
                  >
                    <p className="sm:hidden flex justify-center items-center py-4 w-full">
                      {name.length > 8 ? `${name.slice(0, 8)}.` : name}
                    </p>
                    <p className="sm:flex hidden justify-center items-center py-4 w-full">
                      {name}
                    </p>
                  </TabsTrigger>
                </Fragment>
              ))}
            </TabsList>
            {products.map(({ id, slug, howItWorks }) => (
              <Fragment key={id}>
                <TabsContent value={slug} className="px-5">
                  {howItWorks && (
                    <GifContentBlock
                      content={howItWorks?.desc}
                      gif={howItWorks?.gif}
                      gifPosition={id % 2 !== 0 ? "left" : "right"}
                    />
                  )}
                </TabsContent>
              </Fragment>
            ))}
          </Tabs>
        </div>

        <ImageContentBlock
          header="How we will operate"
          content="Our team of experts can help you choose the right system for your home. We stay up-to-date with the latest technology and ensure that all our products meet Australian standards. We'll work with you to understand your specific energy needs and recommend the best system for your home. We'll explain the entire process to you, from the initial consultation to the final installation. We understand that every home is different, and that's why we assess your electricity bills to determine the right size for your system."
          images={operator}
          imagePosition="right"
          className="mb-16"
        />

        {/* VEU */}
        <div className="flex flex-col justify-center items-center px-5 mb-16 gap-8 md:gap-14">
          <h2 className="font-heading text-5xl text-secondary-black text-center">
            Benefits of coming under VEU program?
          </h2>
          <div className="flex flex-col md:flex-row items-start w-full gap-10 md:gap-0">
            <div className="w-full md:w-1/4 flex flex-col items-center gap-5">
              <div className="relative w-full h-60 sm:w-[8rem] sm:h-[8rem]">
                <Image
                  src={veu1}
                  alt="veu"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              <strong className="text-lg font-body font-bold w-full px-5 text-center">
                Save money on energy bills
              </strong>
            </div>
            <div className="w-full md:w-1/4 flex flex-col items-center gap-5">
              <div className="relative w-full h-60 sm:w-[8rem] sm:h-[8rem]">
                <Image
                  src={veu2}
                  alt="veu"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              <strong className="text-lg font-body font-bold w-full px-5 text-center">
                Government Rebates available
              </strong>
            </div>
            <div className="w-full md:w-1/4 flex flex-col items-center gap-5 ">
              <div className="relative w-full h-60 sm:w-[8rem] sm:h-[8rem]">
                <Image
                  src={veu3}
                  alt="veu"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              <strong className="text-lg font-body font-bold w-full px-5 text-center">
                Take advantage on discounted applicances
              </strong>
            </div>
            <div className="w-full md:w-1/4 flex flex-col items-center gap-5">
              <div className="relative w-full h-60 sm:w-[8rem] sm:h-[8rem]">
                <Image
                  src={veu4}
                  alt="veu"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              <strong className="text-lg font-body font-bold w-full px-5 text-center">
                Help save the environment
              </strong>
            </div>
          </div>
        </div>

        {/* Facts */}
        <div className="flex flex-col justify-start items-center px-5 mb-16 gap-4">
          <h2 className="w-full font-heading text-5xl text-secondary-black text-left">
            Some Facts:{" "}
          </h2>
          <ul className="w-full text-left font-body list-disc pl-5 space-y-2">
            <li>
              Upgrading hot water system can save <strong>from 40%</strong>{" "}
              annually
            </li>
            <li>
              Upgrading heating can save <strong>upto 40%</strong> annually
            </li>
            <li>
              Over <strong>2.2 million</strong> households are benefitted from
              the program
            </li>
            <li>
              It is estimated this program will save an estimated{" "}
              <strong>28 million</strong> tons of greenhouse gas emissions
              between 2022-2025
            </li>
          </ul>
        </div>
        <div id="form" className="mt-20 pt-20 border-t-2">
          <ConsentForm
            formTitle={"Get Quote"}
            image={formPic}
          />
        </div>
      </div>
    </main>
  );
}
