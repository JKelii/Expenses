import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../Login.tsx/LoginForm";

import { RegisterForm } from "../../Register/RegisterForm";

export function LoginMenu() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <Tabs
        defaultValue="account"
        className="p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-r from-zinc-200 to-slate-50"
      >
        <TabsList className=" w-96">
          <TabsTrigger value="account" className="w-1/2 rounded-lg">
            Login
          </TabsTrigger>

          <TabsTrigger value="password" className="w-1/2 rounded-lg ">
            Register
          </TabsTrigger>
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
