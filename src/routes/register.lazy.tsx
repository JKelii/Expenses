import { LoginMenu } from "@/components/Login/LoginMenu/LoginMenu";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  return (
    <div>
      <LoginMenu />
    </div>
  );
}
