import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";

type FieldItemProps = {
  field: any;
  type: string;
  label: string;
  placeholder?: string;
};

const FormFieldComponent: React.FC<FieldItemProps> = ({
  field,
  type,
  label,
  placeholder,
}) => {
  return (
    <FormItem
      className={`w-full flex flex-col col-span-1 ${
        type === "textarea" || field.name === "suburb" || type === "checkbox"
          ? "md:col-span-2"
          : "md:col-span-1"
      }`}
    >
      {type === "text" && (
        <>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type="text" {...field} />
          </FormControl>
        </>
      )}
      {type === "datetime-local" && (
        <>
          <FormLabel>{label}</FormLabel>
          <input type={type} {...field} />
        </>
      )}

      {type === "textarea" && (
        <>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className="resize-none"
              {...field}
            />
          </FormControl>
        </>
      )}

      {type === "checkbox" && (
        <>
          <div className="flex items-center space-x-1 leading-none">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
        </>
      )}
      <FormMessage />
    </FormItem>
  );
};

export default FormFieldComponent;
