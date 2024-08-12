import React, { useState, useEffect, useRef } from "react";
import GirlWithLappy from "@/components/GirlWithLappy";
import HtmlIcon from "@/assets/images/html5-icon.svg";
import CssIcon from "@/assets/images/css-icon.svg";
import JavascriptIcon from "@/assets/images/javascript-icon.svg";
import ReactIcon from "@/assets/images/react-icon.svg";
import TypescriptIcon from "@/assets/images/typescript-icon.svg";
import MaterialIcon from "@/assets/images/material-ui-icon.svg";
import TailwindIcon from "@/assets/images/tailwind-icon.svg";
import HasuraIcon from "@/assets/images/hasura-icon.svg";
import SassIcon from "@/assets/images/sass-icon.svg";
import GitIcon from "@/assets/images/git-icon.svg";
import GraphQlIcon from "@/assets/images/graphql-icon.svg";
import GitHubIcon from "@/assets/images/github-icon.svg";
import GitLabIcon from "@/assets/images/gitlab-icon.svg";
import BootstrapIcon from "@/assets/images/bootstrap-icon.svg";
import NextJsIcon from "@/assets/images/nextjsIcon.png";
import CypressIcon from "@/assets/images/cypress.png";
import FigmaIcon from "@/assets/images/figma.svg";
import ReactHookFormIcon from "@/assets/images/reacthookform.png";
import SIcon from "@/assets/images/s.svg";
import RadixUiIcon from "@/assets/images/radix-ui-icon.png";
import UiShadcnIcon from "@/assets/images/uiShadcn.png";
import ReactNativeIcon from "@/assets/images/atom.png";
import ReactQueryIcon from "@/assets/images/react-query.png";
import Image from "next/image";

const Skills = () => {
  const containerRef = useRef(null);

  const [reachedScrollEnd, setReachedScrollEnd] = useState(false);

  const [reachedThreshold, setReachedThreshold] = useState(false);

  const handle = () => {
    const threshold = window.innerHeight * 3;
    console.log(window.scrollY, threshold, "here");
    if (window.scrollY >= threshold && containerRef.current) {
      // containerRef.current.style.top = `${threshold + 250}px`;
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

  //
  return (
    <div className="w-full max-w-screen overflow-x-hidden">
      <div
        className={`${
          reachedThreshold ? "flex items-end w-full justify-center gap-2" : ""
        } h-[400vh] relative bg-pink-100`}
      >
        <p
          className={`text-4xl md:text-7xl ${
            reachedThreshold
              ? "w-1/2 px-4 mb-14 sm:mb-20 md:mb-10 lg:mb-20"
              : "w-full fixed top-6"
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
                ? "scale-[0.6] absolute !top-[2400px] md:!top-[2500px] xl:!top-[2450px] mxl:!top-[2411px]"
                : "scale-[0.7] sm:scale-50 relative !top-0 sm:!top-16 md:!top-20 lg:!top-28 xl:!top-40"
              : "fixed !top-[28%] scale-100"
          }
          `}
        >
          <GirlWithLappy />
        </div>
      </div>
      <div className="flex px-10 sm:px-2 flex-col sm:flex-row py-5 justify-center gap-4 items-start">
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
