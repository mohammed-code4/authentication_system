import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { FieldError } from "@/components/ui/field";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import type { SignupForm } from "@/types/signupForm.type";
import { signupSchema } from "@/schema/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/store/authThunks";
import { toast } from "react-toastify";
import type { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";

const SignUpForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state: RootState) => {
    return state.auth;
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const handleSignUp = (data: SignupForm) => {
    // Check Age
    const ageAsNum = Number(data.age);
    if (ageAsNum < 18) {
      setError("age", {
        message: "Age must be at least 18 years old.",
      });
      return;
    }

    // send data to api
    const payload = { ...data, age: Number(data.age) };

    dispatch<any>(signUpUser(payload));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success(`${success}, Account Created Successfully`);

      reset();
      navigate("/sign-in");
    }
  }, [success, reset, navigate]);

  return (
    <Card size="sm" className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your information to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
            />
            {errors?.name && <FieldError> {errors?.name.message}</FieldError>}
          </div>

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

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              {...register("age")}
              type="number"
              placeholder=" your Age"
            />
            {errors?.age && <FieldError> {errors?.age.message}</FieldError>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              {...register("phone")}
              type="tel"
              placeholder="01*********"
            />
            {errors?.phone && <FieldError> {errors?.phone.message}</FieldError>}
          </div>

          {/* Submit */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{"  "}
          <Link
            to={"/sign-in"}
            type="button"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
