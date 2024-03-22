import { Input } from "@/components/Input/Input";
import {
  EyeNoneIcon,
  EyeOpenIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  { label: string; error: string | undefined } & ReturnType<
    UseFormRegister<Record<string, unknown>>
  >
>((inputProps, ref) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Input
          icon={<LockClosedIcon width={19} />}
          {...inputProps}
          ref={ref}
          type={isPassword ? "password" : "text"}
        />

        <button
          className="absolute lg:ml-[22rem] mt-[2.4rem] sm:ml-[16rem]"
          onClick={() => setIsPassword((prevStat) => !prevStat)}
        >
          {" "}
          {isPassword ? <EyeOpenIcon /> : <EyeNoneIcon />}
        </button>
      </div>
    </>
  );
});
