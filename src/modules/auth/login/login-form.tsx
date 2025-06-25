import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import type { TLogin } from "../auth-schema";

import { loginSchema } from "../auth-schema";
import { useAuthStore } from "../stores/auth-store";
import { loginUserApi } from "./login-http";

export function LoginForm() {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (login: TLogin) => {
      const [result, error] = await loginUserApi(login);

      if (error !== null) {
        throw new Error(error.message);
      }

      return result;
    },
    onSuccess: (data) => {
      toast.success(data.message);

      setUser(data.data);

      // Redirect to Home?
      navigate({ to: "/" });
    },
    onError: (error) => {
      const errorMessage
        = error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message;
      toast.error(errorMessage);
    },
    retry: 1,
  });

  function onSubmit(values: TLogin) {
    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button loading={loginMutation.isPending} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
