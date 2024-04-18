import { LoginMenu } from "@/components/Login/LoginMenu";
import { Switch } from "@/components/ui/switch";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <div className="flex justify-end m-4">
        <Switch onClick={handleClick} />
      </div>
      <LoginMenu />
    </div>
  );
}
