"use client"

import SearchBox from "@/components/searchbox";
import Hero from "@/components/hero";
import InfoGrid from "@/components/InfoGrid";

export default function Home() {
  return (
    <div>
      <SearchBox />
      <Hero/>
      <InfoGrid/>
    </div>
  );
}