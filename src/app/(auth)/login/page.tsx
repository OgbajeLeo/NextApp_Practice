"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addUser, deleteUser } from "@/redux/slices/userSlice"
import { login } from "@/redux/slices/authSlice";


const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state:any)=>state.users)
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => setShowPassword(!showPassword); 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = (
    data
  ) => {
    // Check if the user exists in local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === data.email && u.password === data.password);
  
    if (user) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      dispatch(login(user));
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };




  return (
    <div className="w-full h-screen flex">
      <div className="sm:block hidden w-1/2 bg-primary1"></div>
      <div className="sm:w-1/2 w-full flex flex-col bg-bgColor item-center justify-center items-center">
        <div className="sm:w-[340px] w-[280px] xl:max-w-[500px] xl:max-h-[600px] shadow-xl p-8 shadow-primary1 rounded-md">
          <Link href="/" className="w-full  text-[12px] font-extrabold">
            ⬅️ Go Home
          </Link>
          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="flex flex-col justify-center items-center pb-6">
              <div className="sm:text-[28px] text-[20px] font-bold mt-8">
                Welcome Back !
              </div>
              <div className="sm:text-xs text-[10px] font-extralight mb-6">
                Kindly login below{" "}
              </div>
            </div>
            <div className="space-y-4">
              <section>
                <input
                  className="w-full rounded-[8px] px-3 py-2.5 bg-gray-200 border border-primary1 text-primary1 text-[12px]"
                  placeholder="Enter Email Address"
                  {...register("email")}
                />
                <div className="text-red-600 sm:text-[12px] text-[10px]">
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              </section>

              <section>
                <div className="relative">
                  <input
                    className="w-full rounded-[8px] px-3 py-2.5 bg-gray-200 border border-primary1 text-primary1 text-[12px]"
                    placeholder="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <div className="text-red-600 sm:text-[12px] text-[10px]">
                    {" "}
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                  <button
                    type="button"
                    className={
                      errors.password
                        ? "!bottom-3 absolute sm:inset-y-0 right-2"
                        : "absolute sm:inset-y-0 top-2.5 right-0 px-3 flex items-center focus:outline-none"
                    }
                    onClick={togglePasswordVisibility}
                  >
                    {!showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </section>

              <Link
                href="/forgot-password"
                className="w-full flex justify-end items-center text-[12px] font-bold"
              >
                Forgot Password ?
              </Link>

              <button
                className="w-full rounded-[8px] relative overflow-hidden  bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300  active:scale-95 "
                type="submit"
              >
                submit
              </button>

              <div className="w-full flex justify-center items-center text-[12px]">
                <span>Don't have an account ? </span>
                &emsp;{" "}
                <Link href="/register" className=" font-bold">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
