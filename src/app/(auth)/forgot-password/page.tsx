"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export function ForgotPassword() {
  const router = useRouter();
  const [value, setValue] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({ resolver: zodResolver(ForgotPasswordSchema) });

  //we should here call like API or something...
    const onSubmit: SubmitHandler<ForgotPasswordSchemaType> = (data) => {
        console.log(data.email)
    }
  return (
    <div className="w-full h-screen flex">
      <div className="sm:block hidden w-1/2 bg-primary1"></div>
      <div className="sm:w-1/2 w-full flex flex-col bg-bgColor  item-center justify-center items-center">
        <div className="sm:w-[340px] w-[280px] xl:max-w-[500px] xl:max-h-[600px] shadow-xl p-8 shadow-primary1 rounded-md">
          <Link href="/" className="w-full  text-[12px] font-extrabold">
            ⬅️ Go Home
          </Link>
          {/* forgot password form */}
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="flex flex-col justify-center items-center pb-6">
              <div className="sm:text-[28px] text-[20px] font-bold mt-8">
                Forgot Password{" "}
              </div>
              <div className="sm:text-xs text-[10px] font-extralight mb-6 text-center">
                Don’t worry, we’ll help you with a reset process{" "}
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
              <button
                className="w-full rounded-[8px] relative overflow-hidden  bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300  active:scale-95 "
                type="submit"
              >
                submit
              </button>
              <Link
                href="/login"
                className="w-full flex justify-center items-center text-[12px] font-bold"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
