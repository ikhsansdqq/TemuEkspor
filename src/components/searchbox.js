"use client";

import { useState } from "react";

const dummyData = ["Coffee", "Tea", "CPO", "Crude Palm Oil"];

export default function SearchBox() {
  const [q, sQ] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    sQ(value);
    if (value) {
      const filtered = dummyData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleItemClick = (item) => {
    sQ(item);
    setFilteredData([]);
  };

  return (
    <div className="max-w-screen-xl mb-8 mx-auto">
      <div className="mb-4">
        <label htmlFor="search" className=" text-lg font-medium text-black">
          Search Products
        </label>
      </div>
      <div className="flex flex-col relative w-full">
        <div className="flex">
          <input
            type="text"
            id="search"
            value={q}
            onChange={handleInputChange}
            placeholder="Search Products"
            className="flex-grow pl-5 py-4 border border-[#E0E0E0] rounded-l-md focus:outline-none focus:border-blue-500"
            style={{ zIndex: 1 }} />
          <button className="px-6 py-4 bg-[#2681FF] text-white rounded-r-md hover:bg-[#2D78E0]">
            Find Product
          </button>
        </div>
        {filteredData.length > 0 && (
          <ul className="absolute bg-white border border-[#E0E0E0] w-full mt-1 rounded-md shadow-lg z-10">
            {filteredData.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
