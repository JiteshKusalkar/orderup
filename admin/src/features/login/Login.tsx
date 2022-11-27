import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useAuth from "../../store/auth";
import useLoginForm, { LoginFormData } from "./useLoginForm";

export default function Login() {
  const navigate = useNavigate();
  const setUser = useAuth((state) => state.setUser);
  const user = useAuth((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    setUser({
      id: "id",
      email: data.email,
      name: { firstName: "Admin", lastName: "Admin" },
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign in
        </h1>
        <form
          className="mt-6"
          autoComplete="new-password"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Email"
            type="email"
            id="email"
            required
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            required
            error={errors.password?.message}
            {...register("password")}
          />
          <div className="mt-6">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
