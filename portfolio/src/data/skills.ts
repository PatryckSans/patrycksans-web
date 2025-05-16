export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5, onde 5 é o mais alto
  category: "frontend" | "backend" | "database" | "devops" | "tools" | "other";
}

export const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: "typescript",
    level: 5,
    category: "frontend",
  },
  {
    name: "React",
    icon: "react",
    level: 5,
    category: "frontend",
  },
  {
    name: "HTML5",
    icon: "html5",
    level: 5,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    level: 5,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "css3",
    level: 4,
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    level: 4,
    category: "backend",
  },
  {
    name: "AWS",
    icon: "aws",
    level: 3,
    category: "devops",
  },
  {
    name: "Material UI",
    icon: "materialui",
    level: 5,
    category: "frontend",
  },
  {
    name: "Express",
    icon: "express",
    level: 4,
    category: "backend",
  },
  {
    name: "Python",
    icon: "python",
    level: 2,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: 2,
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    level: 2,
    category: "database",
  },
  {
    name: "Docker",
    icon: "docker",
    level: 3,
    category: "devops",
  },
  {
    name: "Git",
    icon: "git",
    level: 5,
    category: "tools",
  },
];
