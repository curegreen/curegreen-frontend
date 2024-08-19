"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import Image, { StaticImageData } from "next/image";

type FormFieldType = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options?: { value: string; label: string }[];
  isReadOnly?: boolean;
  className?: string;
};

type GenericFormProps = {
  formFields: string;
  color?: string;
  bgColor?: string;
  formTitle: string;
  imageOverlayOpacity?: number;
  imageOverlayColor?: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  image: string | StaticImageData;
};

export default function GenericForm({
  formFields,
  color = "#0B0B0B",
  bgColor = "#F5F5F5",
  formTitle,
  imageOverlayOpacity = 0.28,
  imageOverlayColor = "#0B0B0B",
  buttonTextColor = "#F5F5F5",
  buttonBgColor = "#0B0B0B",
  image,
}: GenericFormProps) {
  const parsedFormFields: FormFieldType[] = JSON.parse(formFields);

  const formSchema = z.object(
    parsedFormFields.reduce((acc, field) => {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'textarea':
          acc[field.name] = z.string().nonempty(`${field.label} is required`);
          break;
        case 'number':
          acc[field.name] = z.number().min(0, `${field.label} must be a positive number`);
          break;
        case 'select':
          acc[field.name] = z.string().nonempty(`${field.label} is required`);
          break;
        default:
          acc[field.name] = z.string();
      }
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  type FormInputs = z.infer<typeof formSchema>;

  const formMethods = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: parsedFormFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>),
  });

  const { handleSubmit, control } = formMethods;

  const onSubmit = (data: FormInputs) => {
    console.log("Form Data:", data);
  };

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

  return (
    <div className="flex w-full">
      <Form {...formMethods}>
        <form className="w-full md:w-[60%]" onSubmit={handleSubmit(onSubmit)}>
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
              {parsedFormFields.map((field) => (
                <FormField
                  key={field.name}
                  control={control}
                  name={field.name as keyof FormInputs}
                  render={() => (
                    <FormItem
                      className={`w-full flex flex-col ${
                        field.type === "textarea" || field.name === "address"
                          ? "col-span-2"
                          : "col-span-1"
                      }`}
                    >
                      <FormLabel className="w-full text-base font-extrabold">
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        <Controller
                          name={field.name}
                          control={control}
                          render={({ field: controllerField }) => (
                            field.type === "select" ? (
                              <select
                                {...controllerField}
                                className="border p-2 w-full"
                                style={styles.inputStyles}

                              >
                                {field.options?.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            ) : field.type === "textarea" ? (
                              <textarea
                                {...controllerField}
                                placeholder={field.placeholder}
                                className="w-full border focus:outline-none h-20 p-2"
                                style={styles.inputStyles}
                              />
                            ) : (
                              <input
                                {...controllerField}
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full border focus:outline-none p-2 h-10"
                                style={styles.inputStyles}
                              />
                            )
                          )}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <button
              type="submit"
              className="font-bold w-1/2 mt-4 px-4 py-3 text-white bg-black rounded hover:opacity-90 hover:scale-90 transition-transform"
              style={styles.buttonStyles}
            >
              Submit Details
            </button>
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