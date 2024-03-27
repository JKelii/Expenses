import {
  EnvelopeClosedIcon,
  GlobeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { CompanyButton } from "../Button/CompanyButton";
import { PasswordInput } from "../Input/PasswordInput";
import { useForm } from "react-hook-form";
import ButtonComponent from "../Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaLogin } from "./schema/userValidation";
import { Input } from "@/components/Input/Input";

import supabase from "@/lib/supabase";
import { showToast } from "../ui/popper";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaLogin),
  });

  const onSubmit = handleSubmit(async (form) => {
    const { error, data } = await supabase.auth.signInWithPassword(form);
    if (data.user) {
      showToast("success", "You're logged into account.");
    }
    if (error) {
      showToast("error", error.message);
    }
    console.log(error?.message, data);
  });

  return (
    <main className="flex flex-col gap-4 lg:w-full">
      <h1 className="font-bold text-center text-purple-900 sm:text-md lg:text-xl ">
        Welcome back to the expenses App!
      </h1>
      <h2 className="text-center text-gray-400 sm:text-sm lg:text-lg">
        Spend Your Money Wisely
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          icon={<EnvelopeClosedIcon width={19} />}
          {...register("email")}
          label="email"
          error={errors.email?.message}
        />

        <PasswordInput
          {...register("password")}
          label="password"
          error={errors.password?.message}
        />

        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-1">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="text-sm">
              Remember me
            </label>
          </div>
          <span className="text-sm underline">
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <ButtonComponent text={"Login"} />
      </form>
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="w-full h-[2px] bg-gray-200"></div>
        <p className="text-lg">or</p>
        <div className="w-full h-[2px] bg-gray-200"></div>
      </div>
      <div className="flex flex-row items-center justify-center gap-6">
        <CompanyButton text={"Google"} icon={<GlobeIcon />} />
        <CompanyButton text={"Facebook"} icon={<PersonIcon />} />
      </div>
    </main>
  );
}
