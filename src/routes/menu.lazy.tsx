import Menu from "@/components/Menu/Menu";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/menu")({
  component: () => (
    <div>
      <Menu />
    </div>
  ),
});
