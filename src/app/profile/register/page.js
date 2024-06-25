"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { auth, googleProvider } from "@/api/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import CustomToast from "@/components/CustomToast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user.uid);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push("/profile/account");
      }, 3000);
    } catch (error) {
      console.error("Error during registration:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google user signed in:", user);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.push("/profile/account");
      }, 3000);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      setError(error.message);
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
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-6 bg-white p-10 rounded-xl border">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Lets Register,
        </h2>
        <p className="text-center text-sm text-gray-600">
          In terms of user security, we always comply with the standard user
          security guidelines. Your data will be secured in our hands. You can{" "}
          <a
            href="/profile/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            <u>sign-in</u>
          </a>{" "}
          to your account here if you already have an account before. But, if
          you do not have any account yet, we suggest you create an account.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {email && (
            <div className="mt-1 text-start text-sm text-gray-600">
              Username: {email.split('@')[0]}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <hr className="w-1/3 border-t border-gray-300" />
          <span className="text-gray-500">Or alternatively</span>
          <hr className="w-1/3 border-t border-gray-300" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            onClick={handleGoogleLogin}
            className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle className="h-6 w-6" />
            Google Sign Up
          </button>
          <button
            onClick={handleSocialLogin}
            className="w-full inline-flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaFacebookF className="h-6 w-6" />
            Facebook Sign Up
          </button>
        </div>
        {success && (
          <CustomToast message="Success! Your account has been created." onDismiss={() => setSuccess(false)} />
        )}
        {error && (
          <CustomToast message={error} onDismiss={() => setError("")} />
        )}
      </div>
    </div>
  );
}
