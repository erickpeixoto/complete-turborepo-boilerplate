"use client";
import React, { useEffect } from "react";

interface Something {
  name?: String;
}
export const Button = ({ name }: Something) => {
  useEffect(() => console.log("something"), []);
  return (
    <button className="px-3 py-2 font-bold text-white transition-all duration-200 rounded w-60 drop-shadow-2xl bg-gradient-to-r from-indigo-400 to-fuchsia-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-700 focus:ring-indigo-400 focus:ring-4 focus:ring-offset-2">
      Let&apos;s get it !<div className="bg-green-500">{name}</div>
    </button>
  );
};
