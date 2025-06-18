import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Thank you for your message! I'll get back to you soon.");
    }, 1500);
  };

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
      <section className="px-20 relative" id="contact">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Où me contacter</h3>
              <p className="text-foreground-500 mb-8">
                Feel free to reach out through any of the following channels.
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
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
                      <p className="text-sm text-foreground-500">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Me retrouver sur les réseaux
              </h3>
              <div className="flex gap-4">
                <button
                  aria-label="GitHub"
                  className="p-3 bg-content2 rounded-full hover:bg-content3 transition-colors border border-transparent hover:border-secondary-500"
                  type="button"
                >
                  <Icon icon="logos:github-icon" width={24} />
                </button>
                <button
                  aria-label="LinkedIn"
                  className="p-3 bg-content2 rounded-full hover:bg-content3 transition-colors border border-transparent hover:border-secondary-500"
                  type="button"
                >
                  <Icon icon="logos:linkedin-icon" width={24} />
                </button>
                <button
                  aria-label="Twitter"
                  className="p-3 bg-content2 rounded-full hover:bg-content3 transition-colors border border-transparent hover:border-secondary-500"
                  type="button"
                >
                  <Icon icon="logos:twitter" width={24} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="border-none bg-content2">
                <CardBody className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">
                    Envoyez-moi un message
                  </h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <Input
                      isRequired
                      label="Name"
                      name="name"
                      placeholder="Your name"
                      type="text"
                      value={formState.name}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Input
                      isRequired
                      label="Email"
                      name="email"
                      placeholder="your.email@example.com"
                      type="email"
                      value={formState.email}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Input
                      label="Subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      type="text"
                      value={formState.subject}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Textarea
                      isRequired
                      label="Message"
                      minRows={4}
                      name="message"
                      placeholder="Your message here..."
                      value={formState.message}
                      variant="bordered"
                      onChange={handleChange}
                    />
                    <Button
                      className="w-full gold-glow"
                      color="secondary"
                      isLoading={isSubmitting}
                      startContent={
                        !isSubmitting && <Icon icon="lucide:send" width={18} />
                      }
                      type="submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
