import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/theme-toggle";

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
