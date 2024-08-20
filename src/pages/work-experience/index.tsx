"use client";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import React, { useRef } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useScroll, useTransform } from "framer-motion";

const WorkExperience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-max relative">
        <div className="w-screen h-[calc(100vh-2rem)] flex items-center justify-center text-6xl lg:text-8xl text-center">
          <span className="hidden sm:inline-block">
            Professional Experience
          </span>
          <span className="sm:hidden">
            Professional
            <br /> Experience
          </span>
        </div>
        <motion.div
          style={{ y: backgroundY }}
          className="h-[120vh] md:h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"
        />

        <div id="experience" className="ml-3 mr-4 sm:mx-10 lg:mx-20">
          <VerticalTimeline lineColor="#ADD8E6">
            {WORK_EXPERIENCE.map((experience, index) => (
              <VerticalTimelineElement
                // visible={true}
                key={index}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-20 rounded-full object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="h-4 w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
