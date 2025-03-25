import React from "react";

export const DropDownTheme = () => {
  return (
    <div className="transition-discrete absolute top-6 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md ">
      <ul className="flex flex-col m-0 p-0">
        <li className=" px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
          Light
        </li>
        <li className=" px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
          Dark
        </li>
        <li className=" px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
          Sistema
        </li>
      </ul>
    </div>
  );
};
