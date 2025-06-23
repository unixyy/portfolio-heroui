import { Chip, Divider, Tooltip } from "@heroui/react";

import ubisoft from "/ubisoft.svg";
import lirmm from "/lirmm.png";
import greenoxya from "/greenoxya.png";

import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

interface itemProps {
  company: string;
  title: string;
  date: string;
  description: JSX.Element | string;
  image: string;
  skills: { name: string; icon: string }[];
  Chips: { name: string }[];
}

export default function Xp() {
  const items: itemProps[] = [
    {
      company: "Ubisoft Montreal",
      title: "Programmeur Outils .NET.",
      date: "septembre 2024 - Décembre 2024",
      description: (
        <div>
          Transformation et amélioration d&apos;outils internes pour les équipes
          de développement de jeux vidéo du studio, en utilisant C# et .NET.
          <ul className="list-disc pl-6 mt-2">
            <li>Ajout de précisions dans les données fournies.</li>
            <li>
              Mise en place de tests unitaires pour chaque fonctionnalité
              développée, garantissant la robustesse et la fiabilité du code.
            </li>
            <li>
              Idéation d&apos;un nouveau système de réponse d&apos;une API,
              accélérant le fonctionnement des outils.
            </li>
          </ul>
        </div>
      ),
      image: ubisoft,
      skills: [
        { icon: "skill-icons:cs", name: "C#" },
        { icon: "skill-icons:git", name: "Git" },
      ],
      Chips: [{ name: "Tests unitaires" }, { name: "Tests d'intégration" }],
    },
    {
      company: "LIRMM - CNRS/Université de Montpellier",
      title: "Developpeur Fullstack React",
      date: "Avril 2023 - Août 2024",
      description: (
        <div>
          Implémentation d&apos;un terminal UNIX personnalisable dans
          l&apos;application web pour améliorer l&apos;interaction utilisateur.
          <ul className="list-disc pl-6 mt-2">
            <li>
              Optimisation des performances de l&apos;application en utilisant
              de la Mémoisation et du lazy loading sur le fonctionnement du
              terminal.
            </li>
            <li>
              Mise en place d&apos;un système de test end-to-end (E2E) avec
              CypressJS pour renforcer la pipeline CI/CD et garantir la qualité
              des déploiements.
            </li>
            <li>
              Contribution à l&apos;architecture en micro-services et conversion
              des anciens modules pour améliorer la scalabilité.
            </li>
          </ul>
        </div>
      ),
      image: lirmm,
      skills: [
        { icon: "skill-icons:react-dark", name: "React" },
        { icon: "skill-icons:typescript", name: "TypeScript" },
        { icon: "skill-icons:expressjs-light", name: "ExpressJS" },
        { icon: "simple-icons:minio", name: "MinIO" },
      ],
      Chips: [
        { name: "Tests end-to-end" },
        { name: "Tests unitaires" },
        { name: "Micro-services" },
        { name: "Mémoisation" },
      ],
    },
    {
      company: "Greenoxya",
      title: "Développeur Web C#",
      date: "Juin 2022 - Juillet 2023",
      description: (
        <div>
          Développement d&apos;une solution de visualisation, édition et
          filtrage de donnée en provenances de plusieurs bases de données
          <ul className="list-disc pl-6 mt-2">
            <li>
              Modification d&apos;une application web pour la visualisation et
              l&apos;édition de données provenant de plusieurs bases de données.
            </li>
            <li>
              Mise en place d&apos;un système de filtrage de données pour
              améliorer l&apos;expérience utilisateur.
            </li>
          </ul>
        </div>
      ),
      image: greenoxya,
      skills: [
        { icon: "skill-icons:cs", name: "C#" },
        { icon: "skill-icons:git", name: "Git" },
        { icon: "skill-icons:dotnet", name: ".NET Core" },
      ],
      Chips: [{ name: "Prise de décisions" }],
    },
  ];

  return (
    <motion.section
      className="mt-12 sm:mt-24 flex flex-col items-center justify-center gap-6 relative w-full"
      id="xp"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.39, 0.24, 0.3, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="max-w-7xl flex flex-col gap-8">
        <motion.h2
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
        >
          Mes expériences professionnelles
        </motion.h2>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-default-100 px-12 py-6 rounded-xl shadow-md gap-4 w-full"
          >
            <div className="flex max-lg:flex-col items-center gap-4">
              <div className="flex items-center justify-center w-64 h-64 aspect-square flex-shrink-0">
                <Image
                  alt={item.company}
                  className="bg-neutral-100 p-4 aspect-square object-contain"
                  src={item.image}
                />
              </div>
              <div className="w-64">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-md text-default-500">{item.company}</p>
                <p className="text-md text-default-400">{item.date}</p>
              </div>
              <Divider orientation="vertical" />
              <div className="flex-1 text-sm text-default-600">
                {item.description}
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {item.skills.map((elt, idx) => (
                <Tooltip
                  key={idx}
                  closeDelay={0}
                  content={elt.name}
                  delay={0}
                  placement="bottom"
                >
                  <Icon
                    className="inline-block hover:scale-105 transition-transform duration-300 ease-in-out"
                    height={48}
                    icon={elt.icon}
                    width={48}
                  />
                </Tooltip>
              ))}
              {item.Chips.map((chip, idx) => (
                <Chip
                  key={idx}
                  className=" hover:bg-default-300 transition-col
                  gap-2"
                  size="sm"
                  variant="solid"
                >
                  {chip.name}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
