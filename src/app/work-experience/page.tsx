"use client";
import { WORK_EXPERIENCE } from "@/constants/work-experience";
import React from "react";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="">
      {WORK_EXPERIENCE.map((experience, index) => (
        <React.Fragment key={index}>
          <div>
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
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkExperience;
