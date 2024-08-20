import React from "react";
import Link from "next/link";

const index = ({ currentStage }: { currentStage: number }) => {
  if (currentStage === 1)
    return (
      <div className="bg-gradient-to-r text-center rounded-md bg-opacity-20 p-4 from-[rgba(77,133,152,0.4)] to-[rgba(104,79,153,0.4)]">
        <h1 className="sm:text-xl mb-3 px-6 sm:leading-snug neo-brutalism-blue text-white mx-5">
          Hi, this is
          <span className="font-semibold mx-2 text-white">Simran</span>
          👋
          <br />A Software Development Engineer
          <br /> from India
        </h1>
        <Link
          href="/skills"
          className="p-1 hover:text-gray-200 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold"
        >
          View skills snapshot
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="bg-gradient-to-r rounded-md p-4 text-center bg-opacity-20 from-[rgba(148,152,77,0.4)] to-[rgba(47,158,25,0.4)]">
        <p className="font-medium lg:text-xl mb-3">
          Through varied experiences, I&apos;ve fostered a versatile skill set
          and developed an unwavering drive for continuous improvement and
          acquiring knowledge.
        </p>

        <Link
          href="/work-experience"
          className="p-1 hover:text-gray-200 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold"
        >
          Explore Career Timeline
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="bg-gradient-to-r p-4 text-center rounded-md bg-opacity-20 from-[rgba(63,86,135,0.4)] to-[rgba(50,182,182,0.4)]">
        <p className="font-medium sm:text-xl mb-3">
          Engaged in a variety of personal projects to refine skills, foster
          growth, and cultivate expertise.
        </p>

        <Link
          href="/projects"
          className="p-1 hover:text-gray-200 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold"
        >
          Discover My Creations
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="bg-gradient-to-r p-4 text-center rounded-md bg-opacity-20 from-[rgba(152,77,128,0.4)] to-[rgba(158,120,25,0.4)]">
        <p className="font-medium mb-3 sm:text-xl">
          Interested in discussing potential collaborations, or simply
          establishing a meaningful connection{" "}
        </p>

        <Link
          href="/contact"
          className="p-1 hover:text-gray-200 cursor-pointer px-2 rounded-md bg-gradient-to-r bg-opacity-40 bg-white shadow-md text-black font-semibold"
        >
          Let&apos;s talk
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  return null;
};

export default index;
