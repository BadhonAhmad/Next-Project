"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Corrected import statement

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {
    // Handle login
  };

  return (
    <div className="relative flex flex-col items-center justify-top min-h-screen py-7 px-9 bg-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/farmer_device.jpg')" }} // Updated path
      ></div>
      <div className=" z-10 w-full max-w-sm p-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="text-black absolute top-4 left-4 text-white text-lg font-bold">
          Agri Bazaar
        </div>
        <h1 className="text-black text-2xl font-bold mb-4 text-center">
          Login
        </h1>

        <div className="w-full space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
          </div>

          <button
            onClick={onLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 transition duration-200"
          >
            Login here!
          </button>

          <div className="text-center">
            <Link href="/signup" className="text-blue-500 hover:underline">
              Visit Signup Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
