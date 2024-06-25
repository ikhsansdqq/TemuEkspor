"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/api/firebase"; // Make sure this imports the correct firebase setup
import ConfirmationModal from "@/components/ConfirmationModal";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";


export default function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/profile/login"); // Redirect to login if no user is signed in
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/profile/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleResetPassword = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmReset = () => {
    setShowConfirmModal(false);
    setShowResetForm(true);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    if (auth.currentUser) {
      try {
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, currentPassword);

        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setMessage("Password updated successfully");
        setShowResetForm(false);
      } catch (error) {
        setMessage(error.message);
      }
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Welcome to your profile!
      </h1>
      <p className="text-base text-gray-900">
        {user ? `Logged in as: ${user.email}` : "Loading..."}
      </p>
      <div className="mt-4 space-x-2">
        <Link href="/">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go Back
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800"
        >
          Log Out
        </button>
        <button
          onClick={() => router.push("/profile/login")}
          className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800"
        >
          Switch Account
        </button>
        <button onClick={handleResetPassword} className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
          Reset Password
        </button>
        {showResetForm && (
          <form onSubmit={handlePasswordUpdate} className="mt-4">
            <div className="mb-4">
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                id="current-password"
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                id="new-password"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Update Password
            </button>
          </form>
        )}
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <ConfirmationModal showModal={showConfirmModal} setShowModal={setShowConfirmModal} onConfirm={handleConfirmReset} />
      </div>
    </div>
  );
}
