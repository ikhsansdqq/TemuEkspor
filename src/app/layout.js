import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import logo from "../../public/images/logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Temu Ekspor | Official Site",
  description: "Solution for your export needs within our local expertise community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl flex justify-between mx-auto py-4">
          <div className="flex space-x-6">
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">Terms of Conditional</a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">Terms of Use</a>
            <a href="/" className="text-[#1E1E1E] text-sm hover:text-gray-700">Legal</a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-[#1E1E1E] hover:text-gray-700">Bahasa Indonesia</a>
            <a href="/profile/register" className="text-[#1E1E1E] hover:text-gray-700">Register</a>
            <a href="/profile/login" className="text-[#1E1E1E] hover:text-gray-700">Login</a>
            <a href="/profile" className="text-[#1E1E1E] hover:text-gray-700">Account</a>
          </div>
        </div>
        <nav class="bg-white border-gray-200">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={logo} class="h-8" width="180" height="40" alt="Temu Ekspor Logo" />
              {/* <span class="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span> */}
            </a>
            <div class="flex md:order-2">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>
              <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
              </div>
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a href="/products" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Lineup Products</a>
                </li>
                <li>
                  <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Find Suppliers</a>
                </li>
                <li>
                  <a href="/information" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Export Information</a>
                </li>
                <li>
                  <a href="/services" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Our Services</a>
                </li>
                <li>
                  <a href="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Stories</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="max-w-screen-xl items-center justify-between mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
