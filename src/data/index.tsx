import {
  FaDiscord,
  FaEnvelope,
  FaFolder,
  FaGithub,
  FaLinkedin,
  FaQuoteLeft,
  FaUserGroup,
} from "react-icons/fa6";

export const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FaUserGroup />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaFolder />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: <FaQuoteLeft />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope />,
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://l.arthur404.dev/forja-github",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://l.arthur404.dev/forja-linkedin",
    icon: <FaLinkedin />,
  },
  {
    name: "Discord",
    link: "https://l.arthur404.dev/forja-discord",
    icon: <FaDiscord />,
  },
];
