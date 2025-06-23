export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Accueil",
      href: "#home",
      page: "/",
    },
    {
      label: "Mes Compétences",
      href: "#skills",
      page: "/",
    },
    {
      label: "Mes Expériences",
      href: "#xp",
      page: "/",
    },
    {
      label: "Mes Diplômes",
      href: "#education",
      page: "/",
    },
    {
      label: "Projets",
      href: "#projects",
      page: "/",
    },
    {
      label: "Contact",
      href: "#",
      page: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Compétences",
      href: "#skills",
    },
    {
      label: "Expériences",
      href: "#xp",
    },
    {
      label: "Formation",
      href: "#education",
    },
    {
      label: "Projets",
      href: "#projects",
    },
  ],
  links: {
    twitter: "https://twitter.com/unixyy",
    linkedin: "https://www.linkedin.com/in/unixyy/",
    github: "https://github.com/unixyy",
  },
};
