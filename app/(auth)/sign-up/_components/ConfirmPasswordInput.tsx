import { Control, Controller } from "react-hook-form";
import { z } from "zod";
import { signUpSchema } from "@/lib/auth-schema";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import InputHide from "../../_components/input/hide-input";

type ConfirmPasswordInputProps = {
  control: Control<z.infer<typeof signUpSchema>>;
};

export default function ConfirmPasswordInput({ control }: ConfirmPasswordInputProps) {
  return (
    <Controller
      control={control}
      name="confirmPassword"
      render={({ field, fieldState: { error, isTouched, isDirty } }) => {
        const hasValue = field.value && field.value.trim() !== "";

        const variant = !hasValue
          ? "default" // Keep default when input is empty
          : error
          ? "error" // Red border when schema validation fails
          : isTouched && isDirty
          ? "success" // Green border when validation passes
          : "default";

        return (
          <FormItem>
            <div className="flex items-center justify-between max-w-2xl">
              <FormLabel>Confirm Password</FormLabel>
            </div>
            <FormControl>
              <InputHide 
                field={field} 
                variant={variant} // Apply variant dynamically
              />
            </FormControl>
            <FormMessage>{error?.message}</FormMessage>
          </FormItem>
        );
      }}
    />
  );
}