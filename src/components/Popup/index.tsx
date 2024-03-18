import React from "react";
import Link from "next/link";

const index = ({ currentStage }: { currentStage: number }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Simran</span>
        👋
        <br />A Software Development Engineer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Through varied experiences, I've fostered a versatile skill set and
          developed an unwavering drive for continuous improvement and acquiring
          knowledge.
        </p>

        <Link href="/about" className="neo-brutalism-white neo-btn">
          Explore My Career Timeline
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Engaged in a variety of personal projects to refine skills, foster
          growth, and cultivate expertise.
        </p>

        <Link href="/projects" className="neo-brutalism-white neo-btn">
          Discover My Creations
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Interested in discussing potential collaborations, or simply
          establishing a meaningful connection{" "}
        </p>

        <Link href="/contact" className="neo-brutalism-white neo-btn">
          Let&apos;s talk
          {/* <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" /> */}
        </Link>
      </div>
    );
  }

  return null;
};

export default index;
