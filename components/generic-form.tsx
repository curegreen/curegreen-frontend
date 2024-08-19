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
  FormDescription,
  FormMessage,
} from "./ui/form"; // Adjust the import path as necessary
import Image, { StaticImageData } from "next/image";

type FormFieldType = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation: z.ZodTypeAny;
  options?: { value: string; label: string }[];
  isReadOnly?: boolean;
  className?: string;
};

type GenericFormProps = {
  formFields: string; // Serialized form fields
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

  // Combine all validations into one schema
  const formSchema = z.object(
    parsedFormFields.reduce((acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  type FormInputs = z.infer<typeof formSchema>;

  const formMethods = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: parsedFormFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, any>),
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
    buttonstyles: {
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
            className={`py-4 px-10 h-full flex flex-col gap-2 items-start md:py-20 ${color} ${bgColor}`}
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
                  name={field.name as keyof FormInputs}
                  control={control}
                  render={({ field: fieldController }) => (
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
                        {field.type === "select" ? (
                          <select
                            {...fieldController}
                            className="border p-2"
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
                            placeholder={field.placeholder}
                            {...fieldController}
                            className="w-full border focus:outline-none h-20 p-2"
                            style={styles.inputStyles}
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            {...fieldController}
                            className="w-full  border focus:outline-none p-2 h-10"
                            style={styles.inputStyles}
                          />
                        )}
                      </FormControl>
                      {/* <FormDescription>{`Enter your ${field.label.toLowerCase()}`}</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <button
              type="submit"
              className="font-bold w-1/2 mt-4 px-4 py-3 text-white bg-black rounded hover:opacity-90 hover:scale-90 transition-transform"
              style={styles.buttonstyles}
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
    //     <div className="flex w-full">
    //   <Form {...formMethods}>
    //     <form
    //       className="w-full md:w-[60%]"
    //       onSubmit={handleSubmit(onSubmit)}
    //     >
    //       <div className="p-4 h-full flex flex-col gap-2 items-center" style={styles.formStyles}>
    //         <h2 className="w-full text-3xl font-extrabold mb-4 text-left">{formTitle}</h2>
    //         <p className="mb-4">
    //           Fill out the form below and our sales representative will call you to confirm your installation spot.
    //         </p>

    //         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    // 			{parsedFormFields.map((field) => (
    // 				field.type === "textarea" || field.name === "address" ? (
    // 				<FormItem key={field.name} className="col-span-1">
    // 					<FormLabel className="text-base font-extrabold">{field.label}</FormLabel>
    // 					<FormControl>
    // 					<textarea
    // 						placeholder={field.placeholder}
    // 						// {...fieldController}
    // 						className="w-full border focus:outline-none h-20 p-2"
    // 						style={styles.inputStyles}
    // 					/>
    // 					</FormControl>
    // 					<FormMessage />
    // 				</FormItem>
    // 				) : (
    // 				<FormItem key={field.name} className="col-span-1">
    // 					<FormLabel className="text-base font-extrabold">{field.label}</FormLabel>
    // 					<FormControl>
    // 					{field.type === "select" ? (
    // 						<select
    // 							// {...fieldController}
    // 							// placeholder={field.placeholder}
    // 							title={field.name}
    // 							style={styles.inputStyles}
    // 							className="w-full border rounded p-2"
    // 						>
    // 							{field.options?.map((option) => (
    // 								<option key={option.value} value={option.value}>
    // 								{option.label}
    // 								</option>
    // 							))}
    // 						</select>
    // 					) : (
    // 						<input
    // 							type={field.type}
    // 							placeholder={field.placeholder}
    // 							// {...fieldController}
    // 							className={`w-full ${field.name === "address" ? "md:w-full" : "md:w-1/2"} border rounded p-2`}
    // 							style={styles.inputStyles}
    // 						/>
    // 					)}
    // 					</FormControl>
    // 					<FormMessage />
    // 				</FormItem>
    // 				)
    // 			))}
    // 			</div>

    // 			<button
    // 			type="submit"
    // 			className="font-bold w-full md:w-2/5 mt-4 px-4 py-2 text-white rounded"
    // 			style={styles.buttonstyles}
    // 			>
    // 			Submit Details
    // 			</button>
    // 		</div>
    // 		</form>
    // 	</Form>

    // 	<div className="relative flex-1 overflow-hidden hidden md:block">
    // 		<Image
    // 		src={image}
    // 		alt="Form background"
    // 		className="w-full h-full object-cover"
    // 		/>
    // 		<div
    // 		className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
    // 		style={styles.imageStyles}
    // 		/>
    // 	</div>
    // 	</div>
  );
}
