import { Button, Snippet } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import pdp from "/pdp.jpg";

import { Link } from "@heroui/link";

import { HeartFilledIcon } from "./icons";

export default function Hero() {
  const EmailIcon = (
    <Icon
      className="inline align-text-bottom mr-2"
      icon="mdi:email-outline"
      width={18}
    />
  );

  return (
    <section
      className="xl:h-[80vh] flex items-center justify-center relative"
      id="home"
    >
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          >
            <p className="text-warning-600 font-medium mb-2">
              Hey ! moi c&apos;est
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Richard Martin
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-foreground-500">
              Ingénieur Fullstack et passionné de design
            </h2>
            <p className="text-foreground-500 font-light mb-8 max-w-lg">
              Développer Fullstack passionné par les défis techniques et la
              création d&apos;expériences utilisateur. J&apos;adore apprendre de
              nouvelles technologies et échanger mes connaissances avec
              d&apos;autres personnes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Snippet
                className="text-foreground-500"
                size="lg"
                symbol={EmailIcon}
              >
                richard@polydev.fr
              </Snippet>
              <div className="flex gap-4">
                <Button
                  as={Link}
                  className="font-medium gold-glow"
                  color="secondary"
                  endContent={<Icon icon="lucide:arrow-right" width={18} />}
                  href="#projects"
                  size="lg"
                  variant="shadow"
                >
                  Voir mes projets
                </Button>
                <Button
                  as={Link}
                  className="font-medium"
                  endContent={<HeartFilledIcon className="text-danger" />}
                  href="/contact"
                  size="lg"
                  variant="flat"
                >
                  Contact
                </Button>
              </div>
            </div>
            <div className="mt-6 ml-2 flex items-center gap-6">
              <Link
                aria-label="LinkedIn"
                href="https://linkedin.com/in/unixyy"
                target="_blank"
              >
                <Icon
                  className="hover:scale-110 transition-transform"
                  icon="logos:linkedin-icon"
                  width={24}
                />
              </Link>
              <Link
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
              >
                <Icon
                  className="hover:scale-110 transition-transform"
                  icon="logos:twitter"
                  width={24}
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full gold-gradient opacity-20 blur-2xl" />
              <div className="absolute inset-4 bg-content2 rounded-full overflow-hidden border-4 border-secondary-500/30">
                <img
                  alt="Richard Martin"
                  className="w-full h-full object-cover"
                  src={pdp}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-content1 p-4 rounded-lg shadow-lg border border-secondary-500/30 gold-glow">
                <p className="text-lg font-semibold">
                  <span className="text-secondary-500">
                    ~2 ans d&apos;xp 👾
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button
            isIconOnly
            aria-label="Scroll down"
            className="animate-bounce"
            variant="light"
            onPress={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Icon icon="lucide:chevron-down" width={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
