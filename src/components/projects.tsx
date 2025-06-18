import { motion } from "framer-motion";
import { Image } from "@heroui/react";

import luqse from "/luqse.jpg";
import richardlogo from "/richardlogo.svg";

export default function Projects() {
  const items = [
    {
      title: "Mon portfolio",
      image: richardlogo,
      link: "https://reactbits.dev",
      description: (
        <div>
          Mon portfolio personnel, après beaucoup de débats internes sur les
          librairies front à utiliser, j&apos;ai retrouvé la motivation en
          découvrant HeroUI :D{" "}
        </div>
      ),
    },
    {
      title: "Compétition Luqse 2024",
      image: luqse,
      link: "https://espor-ts-new.vercel.app/",
      desc: "Bibliothèque de composants React open source pour les applications web",
    },
  ];

  return (
    <section
      className="sm:mt-24 flex flex-col items-center justify-center gap-6 relative"
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
      <div className="flex max-sm:flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex bg-default-100 px-6 py-6 rounded-xl shadow-md gap-4 w-fit"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-64 h-64 aspect-square flex-shrink-0">
                <Image
                  alt={item.title}
                  className="bg-neutral-100 p-4 aspect-square object-contain"
                  src={item.image}
                />
              </div>
              <div className="flex flex-col w-64 h-full gap-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="flex-1 text-sm text-default-600">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
