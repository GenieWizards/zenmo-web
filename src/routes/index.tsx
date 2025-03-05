import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/theme-toggle";
import { useAuthStore } from "@/modules/auth/stores/auth-store";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { user } = useAuthStore();

  return (
    <div className="text-center">
      <ThemeToggle />
      {user?.fullName}
    </div>
  );
}
