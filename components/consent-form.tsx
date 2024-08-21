"use client";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import FormFieldComponent from "./form-field";
import Image, { StaticImageData } from "next/image";
import { newFormFields } from "@/data/formItems";
const defaultImage =
  "/images/Get Quote- Contact Us Images/Get Quote Free products.png";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string({ message: "Phone Number is Required" }).length(10),
  suburb: z.string().min(2),
  date_and_time: z.string(),
  note: z.string(),
  above18: z.boolean().refine((val) => val === true, {
    message: "You must be above 18 years old.",
  }),
  positiveCarbonConsent: z.boolean().refine((val) => val === true, {
    message: "You must check this box.",
  }),
  consentValidity: z.boolean().refine((val) => val === true, {
    message: "You must check this box.",
  }),
});

type FormData = z.infer<typeof formSchema>;

type GenericFormProps = {
  color?: string;
  bgColor?: string;
  formTitle: string;
  imageOverlayOpacity?: number;
  imageOverlayColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  image?: string | StaticImageData;
};

export default function ConsentForm({
  color = "#0B0B0B",
  bgColor = "#F5F5F5",
  formTitle,
  imageOverlayOpacity = 0.28,
  imageOverlayColor = "#0B0B0B",
  buttonTextColor = "#F5F5F5",
  buttonBgColor = "#0B0B0B",
  image = defaultImage,
}: GenericFormProps) {

  const formRef = useRef<HTMLFormElement>(null);

  const styles = {
    formStyles: {
      color,
      backgroundColor: bgColor,
    },
    imageStyles: {
      backgroundColor: imageOverlayColor,
      opacity: imageOverlayOpacity,
    },
    buttonStyles: {
      color: buttonTextColor,
      backgroundColor: buttonBgColor,
    },
    inputStyles: {
      borderColor: color,
    },
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      suburb: "",
      date_and_time: "",
      note: "",
      above18: true,
      positiveCarbonConsent: true,
      consentValidity: true,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = form;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_fbudjkn",
          "template_wzg0pgc",
          formRef.current,
          "Ut9VhVJ4vbcyqTs6e"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Success");
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Failed");
          }
        );
    }
  };

  return (
    <div className="flex">
      <Form {...form}>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[60%]">
          <div
            className={`py-4 px-10 h-full flex flex-col gap-2 items-start md:py-20`}
            style={styles.formStyles}
          >
            <h2 className="w-full text-3xl font-extrabold mb-4 text-left">
              {formTitle}
            </h2>
            <p className="mb-4">
              Fill out the form below and our sales representative will call you
              to confirm your installation spot.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {newFormFields.map(({ name, label, type, placeholder }) => (
                <FormField
                  key={name}
                  control={control}
                  name={name as keyof FormData}
                  render={({ field }) => (
                    <FormFieldComponent
                      field={field}
                      type={type}
                      label={label}
                      placeholder={placeholder}
                    />
                  )}
                />
              ))}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="font-bold w-1/2 mt-4 px-4 py-3 text-white bg-black rounded hover:opacity-90 hover:scale-90 transition-transform"
            >
              {isSubmitting ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : isSubmitSuccessful ? (
                "Submitted"
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative flex-1 overflow-hidden hidden md:block">
        <Image
          src={image}
          alt="Form background"
          className="w-full h-full object-cover"
          fill
        />
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
          style={styles.imageStyles}
        />
      </div>
    </div>
  );
}
