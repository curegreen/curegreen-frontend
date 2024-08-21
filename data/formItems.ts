import { FieldProps } from "@/lib/definitions";
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
    placeholder:
      "Please mention the product name and tell us how we can assist you...",
    validation: z.string().min(10),
  },
];

export const productPageFields = [
  ...constantFormFields,
  ...productPageSpecificFields,
];

export const newFormFields: FieldProps[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "john.doe@example.com",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "1234567890",
  },
  {
    name: "suburb",
    label: "Suburb",
    type: "text",
    placeholder: "Suburbia",
  },
  {
    name: "date_and_time",
    label: "Select Date & Time",
    type: "datetime-local",
  },
  {
    name: "note",
    label: "Note",
    type: "textarea",
    placeholder: "I would like to get a quote",
  },
  {
    name: "above18",
    label: "I am over of 18 years of age",
    type: "checkbox",
  },
  {
    name: "positiveCarbonConsent",
    label:
      "I consent to CUREGREEN telephoning me to provide information about Split System Air Conditioning, Solar Power System and other products under the VEU programs",
    type: "checkbox",
  },
  {
    name: "consentValidity",
    label:
      "I understand that my consent last for three months. But I can withdraw my consent anytime.",
    type: "checkbox",
  },
];