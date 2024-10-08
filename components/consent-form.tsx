"use client";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { consentFormFields } from "@/data/formItems";
import FooterFormFieldComponent from "./footerform-field";
import { AllProducts } from "@/data/products";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().length(10, { message: "Phone Number is Required" }),
  date_and_time: z.string(),
  above18: z.enum(["Yes", "No"], {
    required_error: "You must select whether you are above 18 years old",
  }),

  positiveCarbonConsent: z.enum(["Yes", "No"], {
    required_error: "You must give your consent for us to contact you",
  }),

  consentValidity: z.enum(["Yes", "No"], {
    required_error: "You must acknowledge the consent validity",
  }),
  selectProducts: z
    .array(z.string())
    .nonempty({ message: "Select at least one product" }),
});

type FormData = z.infer<typeof formSchema>;

const ConsentForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      date_and_time: "",
      above18: "Yes",
      positiveCarbonConsent: "Yes",
      consentValidity: "Yes",
      selectProducts: [],
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
    reset,
  } = form;

  const onSubmit = (data: FormData) => {
    // Convert boolean values to strings ("Yes" or "No")
    const formattedData = {
      formName: "Consent Form",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      date_and_time: data.date_and_time,
      above18: data.above18,
      positiveCarbonConsent: data.positiveCarbonConsent,
      consentValidity: data.consentValidity,
      selectProducts: data.selectProducts.join(", "), // Convert array to string
    };

    toast({ description: "Sending your message..." });
    console.log(formattedData);

    emailjs
      .send(
        "service_fbudjkn",
        "template_gsefjdr",
        formattedData,
        "Ut9VhVJ4vbcyqTs6e"
      )
      .then(
        (result) => {
          toast({
            description: "Your message has been sent.",
          });
          reset();
        },
        (error) => {
          toast({
            description: "Uh oh! Something went wrong, try again.",
          });
        }
      );
  };

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className={`py-4 px-5 h-full flex flex-col gap-2 items-start`}>
          <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8">
            {consentFormFields.map(({ name, label, type }) => (
              <FormField
                key={name}
                control={control}
                name={name as keyof FormData}
                render={({ field }) => (
                  <FooterFormFieldComponent
                    field={field}
                    type={type}
                    label={label}
                  />
                )}
              />
            ))}

            <h6 className="font-semibold col-span-2">Select Products: </h6>
            {AllProducts.map((product) => (
              <FormField
                key={product.slug}
                control={control}
                name="selectProducts"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-1 leading-none">
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(product.name)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, product.name]); // Add product to array
                            } else {
                              field.onChange(
                                field.value.filter(
                                  (item: string) => item !== product.name
                                )
                              );
                            }
                          }}
                        />
                      </FormControl>
                      <FormLabel>{product.name}</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="font-bold w-full mt-4 px-4 py-3 text-white bg-primary-green rounded hover:bg-secondary-lightGreen hover:scale-90 transition-transform"
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
  );
};

export default ConsentForm;
