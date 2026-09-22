export type CompanyNavLink = {
  name: string;
  path: string;
  iconKey: "home" | "projects" | "hackend" | "about" | "experience" | "contact";
};

export const companyProfile = {
  name: "Sinenhlanhla Magubane",
  shortName: "SINENHLANHLA",
  role: "Software Developer • AI Builder • Data Enthusiast",
  tagline: "BUILDING SOFTWARE. EXPLORING AI. SHIPPING IDEAS.",
  email: import.meta.env.VITE_EMAIL || "",
  github: import.meta.env.VITE_GITHUB || "https://github.com/SineMag",
  linkedin: import.meta.env.VITE_LINKEDIN || "",
};

export const companyNavLinks: CompanyNavLink[] = [
  { name: "Projects", path: "#projects", iconKey: "projects" },
  { name: "Hackend Lab", path: "#hackend-lab", iconKey: "hackend" },
  { name: "About", path: "#about", iconKey: "about" },
  { name: "Experience", path: "#experience", iconKey: "experience" },
  { name: "Contact", path: "#contact", iconKey: "contact" },
];

export const serviceCards = [
  {
    title: "Full-stack product building",
    description:
      "From interface to backend, I like building complete product experiences that feel useful from day one.",
  },
  {
    title: "AI-powered experiences",
    description:
      "I explore AI interfaces, agents, automation and practical workflows that reduce friction for users.",
  },
  {
    title: "Data-driven experimentation",
    description:
      "I work across data, product thinking and experimentation to uncover useful patterns and prototypes.",
  },
  {
    title: "Hackathon product sprints",
    description:
      "I use fast, constrained builds to turn ideas into working prototypes and learn through shipping.",
  },
];

export const processSteps = [
  "Ideate",
  "Prototype",
  "Build",
  "Test",
  "Ship",
];
