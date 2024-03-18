"use client";
import React, { useState, useEffect, useRef } from "react";
import GirlWithLappy from "@/components/GirlWithLappy";
import HtmlIcon from "@/assets/html5-icon.svg";
import CssIcon from "@/assets/css-icon.svg";
import JavascriptIcon from "@/assets/javascript-icon.svg";
import ReactIcon from "@/assets/react-icon.svg";
import TypescriptIcon from "@/assets/typescript-icon.svg";
import MaterialIcon from "@/assets/material-ui-icon.svg";
import TailwindIcon from "@/assets/tailwind-icon.svg";
import HasuraIcon from "@/assets/hasura-icon.svg";
import SassIcon from "@/assets/sass-icon.svg";
import GitIcon from "@/assets/git-icon.svg";
import GraphQlIcon from "@/assets/graphql-icon.svg";
import GitHubIcon from "@/assets/github-icon.svg";
import GitLabIcon from "@/assets/gitlab-icon.svg";
import BootstrapIcon from "@/assets/bootstrap-icon.svg";
import NextJsIcon from "@/assets/nextjsIcon.png";
import CypressIcon from "@/assets/cypress.png";
import FigmaIcon from "@/assets/figma.svg";
import ReactHookFormIcon from "@/assets/reacthookform.png";
import SIcon from "@/assets/s.svg";
import RadixUiIcon from "@/assets/radix-ui-icon.png";
import UiShadcnIcon from "@/assets/uiShadcn.png";
import ReactNativeIcon from "@/assets/atom.png";
import ReactQueryIcon from "@/assets/react-query.png";
import Image from "next/image";

const Skills = () => {
  const containerRef = useRef(null);

  const [reachedScrollEnd, setReachedScrollEnd] = useState(false);

  const [reachedThreshold, setReachedThreshold] = useState(false);

  const handle = () => {
    const threshold = window.innerHeight * 3;
    console.log(window.scrollY, threshold, "here");
    if (window.scrollY >= threshold && containerRef.current) {
      containerRef.current.style.top = `${threshold + 250}px`;
      setReachedScrollEnd(true);
    } else if (containerRef.current) {
      setReachedScrollEnd(false);
    }

    if (window.scrollY >= threshold + 280) {
      console.log("reached");
      setReachedThreshold(true);
    } else {
      setReachedThreshold(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handle();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handle();
  }, []);

  const skills = [
    {
      section: "Libraries & Frameworks",
      items: [
        { name: "NextJs", icon: NextJsIcon },
        { name: "ReactJs", icon: ReactIcon },
        { name: "React Native", icon: ReactNativeIcon },
        { name: "Material UI", icon: MaterialIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "Bootstrap", icon: BootstrapIcon },
        // Add icons for the following as needed
        { name: "Radix UI", icon: RadixUiIcon },
        { name: "React Hook Form", icon: ReactHookFormIcon },
        { name: "React Query", icon: ReactQueryIcon },
        { name: "UI/SHADN", icon: UiShadcnIcon },
      ],
    },
    {
      section: "Languages",
      items: [
        { name: "TypeScript", icon: TypescriptIcon },
        { name: "JavaScript", icon: JavascriptIcon },
        { name: "HTML", icon: HtmlIcon },
        { name: "CSS", icon: CssIcon },
        { name: "SCSS", icon: SassIcon },
        { name: "GraphQL", icon: GraphQlIcon },
      ],
    },
    {
      section: "Tools",
      items: [
        { name: "Git", icon: GitIcon },
        { name: "Cypress", icon: CypressIcon },
        { name: "JEST", icon: null },
        { name: "GitHub", icon: GitHubIcon },
        { name: "Storybook", icon: SIcon },
        { name: "Figma", icon: FigmaIcon },
        { name: "Hasura", icon: HasuraIcon },
      ],
    },
  ];

  return (
    <div className="w-full max-w-screen ">
      <div
        className={`${
          reachedThreshold ? "flex items-end w-full justify-center gap-2" : ""
        } h-[400vh] relative bg-pink-100`}
      >
        <p
          className={`text-7xl ${
            reachedThreshold ? "w-1/2 mb-20" : "w-full fixed top-6"
          }  font-semibold text-center transition-all duration-500`}
        >
          Tech Stacks
        </p>
        <div
          ref={containerRef}
          className={` ${
            reachedThreshold
              ? "w-1/2"
              : "w-4/5 md:w-[48%] -translate-x-1/2  left-1/2"
          } transition-transform duration-500 ease-in-out transform
          ${
            reachedScrollEnd
              ? !reachedThreshold
                ? "scale-[0.6] absolute"
                : "scale-50 relative !top-28 lg:!top-36 xl:!top-40"
              : "fixed !top-[28%] scale-100"
          }
          `}
        >
          <GirlWithLappy />
        </div>
      </div>
      <div className="flex py-5 justify-center gap-4 items-start">
        {skills.map((item, index) => (
          <div
            className="basis-1/4 py-2 rounded flex flex-col items-center"
            key={index}
          >
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-medium mb-2.5">{item.section}</p>
              {item.items.map((skill, ind) => (
                <div
                  key={ind}
                  className="flex gap-2 pl-1 mb-[2px] items-center"
                >
                  {skill.icon ? (
                    <Image src={skill.icon} alt="" className="w-4" />
                  ) : (
                    "J"
                  )}{" "}
                  <p key={ind}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
