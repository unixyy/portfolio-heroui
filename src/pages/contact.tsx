import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "lucide:mail",
      label: "Email",
      value: "richard@polydev.fr",
      link: "mailto:richard@polydev.fr",
    },
    {
      icon: "lucide:phone",
      label: "Phone",
      value: "+33 6 13 60 42 12",
      link: "tel:+33613604212",
    },
    {
      icon: "lucide:map-pin",
      label: "Lieu",
      value: "Montpellier, France",
      link: "#",
    },
  ];

  return (
    <DefaultLayout>
      <section className="px-20 mt-12 relative" id="contact">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: [0.39, 0.24, 0.3, 1],
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="section-heading">
              <span className="bg-clip-text text-transparent text-2xl bg-gradient-to-r from-secondary-400 to-secondary-600">
                Contactez-Moi
              </span>
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Vous avez un projet sur lequel vous souhaitez discuter ou
              simplement une question ?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Où me contacter</h3>
              <p className="text-foreground-500 mb-8">
                N&apos;hésitez pas à me contacter via n&apos;importe laquelle
                des méthodes suivantes. Je suis toujours ouvert à discuter de
                nouveaux projets, d&apos;idées créatives ou d&apos;opportunités
                de votre vision.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    className="flex items-center gap-4 p-4 bg-content2 rounded-lg hover:bg-content3 transition-colors border border-transparent hover:border-secondary-500/30"
                    href={item.link}
                  >
                    <div className="p-3 bg-secondary-500/10 rounded-full">
                      <Icon
                        className="text-secondary-500"
                        icon={item.icon}
                        width={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-500">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Me retrouver sur les réseaux
              </h3>
              <div className="flex gap-4">
                <Button
                  isIconOnly
                  aria-label="Github"
                  as={Link}
                  href="https://github.com/unixyy"
                  target="_blank"
                  type="button"
                >
                  <Icon icon="logos:github-icon" width={24} />
                </Button>
                <Button
                  isIconOnly
                  aria-label="LinkedIn"
                  as={Link}
                  href="https://linkedin.com/in/unixyy"
                  target="_blank"
                  type="button"
                >
                  <Icon icon="logos:linkedin-icon" width={24} />
                </Button>
                <Button
                  isIconOnly
                  aria-label="Twitter"
                  as={Link}
                  href="https://twitter.com/unixy_"
                  target="_blank"
                  type="button"
                >
                  <Icon icon="logos:twitter" width={24} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
