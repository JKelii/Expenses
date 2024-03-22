import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { PasswordInput } from "../Login/Login.tsx/PasswordInput";
import Button from "../Button/Button";
import { CompanyButton } from "../Login/Login.tsx/CompanyButton";
import { GlobeIcon } from "lucide-react";
import { userSchemaRegister } from "../Login/Login.tsx/Schema/userValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/Input/Input";
import supabase from "@/lib/supabase";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaRegister),
  });

  const onSubmit = handleSubmit((form) => {
    const { data, error } = supabase.auth.signUp(form);
  });

  return (
    <main className="flex flex-col gap-4 lg:w-full sm:w-[290px] md:w-full">
      <h1 className="font-bold text-center text-purple-900 sm:text-md lg:text-xl ">
        Register to start spending your money wisely!
      </h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <Input
          {...register("name")}
          label="name"
          error={errors.name?.message}
          icon={<PersonIcon width={19} />}
        />
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

        <Button text={"Continue"} />
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
