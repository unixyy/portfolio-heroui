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
        { icon: "skill-icons:expressjs-light", name: "ExpressJS" },
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
    <motion.section
      className="mt-12 sm:mt-24 flex flex-col items-center justify-center relative"
      id="skills"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <motion.h2
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1] }}
      >
        Mes compétences
      </motion.h2>
      <div className="flex flex-row max-sm:flex-wrap justify-center gap-2 sm:gap-8">
        {mainItems.map((item) => (
          <SpotlightCard
            key={item.title}
            className="flex flex-col items-center justify-center bg-neutral-100 border-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 hover:scale-110 transition-transform duration-300 ease-in-out max-sm:w-36 max-sm:h-36"
            spotlightColor="rgba(246, 246, 246, 0.4)"
          >
            <Image
              alt={`${item.title} Logo`}
              className="max-sm:w-24 max-sm:h-24"
              src={item.image}
            />
            <h2 className="max-sm:text-xs text-2xl font-bold text-center sm:mt-4">
              {item.title}
            </h2>
          </SpotlightCard>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-y-8 gap-x-12 mt-16 flex-wrap">
        {otherItems.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div>
              {item.data?.map((elt, idx) => (
                <Tooltip
                  key={idx}
                  closeDelay={0}
                  content={elt.name}
                  delay={0}
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
          </div>
        ))}
      </div>
    </motion.section>
  );
}
