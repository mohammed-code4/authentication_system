import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FieldError } from "@/components/ui/field";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { signInUser } from "@/store/authThunks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { useForm } from "react-hook-form";
import type { SigninForm } from "@/types/signinForm.type";
import { signinSchema } from "@/schema/SigninSchema";

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state: RootState) => {
    return state.auth;
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });

  const handleSignUp = (data: SigninForm) => {
    dispatch<any>(signInUser(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success(`${success}, Sign In Successfuly`);

      reset();
      navigate("/");
    }
  }, [success, reset, navigate]);

  return (
    <Card size="sm" className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign In Your Acuount</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Your Email"
            />
            {errors?.email && <FieldError> {errors?.email.message}</FieldError>}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              {...register("password")}
              type="password"
              placeholder="••••••••"
            />
            {errors?.password && (
              <FieldError> {errors?.password.message}</FieldError>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
