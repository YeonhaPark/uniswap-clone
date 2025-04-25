import * as React from "react";
import { Input as BaseInput } from "../ui/input";

import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  maxDecimals?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, maxDecimals = 6, value, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      const regex = new RegExp(`^\\d*(\\.\\d{0,${maxDecimals}})?$`);
      if (inputValue === "" || regex.test(inputValue)) {
        onChange(inputValue);
      }
    };

    return (
      <input
        ref={ref}
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        placeholder="0"
        maxLength={30}
        className={cn(
          "font-basel text-neutral1 placeholder:text-neutral3 my-2 h-[36px] w-full rounded-md border-none bg-transparent text-4xl leading-[36px] break-words focus:outline-none",
          className
        )}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
