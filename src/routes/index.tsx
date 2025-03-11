import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutComponent } from "@/modules/auth/logout/logout-component";
import { useAuthStore } from "@/modules/auth/stores/auth-store";
import { FeaturesSection } from "@/modules/home/ui/sections/features-section";
import { HeroSection } from "@/modules/home/ui/sections/hero-section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { user } = useAuthStore();

  return (
    <div className="text-center">
      <ThemeToggle />
      {user?.fullName}
      {user?.fullName && <LogoutComponent />}
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
