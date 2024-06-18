import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Temu Ekspor | Official Site",
  description:
    "Solution for your export needs within our local expertise community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:max-w-screen-xl md:flex md:justify-between md:mx-auto md:py-6 hidden">
          <div className="flex space-x-6 items-center">
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Terms of Conditional
            </a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Terms of Use
            </a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">
              Legal
            </a>
          </div>
          <div className="flex space-x-12 items-center">
            <a href="/" className="text-[#1E1E1E] hover:text-gray-700">
              Bahasa Indonesia
            </a>
            <div className="flex space-x-8 items-center">
              <a
                href="/profile/register"
                className="text-[#1E1E1E] hover:text-gray-700 font-semibold">
                <u>Login</u></a>
              <a
                href="/profile/register"
                className="hover:text-gray-700 rounded-full text-[13px] font-bold bg-black px-6 py-2 text-white">
                Register</a>
            </div>
          </div>
        </div>

        <nav class="bg-white dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap flex-row sm:flex-wrap items-center justify-between mx-auto py-4 px-4 lg:px-0">
            <a
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                className="w-44 h-10"
                src={logo}
                alt="Temu Ekspor Logo"/>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/profile/register">
              <button
                type="button"
                class="lg:visible invisible text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Get Started
              </button>
              </Link>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Lineup Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Find Suppliers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Export Information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact
                  </a>
                </li>
                  <button
                    type="button"
                    class="text-white visible lg:invisible bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Link href={'/profile/register'}>Get Started</Link>
                  </button>
              </ul>
            </div>
          </div>
        </nav>

        <div className="max-w-screen-xl items-center justify-between mx-auto">
          {children}
        </div>

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
