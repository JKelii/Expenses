import { ReactNode } from "react";

type CompanyProps = {
  text: string;
  icon: ReactNode;
};

export function CompanyButton({ icon, text }: CompanyProps) {
  return (
    <button className="">
      <div className="flex flex-row items-center justify-center h-10 gap-2 duration-150 border-2 border-purple-800 rounded-lg w-44 hover:border-purple-600 sm:w-32 lg:w-44">
        {icon}
        <p>{text}</p>
      </div>
    </button>
  );
}
