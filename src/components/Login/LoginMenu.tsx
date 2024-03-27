import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { LoginForm } from "./LoginForm";

import { RegisterForm } from "@/components/Register/RegisterForm";

export function LoginMenu() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <Tabs
        defaultValue="account"
        className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-r from-zinc-200 to-slate-50"
      >
        <TabsList className=" w-96">
          <a href="/register">Register</a>
        </TabsList>

        <TabsContent
          value="account"
          className="flex flex-col items-center gap-8 p-0 rounded-lg"
        >
          <LoginForm />
        </TabsContent>
        <TabsContent
          value="password"
          className="flex flex-col items-center p-0 w-96"
        >
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
