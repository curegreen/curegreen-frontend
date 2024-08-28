import { products } from "@/lib/definitions";
import Link from "next/link";

const solarUrl = "/images/Solar";
const airUrl = "/images/Air";
const waterUrl = "/images/Water";
const productsUrl = "/images/Products";
const gifUrl = "/images/GIFS";
const quoteUrl = "/images/Get Quote- Contact Us Images";

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
    image: `${productsUrl}/vent-cover2.jpg`,
    link: "/free-products/vent-covers",
    isCategory: false,
    description: (
      <>
        <p className="font-body">
          The vent covers are plastic covers that are installed over vents to
          block airflow entirely, commonly used to prevent drafts, improve
          insulation, or block unused vents. These covers help save energy by
          sealing off areas where heated or cooled air might escape,
          contributing to energy efficiency and cost savings under the VEU
          program. It provides a quick solution, If you put them on no cold air
          will get into the house, no spiders and no heat will escape from house
          and it will keep the house warm.
        </p>
      </>
    ),
    features: (
      <>
        <ul className="list-disc space-y-2">
          <li>
            <strong>Installation of the Plastic Vent Cover: </strong>The plastic
            vent cover is installed over a ceiling vent to completely block
            airflow. It is usually clipped or adhered in place, providing a
            seal.
          </li>
          <li>
            <strong>Blocking Airflow: </strong>Once installed, the vent cover
            prevents air from flowing in or out of the vent. This helps maintain
            a stable temperature in the room by stopping air leaks and
            preventing the HVAC system from working harder than necessary.
          </li>
          <li>
            <strong>Energy Efficiency: </strong>By preventing unnecessary
            airflow, the vent cover reduces the workload on heating and cooling
            systems. This leads to lower energy consumption and reduced utility
            bills. It also contributes to the overall energy efficiency of the
            home.
          </li>
          <li>
            <strong>Environmental Impact: </strong>Blocking air leaks reduces
            energy usage, which in turn decreases the amount of electricity or
            gas needed to heat or cool the home. This contributes to lower
            greenhouse gas emissions, aligning with the goals of the VEU
            program.
          </li>
        </ul>
      </>
    ),
    gallery: [
      {
        original: `${productsUrl}/vent-cover2.jpg`,
        thumbnail: `${productsUrl}/vent-cover2.jpg`,
      },
      {
        original: `${productsUrl}/Air vent.webp`,
        thumbnail: `${productsUrl}/Air vent.webp`,
      },
      {
        original: `${productsUrl}/vent-cover1.jpg`,
        thumbnail: `${productsUrl}/vent-cover1.jpg`,
      },
      {
        original: `${productsUrl}/Air Vent product.webp`,
        thumbnail: `${productsUrl}/Air Vent product.webp`,
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
    slug: "in-home-display-device",
    serviceType: false,
    name: "In-Home Display Device (Electricity Tracker)",
    image: `${productsUrl}/In Home Display Device a.webp`,
    link: "/free-products/in-home-display-device",
    isCategory: false,
    description: (
      <div className="space-y-2">
        <p>
          An In-Home Display (IHD) under the Victorian Energy Upgrades (VEU)
          program is a device designed to help households monitor and manage
          their energy usage. The VEU program, an initiative by the Victorian
          government, aims to reduce greenhouse gas emissions and help
          households and businesses save on energy bills.
        </p>
        <h4 className="font-heading">How it works: </h4>
        <ul className="list-disc space-y-2">
          <li>
            <strong>Connection to Electricity Meter: </strong>The IHD is
            typically connected to your home's electricity meter, which measures
            electricity consumption in real-time. The smart meter sends data to
            the IHD, which then displays it on an application installed on your
            smartphone.
          </li>
          <li>
            <strong>Connecting Device with Smartphone: </strong>After the device
            is installed on your meter, it is paired with your smartphone via
            Bluetooth and an application is installed providing you electricity
            usage.
          </li>
          <li>
            <strong>Real-Time Monitoring: </strong>The IHD provides real-time
            information on electricity usage, including how much energy is being
            used at any given moment, historical usage patterns, and the cost of
            energy being consumed.
          </li>
        </ul>
      </div>
    ),
    features: (
      <>
        <ul className="list-disc space-y-2">
          <li>
            <strong>Cost Savings: </strong>Monitoring energy use helps
            households identify high-usage periods or appliances, allowing them
            to adjust habits or invest in more energy-efficient solutions,
            ultimately reducing electricity bills.
          </li>
          <li>
            <strong>Empowerment and Control: </strong>IHDs empower users by
            giving them control over their energy usage. With detailed
            information at their fingertips, users can make informed decisions
            about how and when to use electricity.
          </li>
          <li>
            <strong>Enhanced Budgeting: </strong>For households on a budget,
            IHDs can help manage energy costs more effectively by providing
            insights into when and where energy is being used, allowing for more
            accurate budgeting and planning.
          </li>
          <li>
            <strong>Ease of Use: </strong>IHDs are generally designed to be
            user-friendly, with simple interfaces that make it easy for all
            household members to understand and use the information provided.
          </li>
        </ul>
      </>
    ),
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
        houseSize: "Residential",
        desc: "one outdoor unit connected to one indoor unit, suitable for a single room or open plan area.",
        image: `${airUrl}/Single Split Conditioning.jpeg`,
      },
      {
        size: "Multi",
        houseSize: "Residential",
        desc: "one outdoor unit connected to multiple indoor units, suitable for multiple rooms or whole-of-home.",
        image: `${airUrl}/multi split system.png`,
      },
    ],
  },
  {
    id: 2,
    slug: "refrigerated-cooling-system",
    serviceType: false,
    name: "Refrigerated Cooling System",
    image: `${airUrl}/refrigerated cooling system.jpg`,
    isCategory: false,
    sizes: [
      {
        size: "Ducted",
        houseSize: "Residential",
        desc: "one central outdoor unit connected to multiple indoor rooms through ducts and vents, suitable for whole-of-home.",
        image: `${airUrl}/refrigerated cooling system.jpg`,
      },
    ],
  },
];

