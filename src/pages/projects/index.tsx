import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { PERSONAL_PROJECTS } from "@/constants/projects";
import { useRouter } from "next/router";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loadedVideo, setLoadedVideo] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

      if (isBottom) {
        // Navigate to a different page when reaching the end of the current page
        router.push("/contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {PERSONAL_PROJECTS.map((item) => (
              <div
                className={`h-screen w-screen text-white flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 ${item.color}`}
                key={item.id}
              >
                <div className="w-[70%] pl-32">
                  <h1 className="text-xl mb-8 font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-11/12 mb-8 aspect-[17/9]">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onCanPlay={() => setLoadedVideo(item.id)}
                      className="absolute inset-0 object-cover hover:scale-[1.04] hover:rounded-xl cursor-pointer w-full h-full"
                    />
                    {/* {loadedVideo !== item.id && (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )} */}
                  </div>
                  <p className="w-80 md:w-96 mb-6 italic lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                </div>
                <div className="w-[30%] pr-32 relative">
                  <p className="absolute right-40 -rotate-[25deg] -top-32">
                    <span className="font-playFair text-[10rem] text-[#43453a] italic font-extrabold text-opacity-20">
                      0{item.id}
                    </span>
                  </p>
                  <p className="text-xl mb-4">Tech Stacks</p>
                  {item.techStacks.map((skill, ind) => (
                    <span
                      key={ind}
                      className="inline-block m-1 bg-slate-50 bg-opacity-20 px-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-[10vh] bg-black flex flex-col gap-16 items-center justify-center text-center">
        {/* <h1 className="text-8xl"></h1> */}
      </div>
    </motion.div>
  );
};

export default Projects;
