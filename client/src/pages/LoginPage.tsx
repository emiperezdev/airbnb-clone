import { Link } from "react-router-dom";
import { z } from "zod";
import loginSchema from "../schemas/loginSchema";
import useLogin from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const login = useLogin();

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form
          className="max-w-md mx-auto"
          onSubmit={handleSubmit((data) => {
            try {
              login.mutate(data);
              reset();
            } catch (e) {
              alert("Login failed. Please try again later.");
            }
          })}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 flex mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              {errors.email.message}
            </p>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500 flex mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              {errors.password.message}
            </p>
          )}

          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
