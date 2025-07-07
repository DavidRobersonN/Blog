"use client";

import clsx from "clsx";

export function Header() {
  return (
    <div>
      <h1
        className={clsx(
          "text-6x1",
          "font-sans",
          "text-blue-500",
          "hover:text-white",
          "bg-fixed:",
          "bg-white",
          "hover:bg-blue-500"
        )}
      ></h1>
    </div>
  );
}
