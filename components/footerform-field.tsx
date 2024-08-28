import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type FieldItemProps = {
  field: any;
  type: string;
  label: string;
};

const FooterFormFieldComponent: React.FC<FieldItemProps> = ({
  field,
  type,
  label,
}) => {
  return (
    <FormItem
      className={`w-full flex flex-col col-span-1 ${
        type === "textarea" || field.name === "suburb" || type === "checkbox" || type === "radio"
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
            <Textarea className="resize-none" {...field} />
          </FormControl>
        </>
      )}

      {type === "radio" && (
        <>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="Yes" />
                </FormControl>
                <FormLabel className="font-normal">Yes</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value="No" />
                </FormControl>
                <FormLabel className="font-normal">No</FormLabel>
              </FormItem>
            </RadioGroup>
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

export default FooterFormFieldComponent;
