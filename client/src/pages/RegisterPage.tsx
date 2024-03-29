import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import useAddUser from "../hooks/useAddUser";
import registerSchema from "../schemas/registerSchema";

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const addUser = useAddUser();

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Sign up</h1>
        <form
          className="max-w-md mx-auto"
          onSubmit={handleSubmit((data) => {
            try {
              addUser.mutate(data);
              alert("Registration successful. Now you can log in.");
              reset();
            } catch (e) {
              alert("Registration failed. Please try again later.");
            }
          })}
        >
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="name"
          />
          {errors.name && (
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
              {errors.name.message}
            </p>
          )}
          <input
            {...register("email")}
            id="email"
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
            id="password"
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
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
