"use client";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  return (
    <div id="experience" className="">
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
  );
};

export default WorkExperience;
