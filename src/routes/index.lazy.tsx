import { LoginMenu } from "@/components/Login/LoginMenu";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full h-full p-2 ">
      <LoginMenu />
    </div>
  );
}
