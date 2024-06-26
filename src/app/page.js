"use client"

import SearchBox from "@/components/searchbox";
import InfoGrid from "@/components/InfoGrid";

import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <SearchBox />
      <HeroSection />
      <InfoGrid />
    </div>
  );
}