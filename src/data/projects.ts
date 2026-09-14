export interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  status: "live" | "development";
  image?: string;
  iconKey: string;
}

export const projects: Project[] = [
  {
    name: "PenPad",
    description:
      "Note-taking application with categorization, search functionality, and markdown support for organized note management.",
    tech: ["React", "TypeScript", "LocalStorage", "CSS"],
    link: "https://penpad.onrender.com",
    status: "live",
    iconKey: "penpad",
  },
  {
    name: "BMI Calculator",
    description:
      "Body Mass Index calculator with a C++ backend service and clean web frontend for quick health checks.",
    tech: ["React", "TypeScript", "C++", "REST API"],
    link: "https://bmi-calculator-alba.onrender.com",
    status: "live",
    iconKey: "bmi",
  },
  {
    name: "AI Object Recognition",
    description:
      "Advanced AI-powered object recognition system with hand gesture analysis and real-time image processing capabilities.",
    tech: ["React", "Python", "AI/ML", "Computer Vision"],
    link: "https://ai-object-recognition.onrender.com",
    status: "live",
    iconKey: "vision",
  },
  {
    name: "Owami",
    description:
      "Owami is a mobile cooking and recipe application designed to help people discover recipes, create recipes from ingredients they already have, save their cooking history, share recipes and receive personalised recommendations.",
    tech: ["React Native", "TypeScript", "Mobile UX", "Recipe Intelligence"],
    status: "development",
    iconKey: "owami",
  },
];
