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
      if (error?.message === "You are not authorized, please login.") {
        clearUser();
        navigate({ to: "/" });
        return { message: "Logged out" };
      }

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
    logoutMutation.mutate();
  };

  return (
    <div className={cn("flex flex-col gap-6 w-32", className)} {...props}>
      <Button onClick={handleLogout} loading={logoutMutation.isPending}>
        {logoutMutation.isPending ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}
