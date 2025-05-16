export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null significa "até o presente"
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'certification';
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack Senior",
    company: "Tech Solutions Inc.",
    location: "São Paulo, Brasil",
    startDate: "Jan 2022",
    endDate: null,
    description: [
      "Desenvolvimento e manutenção de aplicações web utilizando React, Node.js e MongoDB",
      "Liderança técnica de uma equipe de 5 desenvolvedores",
      "Implementação de CI/CD com GitHub Actions e AWS",
      "Otimização de performance que resultou em 40% de melhoria no tempo de carregamento"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    type: "work"
  },
  {
    id: 2,
    title: "Desenvolvedor Front-end",
    company: "Digital Innovations",
    location: "Rio de Janeiro, Brasil",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: [
      "Desenvolvimento de interfaces de usuário responsivas com React e Material UI",
      "Implementação de testes automatizados com Jest e React Testing Library",
      "Colaboração com designers para criar experiências de usuário intuitivas",
      "Integração com APIs RESTful e GraphQL"
    ],
    technologies: ["React", "TypeScript", "Material UI", "Jest", "GraphQL"],
    type: "work"
  },
  {
    id: 3,
    title: "Desenvolvedor Web Júnior",
    company: "StartUp Ventures",
    location: "Belo Horizonte, Brasil",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: [
      "Desenvolvimento de aplicações web com JavaScript, HTML e CSS",
      "Manutenção e atualização de sites existentes",
      "Implementação de designs responsivos",
      "Colaboração em projetos ágeis com sprints semanais"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
    type: "work"
  },
  {
    id: 4,
    title: "Bacharelado em Ciência da Computação",
    company: "Universidade Federal do Brasil",
    location: "São Paulo, Brasil",
    startDate: "Jan 2014",
    endDate: "Dec 2017",
    description: [
      "Foco em desenvolvimento de software e algoritmos",
      "Projeto de conclusão: Sistema de recomendação baseado em machine learning",
      "Participação em maratona de programação",
      "Bolsista de iniciação científica em computação gráfica"
    ],
    technologies: ["Java", "Python", "C++", "Algorithms", "Data Structures"],
    type: "education"
  },
  {
    id: 5,
    title: "AWS Certified Developer - Associate",
    company: "Amazon Web Services",
    location: "Online",
    startDate: "Sep 2021",
    endDate: "Sep 2024",
    description: [
      "Certificação que valida conhecimentos em desenvolvimento e manutenção de aplicações na AWS",
      "Competências em serviços como Lambda, DynamoDB, S3, EC2 e outros"
    ],
    technologies: ["AWS", "Lambda", "DynamoDB", "S3", "EC2"],
    type: "certification"
  },
  {
    id: 6,
    title: "React Developer Certification",
    company: "Meta (Facebook)",
    location: "Online",
    startDate: "Mar 2022",
    endDate: "Mar 2025",
    description: [
      "Certificação oficial da Meta para desenvolvimento com React",
      "Abrange conceitos avançados como hooks, context API, e performance"
    ],
    technologies: ["React", "Redux", "React Router", "Hooks", "Context API"],
    type: "certification"
  }
];