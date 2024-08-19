import { products } from "@/lib/definitions";
import Link from "next/link";

const solarUrl = "/images/Solar";
const airUrl = "/images/Air";
const waterUrl = "/images/Water";
const productsUrl = "/images/Products";
const gifUrl = "/images/GIFS";

export const ShowerHeads: products[] = [
  {
    id: 1,
    slug: "square-wall-mount",
    serviceType: false,
    name: "Square Wall Mount",
    image: `${productsUrl}/square shower head.webp`,
    link: "/free-products/shower-heads/square-wall-mount",
    isCategory: false,
    description:
      "The ERS TECH Square wall mount showerhead, with a WELS Rating of 4 and a flow rate of 7.5 Litres/minute, offers efficient water usage, ensuring a high-quality and low-maintenance shower experience.",
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/square shower head.webp`,
        thumbnail: `${productsUrl}/square shower head.webp`,
      },
      {
        original: `${productsUrl}/square shower.webp`,
        thumbnail: `${productsUrl}/square shower.webp`,
      },
    ],
  },
  {
    id: 2,
    slug: "hand-shower",
    serviceType: false,
    name: "Hand Shower",
    image: `${productsUrl}/hand shower head.webp`,
    link: "/free-products/shower-heads/hand-shower",
    isCategory: false,
    description:
      "The ECO-PEM Snake Shower Rose is a 4-Star Water Efficiency Labelling and Standards (WELS) rated product using 5 jet-spray technology to deliver water-efficient shower experience.",
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/hand shower head.webp`,
        thumbnail: `${productsUrl}/hand shower head.webp`,
      },
    ],
  },
];

export const DoorSeals: products[] = [
  {
    id: 1,
    slug: "bottom-door-seal",
    serviceType: false,
    name: "Bottom Door Seal",
    image: `${productsUrl}/door seal - bottom.webp`,
    link: "/free-products/door-seals/bottom-door-seal",
    isCategory: false,
    description: (
      <div>
        Door seals are essential for a well-insulated home, preventing air,
        water, and noise infiltration.
        <br />
        <br />
        Upgrade your home with free door seal for improved energy efficiency,
        comfort, and tranquility.
      </div>
    ),
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/door seal - bottom.webp`,
        thumbnail: `${productsUrl}/door seal - bottom.webp`,
      },
    ],
  },
  {
    id: 2,
    slug: "frame-door-seal",
    serviceType: false,
    name: "Frame Door Seal",
    image: `${productsUrl}/Door Seal - Frame.webp`,
    link: "/free-products/door-seals/frame-door-seal",
    isCategory: false,
    description: (
      <div>
        Door seals are essential for a well-insulated home, preventing air,
        water, and noise infiltration.
        <br />
        <br />
        Upgrade your home with free door seal for improved energy efficiency,
        comfort, and tranquility.
      </div>
    ),
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/Door Seal - Frame.webp`,
        thumbnail: `${productsUrl}/Door Seal - Frame.webp`,
      },
    ],
  },
];

