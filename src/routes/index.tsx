import { ThemeToggle } from "@/components/theme-toggle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <ThemeToggle />
    </div>
  );
}
