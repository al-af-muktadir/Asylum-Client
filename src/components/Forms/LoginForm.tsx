"use client";

import { recaptchaVerify } from "@/services/auth";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const LoginForm = () => {
  const [status, setStatus] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(FormData);
  };

  const handleRecaptcha = async (value: string | null) => {
    console.log(value);
    try {
      const res = await recaptchaVerify(value!);
      if (res.success) {
        setStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="relative p-8 w-96 rounded-3xl shadow-xl border border-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#396C2F] to-[#A3C664] blur-lg opacity-20 backdrop-blur-3xl"></div>

        <h2 className="text-3xl font-extrabold text-center text-white z-10 relative mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={FormData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#396C2F] transition-all duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={FormData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#396C2F] transition-all duration-300"
            />
          </div>

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CL_KEY as string}
            onChange={handleRecaptcha}
          ></ReCAPTCHA>
          <button
            disabled={status ? false : true}
            type="submit"
            className="w-full py-3 bg-[#396C2F] hover:bg-[#A3C664] rounded-xl text-white font-semibold transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-white mt-4">
          Don&apos;t have an account?{" "}
          <span className="text-[#A3C664] font-semibold cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
