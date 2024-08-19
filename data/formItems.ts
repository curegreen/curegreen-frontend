import { z } from "zod";

export const constantFormFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    validation: z.string().min(2).trim(),
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    validation: z.string().min(2).trim(),
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "john.doe@example.com",
    validation: z.string().email(),
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "1234567890",
    validation: z.string().length(10),
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "123 Main St",
    validation: z.string().min(5),
  },
  {
    name: "suburb",
    label: "Suburb",
    type: "text",
    placeholder: "Suburbia",
    validation: z.string().min(2),
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: "text",
    placeholder: "700001",
    validation: z.string().min(4),
  },
];

export const homePageSpecificFields = [
  {
    name: "serviceType",
    label: "Service Type",
    type: "select",
    options: [
      { value: "residential-solar", label: "Residential Solar" },
      { value: "hot-water-system", label: "Hot Water System" },
      { value: "air-conditioner-system", label: "Air Conditioning System" },
    ],
    validation: z.string(),
  },
  {
    name: "desc",
    label: "How Can We Help?",
    type: "textarea",
    placeholder: "Tell us how we can assist you...",
    validation: z.string().min(10),
  },
];

export const homePageFields = [
  ...constantFormFields,
  ...homePageSpecificFields,
];

export const freeProductPageSpecificFields = [
  {
    name: "desc",
    label: "How Can We Help?",
    type: "textarea",
    placeholder: "Tell us how we can assist you...",
    validation: z.string().min(10),
  },
];

export const freeProductArchivePageFields = [
  ...constantFormFields,
  ...freeProductPageSpecificFields,
];

export const productPageSpecificFields = [
  {
    name: "desc",
    label: "How Can We Help?",
    type: "textarea",
    placeholder: "Please mention the product name and tell us how we can assist you...",
    validation: z.string().min(10),
  },
];

export const productPageFields = [
  ...constantFormFields,
  ...productPageSpecificFields,
];