export const Products: products[] = [
  {
    id: 1,
    slug: "solar-panels",
    serviceType: true,
    name: "Solar Panels",
    shortDesc:
      "Tackle climate change and reduce your electricity bills in one go with renewable solar energy.",
    link: "/solar-panels",
    image: `${solarUrl}/Solar Product.jpg`,
    description: (
      <>
        A solar system operates by harnessing energy from the sun using panels
        installed on rooftops or open spaces. Excess electricity can be stored
        in batteries for later use or fed back into the grid.
        <br />
        Solar systems are an eco-friendly way to power homes and businesses,
        reducing reliance on traditional energy sources and lowering electricity
        bills
      </>
    ),
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
      header: <h2 className="mb-8">How Solar Panels Work?</h2>,
      gif: `${gifUrl}/solar energy.gif`,
      desc: (
        <div className="font-body space-y-2">
          <p>
            In Victoria, Australia, under the Victorian Energy Upgrades (VEU)
            program, the electricity generated by solar panels is typically
            exported directly to the grid rather than being used by the
            household first. Here&apos;s how this system works and the benefits
            it provides:
          </p>
          <ul className="list-disc space-y-4">
            <li>
              <strong>Solar Panel Installation:</strong> Solar panels are
              installed on your roof to capture sunlight and convert it into
              direct current (DC) electricity.
            </li>
            <li>
              <strong>Sunlight Absorption:</strong> During the day, the solar
              panels absorb sunlight, and the photovoltaic cells generate DC
              electricity.
            </li>
            <li>
              <strong>Inverter Conversion: </strong>The DC electricity is sent
              to an inverter, which converts it into alternating current (AC)
              electricity.
            </li>
            <li>
              <strong>Electricity Exported to the Grid: </strong>Instead of the
              electricity being used directly by your household, it is sent
              directly to the grid. The grid effectively acts as a "battery" for
              your solar energy.
            </li>
            <li>
              <strong>Household Draws Power from the Grid: </strong>Your
              household draws electricity from the grid as needed. You use the
              grid&apos;s electricity supply even if your solar system is
              generating electricity during the day.
            </li>
            <li>
              <strong>Feed-in Tariff: </strong>For the electricity you export to
              the grid, you receive a feed-in tariff. This credit is applied to
              your electricity bill, helping to offset the cost of the power you
              consume from the grid.
            </li>
          </ul>
        </div>
      ),
    },
    whyUpgrade: {
      header: "Benefits:",
      img: [{ original: `${solarUrl}/Rebate Segment image.jpg` }],
      desc: (
        <div className="mt-8">
          <ul className="list-disc space-y-4">
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Reduced Electricity Bills:
              </h4>
              <ul className="list-square ml-5">
                <li>
                  Even though households in Victoria don&apos;t directly use the
                  solar energy they generate, the feed-in tariff reduces their
                  electricity bills. The money earned from exporting electricity
                  offsets the cost of electricity drawn from the grid.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Support for Renewable Energy:
              </h4>
              <ul className="list-square ml-5">
                <li>
                  By exporting solar energy to the grid, households contribute
                  to the overall supply of renewable energy. This helps reduce
                  the reliance on fossil fuels and lowers greenhouse gas
                  emissions.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                VEU Program Incentives:
              </h4>
              <ul className="list-square ml-5">
                <li>
                  The Victorian Energy Upgrades (VEU) program provides
                  additional financial incentives for energy efficiency
                  improvements, including solar panel installation. This makes
                  solar energy more accessible and affordable.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Grid Stability:
              </h4>
              <ul className="list-square ml-5">
                <li>
                  The direct export of solar energy to the grid supports grid
                  stability by providing additional energy supply during peak
                  sunlight hours. This helps reduce the demand on traditional
                  power plants and can prevent blackouts.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Increased Property Value
              </h4>
              <ul className="list-square ml-5">
                <li>
                  Homes with solar panel systems installed can have higher
                  property values due to the appeal of reduced energy costs and
                  sustainable living.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Environmental Impact:
              </h4>
              <ul className="list-square ml-5">
                <li>
                  The VEU program supports the Victorian government&apos;s goal
                  of achieving net-zero emissions by 2050 by promoting the use
                  of renewable energy sources like solar power.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    // rebate: {
    //   header: "Government Eligible Rebates",
    //   img: [{ original: `${solarUrl}/Rebate Segment image.jpg` }],
    //   desc: "In Victoria, eligible customers can take advantage of the state government's solar homes program and claim rebates for their solar installation. This program makes solar energy more accessible and affordable for homeowners, and we're proud to be a part of it. Contact us for more information.",
    // },
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
    quoteImg: `${quoteUrl}/Get Quote Solar System.png`,
  },
  {
    id: 2,
    slug: "hot-water-heat-pump",
    serviceType: true,
    name: "Hot Water Heat Pump",
    shortDesc: "Save 75% of electricity on generating the hot water.",
    link: "/hot-water-heat-pump",
    image: `${waterUrl}/Residential Hot Water System Product + Footer.jpeg`,
    isCategory: false,
    description:
      "A hot water heat pump system is an energy-efficient way to heat water using electricity rather than gas and the VEU program aims to reduce greenhouse gas emissions by making energy efficiency improvements more accessible to households and businesses. Under this program, installing a hot water heat pump can significantly lower your energy consumption, reduce greenhouse gas emissions, and qualify for government rebates, making it a cost-effective and environmentally friendly choice.",
    sizes: [
      {
        size: "Residential",
        houseSize: "residential",
        image: `${waterUrl}/Residential Hot Water System Product + Footer.jpeg`,
      },
    ],
    howItWorks: {
      header: <h2 className="mb-8">How Hot Water Heat Pump Systems Work?</h2>,
      gif: `${gifUrl}/hot water system.gif`,
      desc: (
        <div className="font-body space-y-2">
          <p>
            A hot water heat pump system in Australia works by using heat from
            the surrounding air to heat water. It is an energy-efficient way to
            heat water because it transfers heat instead of generating it
            directly. Here&apos;s how the system works step by step:
          </p>
          <ul className="list-disc space-y-4">
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Air Extraction
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The heat pump system extracts heat from the surrounding air
                  using a fan. Even at relatively low air temperatures, there is
                  still some heat energy that the system can utilize.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Heat Transfer
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The extracted air is passed through an evaporator containing a
                  refrigerant, which absorbs the heat from the air. This
                  refrigerant changes from liquid to gas as it heats up.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Compressor Operation
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The extracted air is passed through an evaporator containing a
                  refrigerant, which absorbs the heat from the air. This
                  refrigerant changes from liquid to gas as it heats up.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Heating Water
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The extracted air is passed through an evaporator containing a
                  refrigerant, which absorbs the heat from the air. This
                  refrigerant changes from liquid to gas as it heats up.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Refrigerant Cycle Repeats
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The refrigerant then flows back to the evaporator to absorb
                  more heat from the surrounding air, and the cycle repeats.
                  This process continues until the water in the tank reaches the
                  desired temperature.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Water Storage and Use
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  The hot water is stored in an insulated tank, ready to be used
                  for showers, washing, and other household purposes.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Energy Efficiency
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  Because a heat pump system extracts heat from the air rather
                  than generating it from electricity or gas, it is highly
                  energy efficient. Typically, for every unit of electricity
                  used, the system can produce three to four units of heat.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    whyUpgrade: {
      header: "Benefits Over Gas Hot Water Systems:",
      img: [{ original: `${waterUrl}/Why upgrading.jpg` }],
      desc: (
        <div className="mt-8">
          <ul className="list-disc space-y-4">
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Energy Efficiency
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  <strong>Hot Water Heat Pumps:</strong> They are highly
                  energy-efficient, using electricity to move heat rather than
                  generate it, and can be up to four times more efficient than
                  traditional electric or gas water heaters.
                </li>
                <li>
                  <strong>Gas Hot Water Systems:</strong> They burn fossil
                  fuels, which is less efficient and contributes to greenhouse
                  gas emissions.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Lower Operating Costs
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  <strong>Hot Water Heat Pumps:</strong> Due to their
                  efficiency, they consume less electricity, leading to lower
                  energy bills, especially when combined with renewable energy
                  sources like solar power.
                </li>
                <li>
                  <strong>Gas Hot Water Systems:</strong> Gas prices can be
                  volatile, and gas systems are generally more expensive to run.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Environmental Impact
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  <strong>Hot Water Heat Pumps:</strong> Due to their
                  efficiency, they consume less electricity, leading to lower
                  energy bills, especially when combined with renewable energy
                  sources like solar power.
                </li>
                <li>
                  <strong>Gas Hot Water Systems:</strong> Gas prices can be
                  volatile, and gas systems are generally more expensive to run.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Eligibility for Rebates
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  <strong>Hot Water Heat Pumps:</strong> Due to their
                  efficiency, they consume less electricity, leading to lower
                  energy bills, especially when combined with renewable energy
                  sources like solar power.
                </li>
                <li>
                  <strong>Gas Hot Water Systems:</strong> Gas prices can be
                  volatile, and gas systems are generally more expensive to run.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Durability and Maintenance
              </h4>
              <ul className="list-circle ml-5">
                <li>
                  <strong>Hot Water Heat Pumps:</strong> They have a long
                  lifespan and require less maintenance than gas systems.
                </li>
                <li>
                  <strong>Gas Hot Water Systems:</strong> They may require more
                  frequent servicing and have a shorter lifespan.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    stats: {
      header: "Statistics Reveal...",
      img: [{ original: `${waterUrl}/statistic hot water.jpg` }],
      desc: (
        <div className="mt-16">
          <p>
            By switching to a hot water heat pump, you can significantly reduce
            energy consumption.
          </p>
          <br />
          <p>
            Households using heat pumps see up to 75% savings compared to
            traditional systems.
          </p>
          <br />
          <p>
            You can check out the source{" "}
            <Link
              href="https://www.example-link.com"
              className="text-primary-green underline"
            >
              here
            </Link>
            .
          </p>
        </div>
      ),
    },
    quoteImg: `${quoteUrl}/Get Quote Water System.png`,
  },
  {
    id: 3,
    slug: "reverse-cycle-air-conditioners",
    serviceType: true,
    name: "Reverse Cycle Air Conditioners",
    link: "/reverse-cycle-air-conditioners",
    image: `${airUrl}/Single Split Conditioning.jpeg`,
    isCategory: true,
    category: AirConditioners,
    description:
      "The Victorian Energy Upgrades (VEU) program offers incentives for households to upgrade to reverse cycle air conditioners that can heat and cool. A split and ducted reverse cycle system works by providing both heating and cooling for homes, making it an efficient and effective way to control indoor temperature. Under the Victorian Energy Upgrades (VEU) program, such systems are promoted for their energy efficiency and environmental benefits, helping residents save on energy bills while reducing greenhouse gas emissions.",
    howItWorks: {
      header: (
        <h2 className="mb-8">
          How the Air Conditioning for both system works?
        </h2>
      ),
      gif: `${gifUrl}/air conditioning.gif`,
      desc: (
        <div className="font-body">
          <ul className="list-disc space-y-4">
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                System Overview
              </h4>
              A reverse cycle air conditioning system, whether split or ducted,
              uses a heat pump to either absorb heat from outside and transfer
              it indoors during winter (heating mode) or absorb heat from inside
              and expel it outside during summer (cooling mode).
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Cooling Mode
              </h4>
              <ul className="list-square ml-5">
                <li>
                  Absorption of Heat: In cooling mode, the system absorbs heat
                  from the indoor air and transfers it outside.
                </li>
                <li>
                  Compressor Operation: The refrigerant circulates through the
                  system, absorbing heat inside the house and releasing it
                  outside via the external unit.
                </li>
                <li>
                  Cool Air Circulation: The system then circulates cool air
                  throughout the house, either through ducts (ducted system) or
                  from the indoor unit (split system).
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Heating Mode
              </h4>
              <ul className="list-square ml-5">
                <li>
                  Absorption of External Heat: In heating mode, the system
                  reverses, absorbing heat from the outside air (even in cold
                  conditions) and bringing it inside.
                </li>
                <li>
                  Heat Pump Operation: The refrigerant carries the absorbed heat
                  inside the house and releases it through the indoor unit or
                  via the ducting system.
                </li>
                <li>
                  Warm Air Circulation: The system circulates warm air
                  throughout the house, keeping the indoor environment
                  comfortable.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    whyUpgrade: {
      header: "Benefits:",
      img: [{ original: `${airUrl}/duct.webp` }],
      desc: (
        <div className="mt-8">
          <ul className="list-disc space-y-4">
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Energy Efficiency and the VEU Program
              </h4>
              <ul className="list-square ml-5">
                <li>
                  High Efficiency: Reverse cycle systems are highly
                  energy-efficient because they transfer heat rather than
                  generating it. They typically use less electricity than
                  traditional heaters or air conditioning systems.
                </li>
                <li>
                  VEU Program Incentives: Under the VEU program, the
                  installation of energy-efficient systems like reverse cycle
                  air conditioners is incentivized through rebates or discounts.
                  The program helps reduce upfront costs and promotes energy
                  savings, lowering household energy bills and minimizing carbon
                  emissions.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Environmental Impact
              </h4>
              <ul className="list-square ml-5">
                <li>
                  Reduced Emissions: The use of reverse cycle systems under the
                  VEU program contributes to a reduction in greenhouse gas
                  emissions by improving energy efficiency.
                </li>
                <li>
                  Sustainable Comfort: By using energy-efficient heating and
                  cooling, residents can enjoy a comfortable home while
                  minimizing their impact on the environment.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Lower Energy Bills
              </h4>
              <ul className="list-square ml-5">
                <li>
                  The energy-efficient operation helps to reduce electricity
                  consumption, leading to lower energy bills.
                </li>
              </ul>
            </li>
            <li>
              <h4 className="font-heading text-xl font-semibold cursor-pointer mb-2">
                Comfort All Year Round
              </h4>
              <ul className="list-square ml-5">
                <li>
                  With the ability to both heat and cool, these systems provide
                  year-round comfort in the home.
                </li>
              </ul>
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
    quoteImg: `${quoteUrl}/Get Quote Air.png`,
  },
  {
    id: 4,
    slug: "free-products",
    serviceType: false,
    name: "Free Products",
    link: "/free-products",
    image: "/images/Home Page/3 Free product Image.png",
    isCategory: true,
    category: FreeProducts,
  },
];

export const AllProducts = [
  ...Products.filter((query) => !query.isCategory),
  ...FreeProducts.filter((query) => !query.isCategory),
  ...ShowerHeads.filter((query) => !query.isCategory),
  ...DoorSeals.filter((query) => !query.isCategory),
];
