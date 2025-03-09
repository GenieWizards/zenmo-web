import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useAuthStore } from "../stores/auth-store";
import { logoutUserApi } from "./logout-http";

export function LogoutComponent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  const { clearUser } = useAuthStore();

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const [result, error] = await logoutUserApi();

      if (error !== null) {
        throw new Error(error.message);
      }

      return result;
    },
    onSuccess: (data) => {
      toast.success(data.message);

      clearUser();

      // Redirect to Home
      navigate({ to: "/" });
    },
    onError: (error) => {
      const errorMessage
        = error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message;
      toast.error(errorMessage);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutateAsync();
  };

  return (
    <div className={cn("flex flex-col gap-6 w-20", className)} {...props}>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