export const FreeProducts: products[] = [
  {
    id: 1,
    slug: "vent-covers",
    serviceType: false,
    name: "Vent Covers",
    image: `${productsUrl}/Air Vent product.webp`,
    link: "/free-products/vent-covers",
    isCategory: false,
    description: (
      <>
        <p>
          Is you house getting cold due to cold air from vents during winters?{" "}
        </p>{" "}
        <br />{" "}
        <p>
          The Vent covers provide quick solution. If you put them on no cold air
          will get into the house, no spiders and no heat will escape from house
          and it will keep the house warm.
        </p>
      </>
    ),
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/Air Vent product.webp`,
        thumbnail: `${productsUrl}/Air Vent product.webp`,
      },
      {
        original: `${productsUrl}/Air vent.webp`,
        thumbnail: `${productsUrl}/Air vent.webp`,
      },
    ],
  },
  {
    id: 2,
    slug: "shower-heads",
    serviceType: false,
    name: "Shower Heads",
    image: `${productsUrl}/hand shower head.webp`,
    link: "/free-products/shower-heads",
    isCategory: true,
    category: ShowerHeads,
  },
  {
    id: 3,
    slug: "door-seals",
    serviceType: false,
    name: "Door Seals (Bottom & Frame)",
    image: `${productsUrl}/Door Seal - Frame.webp`,
    link: "/free-products/door-seals",
    isCategory: true,
    category: DoorSeals,
  },
  {
    id: 4,
    slug: "in-home-display-service",
    serviceType: false,
    name: "In-Home Display Service",
    image: `${productsUrl}/In Home Display Device a.webp`,
    link: "/free-products/in-home-display-service",
    isCategory: false,
    description: (
      <>
        <p>
          Are you looking for a way to explore our products without leaving the
          comfort of your home?
        </p>
        <br />
        <p>
          Our in-home display service brings our product expertise directly to
          you, allowing you to see and experience our offerings firsthand. A
          personalized consultation ensures you find the perfect solutions
          tailored to your needs and preferences.
        </p>
      </>
    ),
    features: "No Features",
    gallery: [
      {
        original: `${productsUrl}/In Home Display Device a.webp`,
        thumbnail: `${productsUrl}/In Home Display Device a.webp`,
      },
      {
        original: `${productsUrl}/In Home Display Device b.webp`,
        thumbnail: `${productsUrl}/In Home Display Device b.webp`,
      },
    ],
  },
];

export const AirConditioners: products[] = [
  {
    id: 1,
    slug: "split-air-system",
    serviceType: false,
    name: "Split Air System",
    image: `${airUrl}/Single Split Conditioning.jpeg`,
    isCategory: false,
    sizes: [
      {
        size: "Single",
        houseSize: "For Residential Houses",
        image: `${airUrl}/Single Split Conditioning.jpeg`,
      },
      {
        size: "Multi",
        houseSize: "For Residential Houses",
        image: `${airUrl}/multi split system.png`,
      },
    ],
  },
  {
    id: 2,
    slug: "refrigerated-cooling-system",
    serviceType: false,
    name: "Refrigerated Cooling System",
    image: `${productsUrl}/Air Vent product.webp`,
    isCategory: false,
    sizes: [
      {
        size: "Single",
        houseSize: "For Residential Houses",
        image: `${productsUrl}/Air Vent product.webp`,
      },
      {
        size: "Multi",
        houseSize: "For Residential Houses",
        image: `${productsUrl}/Air Vent product.webp`,
      },
    ],
  },
];

export const Products: products[] = [
  {
    id: 1,
    slug: "solar-power",
    serviceType: true,
    name: "Solar Power",
    shortDesc:
      "Tackle climate change and reduce your electricity bills in one go with renewable solar energy.",
    link: "/solar-power",
    image: `${solarUrl}/Solar Product.jpg`,
    description:
      "Tackle climate change and reduce your electricity bills in one go with renewable solar energy. Installing residential solar panels is a no-brainer. Not only will it save you money in the long run, but it's also an environmentally friendly option that reduces your carbon footprint.",
    sizes: [
      {
        size: "Small",
        houseSize: "small to medium",
        inverter: "5 kW",
        system: "6.6 kW",
        image: `${solarUrl}/Solar Product.jpg`,
      },
      {
        size: "Medium",
        houseSize: "large",
        inverter: "8 kW",
        system: "10 kW",
        image: `${solarUrl}/Solar Product2.jpg`,
      },
      {
        size: "Large",
        houseSize: "farm",
        inverter: "10-15 kW",
        system: "13-20 kW",
        image: `${solarUrl}/Solar Product3.jpg`,
      },
    ],
    howItWorks: {
      header: <h2 className="3xl mb-16">How Solar Panels Work?</h2>,
      gif: `${gifUrl}/solar energy.gif`,
      desc: (
        <div className="font-body text-xl space-y-8">
          <p>
            A solar system operates by harnessing energy from the sun using
            panels installed on rooftops or open spaces. Excess electricity can
            be stored in batteries for later use or fed back into the grid.
          </p>{" "}
          <p>
            {" "}
            Solar systems are an eco-friendly way to power homes and businesses,
            reducing reliance on traditional energy sources and lowering
            electricity bills
          </p>
        </div>
      ),
    },
    rebate: {
      header: "Government Eligible Rebates",
      img: [{ original: `${solarUrl}/Rebate Segment image.jpg` }],
      desc: "In Victoria, eligible customers can take advantage of the state government's solar homes program and claim rebates for their solar installation. This program makes solar energy more accessible and affordable for homeowners, and we're proud to be a part of it. Contact us for more information.",
    },
    stats: {
      header: "Statistics Reveal",
      img: [{ original: `${solarUrl}/solar install statistic.png` }],
      desc: (
        <>
          <p>
            Solar is now installed on 30% of Victorian homes with 350K+
            installations completed since the program began including 270K+
            solar panel systems, 17K+ solar battery systems and 30K+ solar hot
            water systems installed.
          </p>{" "}
          <br />{" "}
          <p>
            You can check the article{" "}
            <Link
              href={
                "https://www.pv-magazine-australia.com/2024/08/13/victorian-rooftop-solar-uptake-exceeds-five-million-panels-and-2-gw-of-power/"
              }
              className="text-primary-yellow underline"
            >
              here
            </Link>
          </p>
        </>
      ),
    },
    isCategory: false,
  },
  {
    id: 2,
    slug: "hot-water-system",
    serviceType: true,
    name: "Hot Water System",
    shortDesc: "Save 75% of electricity on generating the hot water.",
    link: "/hot-water-system",
    image: `${waterUrl}/Residential Hot Water System Product + Footer.jpeg`,
    isCategory: false,
    description:
      "Hot water system is upgraded in the house from gas heating to electrical heating system to save energy as it works on wind energy to generate electricity and saves 75% of electricity on generating the hot water.",
    sizes: [
      {
        size: "Residential",
        houseSize: "residential",
        image: `${waterUrl}/Residential Hot Water System Product + Footer.jpeg`,
      },
    ],
    howItWorks: {
      header: <h2 className="3xl mb-16">How hot water systems work?</h2>,
      gif: `${gifUrl}/hot water system.gif`,
      desc: (
        <div className="font-body text-xl space-y-8">
          <p>
            A hot water system typically operates by heating water using either
            electricity. In a traditional electric system, water is heated in a
            tank and stored until needed. Hot water is then delivered through
            pipes to faucets and appliances as needed, providing a constant
            supply of heated water.
          </p>
          <p>
            For us, we are ensuring top notch service in providing you an
            efficient electricity-led hot water system.
          </p>
        </div>
      ),
    },
    whyUpgrade: {
      header: "Why is upgrading to an electric hot water system necessary?",
      img: [{ original: `${waterUrl}/Why upgrading.jpg` }],
      desc: (
        <div>
          <ul className="space-y-4">
            <li>
              1. An electric hot water system is likely to be your most
              affordable option when it comes to upfront price
            </li>
            <li>
              2. In the battle between gas and electric systems, electric win
              out from an efficiency perspective.
            </li>
            <li>3. Comparatively safer than a conventional gas heat system</li>
            <li>
              4. Since Victoria is going on renewable sources, electric hot
              water systems are readily available
            </li>
          </ul>
        </div>
      ),
    },
    stats: {
      header: "Statistics Reveal...",
      img: [{ original: `${waterUrl}/statistic hot water.jpg` }],
      desc: (
        <>
          <p>
            ARENA CEO Darren Miller said the report shows “the potential of
            domestic hot water systems across Australia to help reduce energy
            bills and lower emissions.”
          </p>
          <br />{" "}
          <p>
            “As households continue to purchase electric hot water systems, we
            can look to options to dynamically manage load, ensuring the
            benefits of renewables are realised at least cost to consumers.”
          </p>
          <br />{" "}
          <p>
            You can check out the source{" "}
            <Link
              href={
                "https://arena.gov.au/blog/report-the-future-of-hot-water-is-electric/"
              }
              className="text-primary-blue underline"
            >
              here
            </Link>
          </p>
        </>
      ),
    },
  },
  {
    id: 3,
    slug: "air-conditioner-system",
    serviceType: true,
    name: "Air Conditioning System",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/air-conditioner-system",
    image: `${airUrl}/Single Split Conditioning.jpeg`,
    isCategory: true,
    category: AirConditioners,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    howItWorks: {
      header: (
        <h2 className="3xl mb-16">
          How the Air Conditioning for both system works?
        </h2>
      ),
      gif: `${gifUrl}/air conditioning.gif`,
      desc: (
        <div className="font-body text-xl space-y-8">
          <p>
            A <strong>split system air conditioner</strong> works by using an
            outdoor compressor to cool refrigerant, which is then circulated
            through indoor units that release cool air into the room. The system
            can be reversed to provide heating as well.
          </p>
          <p>
            In a <strong>refrigerated cooling system</strong>, the process is
            similar, but it involves a central unit that cools air and
            distributes it through ducts to multiple rooms. Both systems offer
            precise temperature control and efficient cooling, making them ideal
            for maintaining a comfortable indoor climate year-round.
          </p>
        </div>
      ),
    },
    whyUpgrade: {
      header: "Why is upgrading the old air conditioning system necessary?",
      img: [{ original: `${airUrl}/duct.webp` }],
      desc: (
        <div className="mt-16">
          <ul className="space-y-4">
            <li>1. Better efficiency, with upgraded system</li>
            <li>
              2. Lowers utility bills since upgraded system will get installed
            </li>
            <li>3. Upgrading increases the lifespan of the installed system</li>
            <li>
              4. Improved performance, since old system gets wear off for coming
              years
            </li>
          </ul>
        </div>
      ),
    },
    stats: {
      header: "Statistics Reveal...",
      img: [{ original: `${airUrl}/cropped-frame 13 graph.png` }],
      desc: (
        <div className="mt-16">
          <p>
            By upgrading your system, the savings get significantly increased.
          </p>
          <br />{" "}
          <p>
            By upgrading your system, the savings get significantly increased.
            From the graph itself, upgrading your ducted system from 3 star to 6
            star increases the savings, while for residents having split AC's
            the savings increases around 30-40%
          </p>
          <br />{" "}
          <p>
            You can check out the source{" "}
            <Link
              href={
                "https://www.sustainability.vic.gov.au/energy-efficiency-and-reducing-emissions/save-energy-in-the-home/heat-your-home-efficiently/calculate-heating-costs"
              }
              className="text-primary-green underline"
            >
              here
            </Link>
          </p>
        </div>
      ),
    },
  },
  {
    id: 4,
    slug: "free-products",
    serviceType: false,
    name: "Free Products",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/free-products",
    image: "/images/Home Page/3 Free product Image.png",
    isCategory: true,
    category: FreeProducts,
  },
];
