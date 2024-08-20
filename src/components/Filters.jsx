import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { filters } from "../assets/filter.js";
export default function Filters({
  platform,
  setPlatform,
  category,
  setCategory,
  sort,
  setSort,
}) {
  const [openPlatform, setOpenPlatform] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  return (
    <div className="container flex gap-1 md:gap-10 p-1 mb-3 items-start ">
      <div className="relative">
        <span className="text-white text-sm md:text-base xl:text-lg">
          Select Platform :{" "}
        </span>
        <button
          onClick={() => setOpenPlatform(!openPlatform)}
          className="inline-flex text-sm md:text-base xl:text-lg w-[100px] md:w-[139px] justify-center items-center gap-x-1.5 rounded-3xl text-white bg-[#f48924] py-1"
        >
          {platform}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {openPlatform && (
          <ul className="absolute top-full right-4 z-10 py-1 mt-2 w-max rounded-md bg-white">
            {filters.platform.map((platform, index) => (
              <li
                key={index}
                onClick={() => {
                  setPlatform(platform);
                  setOpenPlatform(false);
                }}
                className="text-gray-700 px-4 py-2 text-sm capitalize hover:bg-gray-200 cursor-pointer"
              >
                {platform}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        <span className="text-white text-sm md:text-base xl:text-lg">
          Select Category :
        </span>
        <button
          onClick={() => setOpenCat(!openCat)}
          className="inline-flex text-sm md:text-base xl:text-lg w-[100px] md:w-[139px] justify-center items-center gap-x-1.5 rounded-3xl text-white bg-[#f48924] py-1"
        >
          {category}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {openCat && (
          <ul className="absolute top-full right-0 z-10 py-1 mt-2 w-max max-h-[50vh] overflow-y-scroll rounded-md bg-white">
            {filters.category.map((cat, index) => (
              <li
                key={index}
                onClick={() => {
                  setCategory(cat);
                  setOpenCat(false);
                }}
                className="text-gray-700 px-4 py-2 text-sm capitalize hover:bg-gray-200 cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        <span className="text-white text-sm md:text-base xl:text-lg">
          Sort-by :{" "}
        </span>
        <button
          onClick={() => setOpenSort(!openSort)}
          className="inline-flex text-sm md:text-base xl:text-lg w-[100px] md:w-[139px] justify-center items-center gap-x-1.5 rounded-3xl text-white bg-[#f48924] py-1"
        >
          {sort}
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        {openSort && (
          <ul className="absolute top-full right-2 z-10 py-1 mt-2 w-max rounded-md bg-white">
            {filters.Sort.map((sort, index) => (
              <li
                key={index}
                onClick={() => {
                  setSort(sort);
                  setOpenSort(false);
                }}
                className="text-gray-700 px-4 py-2 capitalize text-sm hover:bg-gray-200 cursor-pointer"
              >
                {sort}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
