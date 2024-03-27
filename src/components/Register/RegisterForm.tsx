import { EnvelopeClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { PasswordInput } from "../Input/PasswordInput";
import Button from "../Button/Button";
import { CompanyButton } from "../Button/CompanyButton";
import { GlobeIcon } from "lucide-react";
import { userSchemaRegister } from "../Login/schema/userValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/Input/Input";
import supabase from "@/lib/supabase";
("../../../");
import { Toaster, showToast } from "../ui/popper";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaRegister),
  });

  const onSubmit = handleSubmit(async (form) => {
    const { error, data } = await supabase.auth.signUp(form);
    if (data.user) {
      showToast("success", "Account created! Now confirm your e-mail.");
    }
    if (error) {
      showToast("error", error.message);
    }
    console.log(error?.message, data);
  });

  return (
    <main className="flex flex-col gap-4 lg:w-11/12 sm:w-[270px] md:w-full ">
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
        <Toaster />
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
