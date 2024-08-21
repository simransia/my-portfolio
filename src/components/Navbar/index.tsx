import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = ({ currentStage }: { currentStage?: number }) => {
  const pathname = usePathname();

  const changeTextColor =
    pathname.includes("projects") ||
    pathname.includes("work-experience") ||
    pathname.includes("skills");

  return (
    <div className="fixed font-Inter md:font-semibold bg-orange-300 text-xs sm:text-sm lg:text-base bg-opacity-20 flex justify-between z-40 top-0 text-gray-100 w-full">
      <div className="w-1/5 px-8">
        {pathname !== "/" ? (
          <Link
            className={`group relative inline-block pt-1 ${
              changeTextColor ? "text-gray-700" : ""
            }`}
            href={"/"}
          >
            Home
            <span
              className={`absolute left-0 bottom-[-2px] w-0 ${
                changeTextColor ? "bg-gray-700" : "bg-white"
              } h-[2px] rounded-t transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        ) : (
          <img
            src="https://media.giphy.com/media/Z96Ax1zh5aSsHczGve/giphy.gif"
            // width="35"
            className="sm:w-9 w-5 min-w-[20px]"
            alt=""
          />
        )}
      </div>
      <div className="lg:w-2/5 w-[70%] sm:w-1/2 flex justify-around py-1 pr-2">
        <Link
          href={"/skills"}
          className={`group relative ${changeTextColor ? "text-gray-700" : ""}`}
        >
          Skills
          <span
            className={`absolute left-0 bottom-[-2px] ${
              currentStage == 1 || pathname.includes("skills")
                ? "w-full"
                : "w-0"
            } ${
              changeTextColor ? "bg-gray-700" : "bg-white"
            } h-[2px] rounded-t transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
        <Link
          href={"/work-experience"}
          className={`group relative ${changeTextColor ? "text-gray-700" : ""}`}
        >
          Work Experience
          <span
            className={`absolute left-0 bottom-[-2px] ${
              currentStage == 2 || pathname.includes("work-experience")
                ? "w-full"
                : "w-0"
            } ${
              changeTextColor ? "bg-gray-700" : "bg-white"
            } h-[2px] rounded-t transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
        <Link
          href={"/projects"}
          className={`group relative ${changeTextColor ? "text-gray-700" : ""}`}
        >
          Projects
          <span
            className={`absolute left-0 bottom-[-2px] ${
              currentStage == 3 || pathname.includes("projects")
                ? "w-full"
                : "w-0"
            } ${
              changeTextColor ? "bg-gray-700" : "bg-white"
            } h-[2px] rounded-t transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
        <Link
          href={"/contact"}
          className={`group relative ${changeTextColor ? "text-gray-700" : ""}`}
        >
          Contact
          <span
            className={`absolute left-0 bottom-[-2px] ${
              currentStage == 4 || pathname.includes("contact")
                ? "w-full"
                : "w-0"
            } h-[2px] ${
              changeTextColor ? "bg-gray-700" : "bg-white"
            } rounded-t transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
