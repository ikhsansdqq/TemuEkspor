"use client"

import SearchBox from "@/components/searchbox";

import InfoGrid from "@/components/InfoGrid";

export default function Home() {
  return (
    <div>
      <SearchBox />
      {/* <Hero/> */}
      <InfoGrid/>
    </div>
  );
}