import { productDetails, products } from "@/lib/definitions";

export const Products: products[] = [
  {
    id: 1,
    name: "Residential Solar",
    shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/residential-solar",
    image: "/images/dummyPic.jpeg",
  },
  {
    id: 2,
    name: "Hot Water System",
    shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/hot-water-system",
    image: "/images/dummyPic.jpeg",
  },
  {
    id: 3,
    name: "Split Air Conditioner",
    shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/split-air-conditioner",
    image: "/images/dummyPic.jpeg",
  },
  {
    id: 4,
    name: "Free Products",
    shortDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/free-products",
    image: "/images/dummyPic.jpeg",
  },
];

export const FreeProducts: products[] = [
  {
      id: 1,
      name: "Cooling Vent Covers",
      rating: 3.5,
      image: "/images/dummyPic.jpeg",
      link: "/free-products/cooling-vent-covers",
      pdfLink: "/cooling-vent-covers.pdf"
  },
  {
      id: 2,
      name: "Shower Heads",
      rating: 3.5,
      image: "/images/dummyPic.jpeg",
      link: "/free-products/shower-heads",
      pdfLink: "/shower-heads.pdf",
  },
  {
      id: 3,
      name: "Door Seals (Bottom & Frame)",
      rating: 3.5,
      image: "/images/dummyPic.jpeg",
      link: "/free-products/door-seals",
      pdfLink: "/door-seals.pdf",
  },
  {
      id: 4,
      name: "In-Home Display Service",
      rating: 3.5,
      image: "/images/dummyPic.jpeg",
      link: "/free-products/in-home-display-service",
      pdfLink: "/in-home-display-service.pdf",
  },
]

export const ProductDetails: productDetails[] = [
  {
    id: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sizes: [
      {
        size: "Small",
        houseSize: "Small to medium",
        inverter: "5 kW",
        system: "6.6 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/small.pdf",
      },
      {
        size: "Medium",
        houseSize: "Large",
        inverter: "8 kW",
        system: "10 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/medium.pdf",
      },
      {
        size: "Large",
        houseSize: "Farm",
        inverter: "10-15 kW",
        system: "13-20 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/large.pdf",
      },
    ],
    howItWorks: ["/images/dummyPic.jpeg", "How it works"],
    rebate: ["/images/dummyPic.jpeg", "Rebate"],
  },
  {
    id: 2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sizes: [
      {
        size: "Small",
        houseSize: "Small to medium",
        inverter: "5 kW",
        system: "6.6 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/small.pdf",
      },
      {
        size: "Medium",
        houseSize: "Large",
        inverter: "8 kW",
        system: "10 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/medium.pdf",
      },
      {
        size: "Large",
        houseSize: "Farm",
        inverter: "10-15 kW",
        system: "13-20 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/large.pdf",
      },
    ],
    howItWorks: ["/images/dummyPic.jpeg", "How it works"],
    whyUpgrade: ["/images/dummyPic.jpeg", "Why upgrade"],
  },
  {
    id: 3,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sizes: [
      {
        size: "Small",
        houseSize: "Small to medium",
        inverter: "5 kW",
        system: "6.6 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/small.pdf",
      },
      {
        size: "Medium",
        houseSize: "Large",
        inverter: "8 kW",
        system: "10 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/medium.pdf",
      },
      {
        size: "Large",
        houseSize: "Farm",
        inverter: "10-15 kW",
        system: "13-20 kW",
        image: "/images/dummyPic.jpeg",
        pdfLink: "/large.pdf",
      },
    ],
    whyUpgrade: ["/images/dummyPic.jpeg", "Why upgrade"],
  },
  {
    id: 4,
    freeProducts:FreeProducts,
  }
];
