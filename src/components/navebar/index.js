import Link from "next/link";
import React from "react";

export const MainNavebar = () => {
  return (
    <nav className="bg-orange-500 p-4 ">
      <div className=" mx-auto flex justify-between items-center">
        <a href="/">
          <div className="cursor-pointer">
            <img className=" max-w-[100%] h-auto" src="/FollowbackLogo.png" />
          </div>
        </a>
        <div className="flex items-center ">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
