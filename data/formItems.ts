import { FieldProps } from "@/lib/definitions";

export const newFormFields: FieldProps[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
  },
  {
    name: "suburb",
    label: "Suburb",
    type: "text",
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
  },
  {
    name: "above18",
    label: "I am over of 18 years of age",
    type: "checkbox",
  },
  {
    name: "positiveCarbonConsent",
    label:
      "I consent to CUREGREEN telephoning me to provide information about Split system air conditioning, weather seals, shower roses and other products under the VEU programs",
    type: "checkbox",
  },
  {
    name: "consentValidity",
    label:
      "I understand that my consent last for 12 months, but I can withdraw my consent anytime.",
    type: "checkbox",
  },
];

export const consentFormFields: FieldProps[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
  },
  {
    name: "date_and_time",
    label: "Select Date & Time",
    type: "datetime-local",
  },
  {
    name: "above18",
    label: "I am over of 18 years of age",
    type: "radio",
  },
  {
    name: "positiveCarbonConsent",
    label:
      "I consent to CUREGREEN telephoning me to provide information about Split system air conditioning, weather seals, shower roses and other products under the VEU programs",
    type: "radio",
  },
  {
    name: "consentValidity",
    label:
      "I understand that my consent last for 12 months, but I can withdraw my consent anytime.",
    type: "radio",
  },
];
