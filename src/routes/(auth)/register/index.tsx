import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";

import { RegisterComponent } from "@/modules/auth/register/register-component";
import { useAuthStore } from "@/modules/auth/stores/auth-store";

export const Route = createFileRoute("/(auth)/register/")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();

  const { user } = useAuthStore();

  if (user !== null) {
    navigate({ to: "/" });
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 bg-[radial-gradient(#333_1px,#00000d_1px)] bg-[size:20px_20px]">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium text-primary-foreground dark:text-white"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Go home
        </Link>

        {/* Register Form Component */}
        <RegisterComponent />
      </div>
    </div>
  );
}
