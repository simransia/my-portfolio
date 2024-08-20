import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = ({ currentStage }: { currentStage?: number }) => {
  const pathname = usePathname();

  const changeTextColor =
    pathname.includes("projects") || pathname.includes("work-experience");

  return (
    <div className="fixed font-Inter font-semibold bg-orange-300 text-sm lg:text-base bg-opacity-20 flex justify-between z-50 top-0 text-white w-full">
      <div className="w-1/5 px-8">
        {pathname !== "/" ? (
          <Link
            className={`group relative ${
              changeTextColor ? "text-gray-700" : ""
            }`}
            href={"/"}
          >
            Home
            <span
              className={`absolute left-0 bottom-[-2px] w-0 ${
                changeTextColor ? "bg-gray-700" : "bg-white"
              } h-[2px] bg-white rounded-t transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        ) : (
          <img
            src="https://media.giphy.com/media/Z96Ax1zh5aSsHczGve/giphy.gif"
            width="35"
          />
        )}
      </div>
      <div className="w-1/3 flex justify-around py-1">
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
            } h-[2px] bg-white rounded-t transition-all duration-300 group-hover:w-full`}
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
            } h-[2px] bg-white rounded-t transition-all duration-300 group-hover:w-full`}
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
            } h-[2px] bg-white rounded-t transition-all duration-300 group-hover:w-full`}
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
