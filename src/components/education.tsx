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
      details: (
        <ul className="list-disc pl-6 mt-2">
          <li>Création d&apos;un jeu en VR sous Unity</li>
          <li>Cours de Cybersécurité</li>
          <li>cours de Machine Learning</li>
          <li>cours de Design</li>
        </ul>
      ),
    },
    {
      title: "Polytech Montpellier",
      image: polytech,
      link: "https://www.polytech.umontpellier.fr/",
      desc: "Ingénieurie en informatique et gestion d'entreprise",
      details: (
        <ul className="list-disc pl-6 mt-2">
          <li>Multiples projets Fullstack en seul ou en équipe</li>
          <li>Cours exthensifs sur les bases de données</li>
          <li>Cours d&apos;algorithmique et de Conception de système</li>
          <li>Cours de finance d&apos;entreprise et de gestion de projet</li>
        </ul>
      ),
    },
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-24 flex flex-col flex-wrap items-center justify-center gap-6 relative"
      id="education"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.39, 0.24, 0.3, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div>
        <motion.h2
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
        >
          Mes diplômes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-sm:flex-wrap justify-star items-start gap-8 lg:gap-12">
          {mainItems.map((item, idx) => (
            <Link
              key={item.title}
              isExternal
              className="h-full"
              color="foreground"
              href={item.link}
            >
              <SpotlightCard
                className={`h-full flex flex-col ${idx % 2 === 0 ? "lg:flex-row-reverse lg:justify-end" : "lg:flex-row lg:justify-start"} items-center bg-neutral-100 border-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 hover:scale-110 transition-transform duration-300 ease-in-out`}
                spotlightColor="rgba(246, 246, 246, 0.4)"
              >
                <div className="flex flex-col w-64 items-center justify-center">
                  <Image
                    alt={`${item.title} Logo`}
                    className="aspect-square "
                    src={item.image}
                  />
                </div>
                <div className="text-wrap md:w-80 flex flex-col gap-2 justify-start">
                  <h2 className="text-xl font-bold text-center mt-2">
                    {item.title}
                    <Icon
                      className="inline-block ml-2"
                      icon="ci:external-link"
                    />
                  </h2>
                  <h3 className="text-md text-default-500 text-center text-wrap">
                    {item.desc}
                  </h3>
                  <div className="flex text-sm text-default-600 flex-grow px-2">
                    {item.details}
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
