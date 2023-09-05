import { useMutation } from "@tanstack/react-query";
import { signUp as singUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account created successfully! Please verify the new account from the user's email address."
      );
    },
  });
  return { signup, isLoading };
};
