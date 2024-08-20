import React from "react";

export default function Loading_Card() {
  return (
    <div className="animate-pulse space-x-4 card rounded-3xl relative h-96 bg-[#ffffff1a]">
      <div className="bg-gray-400 rounded-t-3xl w-full h-40 " />
      <div className="p-4 space-y-4 h-40">
        <div className="h-6 bg-gray-400 rounded-3xl w-3/4" />
        <div className="h-4 bg-gray-400 rounded-3xl w-1/4" />
        <div className="h-4 bg-gray-400 rounded-3xl w-3/4" />
        <div className="h-4 bg-gray-400 rounded-3xl " />
        <div className="h-4 bg-gray-400 rounded-3xl w-1/2" />
      </div>
    </div>
  );
}
