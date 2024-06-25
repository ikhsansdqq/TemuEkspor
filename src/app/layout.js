import "./globals.css";

import Navbar from "@/components/Navbar";
import Topnav from "@/components/Topnav";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Temu Ekspor | Official Site",
  description:
      "Solution for your export needs within our local expertise community",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {/* <Topnav /> */}
        <Navbar />
        <div className="max-w-screen-xl items-center justify-between mx-auto">
          {children}
          <SpeedInsights />
        </div>

        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}