import { Image, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import "../styles/globals.css";

import SpotlightCard from "./reactbits/Components/SpotlightCard/SpotlightCard";

import reactsvg from "/react.svg";
import dotnet from "/dotnet.svg";
import docker from "/docker.svg";
import tailwind from "/tailwind.svg";
export default function Skills() {
  const motionTooltip = {
    variants: {
      exit: {
        opacity: 0,
        transition: {
          duration: 0.1,
          ease: "easeIn",
        },
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 0.15,
          ease: "easeOut",
        },
      },
    },
  };

  const mainItems = [
    {
      title: "React",
      image: reactsvg,
    },
    {
      title: ".NET",
      image: dotnet,
    },
    {
      title: "Docker",
      image: docker,
    },
    {
      title: "Tailwind CSS",
      image: tailwind,
    },
  ];

  const otherItems = [
    {
      name: "Langages",
      data: [
        { icon: "skill-icons:typescript", name: "TypeScript" },
        { icon: "skill-icons:python-light", name: "Python" },
        { icon: "skill-icons:cs", name: "C#" },
        { icon: "skill-icons:java-light", name: "Java" },
        { icon: "skill-icons:swift", name: "Swift" },
      ],
    },
    {
      name: "Outils",
      data: [
        { icon: "skill-icons:git", name: "Git" },
        { icon: "skill-icons:github-light", name: "GitHub" },
        { icon: "skill-icons:vscode-light", name: "VS Code" },
        { icon: "devicon:kibana", name: "Kibana" },
        { icon: "skill-icons:jira-dark", name: "Jira" },
        { icon: "skill-icons:postman", name: "Postman" },
        { icon: "skill-icons:figma-dark", name: "Figma" },
        { icon: "skill-icons:markdown-dark", name: "Markdown" },
      ],
    },
    {
      name: "Databases",
      data: [
        { icon: "skill-icons:postgresql-light", name: "PostgreSQL" },
        { icon: "skill-icons:mongodb", name: "MongoDB" },
        { icon: "skill-icons:redis-light", name: "Redis" },
      ],
    },
  ];

  return (
    <section
      className="sm:mt-24 flex flex-col items-center justify-center relative"
      id="skills"
    >
      <motion.h2
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
      >
        Mes compétences
      </motion.h2>
      <div className="flex max-sm:flex-wrap justify-center gap-8">
        {mainItems.map((item) => (
          <SpotlightCard
            key={item.title}
            className="flex flex-col items-center justify-center bg-neutral-100 border-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 hover:scale-110 transition-transform duration-300 ease-in-out"
            spotlightColor="rgba(246, 246, 246, 0.4)"
          >
            <Image
              alt={`${item.title} Logo`}
              className=""
              height={256}
              src={item.image}
              width={256}
            />
            <h2 className="text-2xl font-bold text-center mt-4">
              {item.title}
            </h2>
          </SpotlightCard>
        ))}
      </div>
      <div className="flex flex-row gap-y-8 gap-x-12 mt-16 flex-wrap">
        {otherItems.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            {item.data?.map((elt, idx) => (
              <Tooltip
                key={idx}
                closeDelay={0}
                content={elt.name}
                delay={0}
                motionProps={motionTooltip}
                placement="bottom"
              >
                <Icon
                  className="inline-block mr-2 hover:scale-105 transition-transform duration-300 ease-in-out"
                  height={48}
                  icon={elt.icon}
                  width={48}
                />
              </Tooltip>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
