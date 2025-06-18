import { motion } from "framer-motion";
import { Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

import SpotlightCard from "./reactbits/Components/SpotlightCard/SpotlightCard";

import polytech from "/polytechmtp.jpg";
import ets from "/etsmtl.jpg";

export default function Education() {
  const mainItems = [
    {
      title: "ÉTS Montréal",
      image: ets,
      link: "https://www.etsmtl.ca/",
      desc: "Maîtrise en Technologie de l'information",
    },
    {
      title: "Polytech Montpellier",
      image: polytech,
      link: "https://www.polytech.umontpellier.fr/",
      desc: "Ingénieurie en informatique et gestion d'entreprise",
    },
  ];

  return (
    <section
      className="sm:mt-24 flex flex-col items-center justify-center gap-6 relative"
      id="education"
    >
      <motion.h2
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
      >
        Mon parcours
      </motion.h2>
      <div className="flex max-sm:flex-wrap justify-center gap-8">
        {mainItems.map((item) => (
          <Link key={item.title} isExternal color="foreground" href={item.link}>
            <SpotlightCard
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
                {item.title}{" "}
                <Icon className="inline-block ml-2" icon="ci:external-link" />
              </h2>
              <h3 className="w-64 text-lg text-center mt-2 text-wrap">
                {item.desc}
              </h3>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
