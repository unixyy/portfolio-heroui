import { motion } from "framer-motion";
import { Image, Link } from "@heroui/react";

import luqse from "/luqse.jpg";
import richardlogo from "/richardlogo.svg";
import SpotlightCard from "./reactbits/Components/SpotlightCard/SpotlightCard";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Projects() {
  const items = [
    {
      title: "Mon portfolio",
      image: richardlogo,
      link: "https://polydev.fr/",
      description: (
        <div className="">
          Mon portfolio personnel, après beaucoup de débats internes sur les
          librairies à utiliser, j&apos;ai retrouvé la motivation en découvrant
          HeroUI :D C&apos;est une application React utilisant Tailwind CSS et
          HeroUI, avec avec touche de Framer Motion pour les animations. Le code
          est disponible sur mon github en public
        </div>
      ),
    },
    {
      title: "Compétition Luqse 2024",
      image: luqse,
      link: "https://espor-ts-new.vercel.app/",
      description: (
        <div>
          J&apos;ai eu l&apos;opportunité de réaliser le site web de la
          compétition 2024, un événement ayant réuni plus de 150 participants au
          l&apos;ÉTS Montréal. J&apos;ai effectué aussi la majorité des choix de
          design. Le projet utilise React et est une Single Page App (SPA)
        </div>
      ),
    },
  ];

  return (
    <section
      className="mt-12 sm:mt-24 flex flex-col items-center justify-center gap-6 relative"
      id="projects"
    >
      <motion.h2
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.39, 0.24, 0.3, 1], delay: 1 }}
      >
        Mes projets
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-sm:flex-wrap justify-star items-start gap-8 lg:gap-12">
        {items.map((item) => (
          <Link
            key={item.title}
            isExternal
            className="h-full"
            color="foreground"
            href={item.link}
          >
            <SpotlightCard
              className={`h-full flex flex-col md:w-96 justify-start bg-neutral-100 border-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 hover:scale-110 transition-transform duration-300 ease-in-out`}
              spotlightColor="rgba(246, 246, 246, 0.4)"
            >
              <div className="flex flex-col items-center justify-center lg:mt-8">
                <Image
                  alt={`${item.title} Logo`}
                  className="bg-white"
                  height={256}
                  src={item.image}
                  width={256}
                />
              </div>
              <div className="text-wrap flex flex-col gap-2 justify-start">
                <h2 className="text-2xl font-bold text-center mt-4">
                  {item.title}{" "}
                  <Icon className="inline-block ml-2" icon="ci:external-link" />
                </h2>
                <div className="flex text-sm text-default-600 p-2">
                  {item.description}
                </div>
              </div>
            </SpotlightCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
