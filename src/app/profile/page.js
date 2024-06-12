"use client"
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome to your profile!</h1>
      <p className="text-base text-gray-900">Testing out my new website</p>
      <Link href="/">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button>
        </Link>
    </div>
  );
}