"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "bg-purple-800",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export const showToast = (status: "success" | "error", message: string) => {
  return toast(
    <>
      {status === "success" && <CheckIcon />}
      {status === "error" && <Cross1Icon />}
      {message}
    </>
  );
};

export { Toaster };
