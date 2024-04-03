import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { LoginForm } from "../Login/LoginForm";

import { RegisterForm } from "./RegisterForm";

export const RegisterMenu = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <Tabs
        defaultValue="account"
        className="flex flex-col justify-center p-4 border-2 border-gray-200 rounded-lg bg-gradient-to-r from-zinc-200 to-slate-50"
      >
        <TabsList className="flex-col w-full fle">
          <a href="/">Login</a>
        </TabsList>

        <TabsContent
          value="account"
          className="flex flex-col items-center gap-8 p-0 rounded-lg"
        >
          <RegisterForm />
        </TabsContent>
        <TabsContent
          value="password"
          className="flex flex-col items-center p-0 w-96"
        >
          <LoginForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
