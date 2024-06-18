"use client";

import { useState } from "react";
import { useRouter, Router } from "next/navigation";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false); // Add this state
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.user) {
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);
      setSuccess(true);
      router.push("/profile");
    } else {
      setLoading(false);
      alert(data.message);
    }
  };

  const handleSocialLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-2 lg:px-8">
      <div className="max-w-xl w-full space-y-6 bg-white p-10 rounded-xl border">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Lets Get You Back In,
        </h2>
        <p className="text-center text-sm text-gray-600">
          In terms of user security, we always comply with the standard user
          security guidelines. Your data will be secured in our hands. You can{" "}
          <a
            href="/profile/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            <u>register</u>
          </a>{" "}
          to your account here if you already have an account before. But, if
          you do not have any account yet, we suggest you to create an account.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"} // Toggle between text and password
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                {passwordShown ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3m0 0a3 3 0 00-3 3m0-6a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0a3 3 0 003-3"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 01-3 3m0-6a3 3 0 013 3m0 0a3 3 0 00-3 3m0-6a3 3 0 00-3 3m0 0a3 3 0 003 3m0 0a3 3 0 003-3"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-6">
          <hr className="w-1/3 border-t border-gray-300" />
          <span className="text-gray-500">Or alternatively,</span>
          <hr className="w-1/3 border-t border-gray-300" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={handleSocialLogin}
            className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaFacebookF className="h-6 w-6" />
            Facebook Sign In
          </button>
          <button
            onClick={handleSocialLogin}
            className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle className="h-6 w-6" />
            Google Sign In
          </button>
        </div>
        {success && (
          <div
            className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              Success! You are now signed in.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
