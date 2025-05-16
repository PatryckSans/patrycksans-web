export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
}

// Dados simulados de projetos
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Uma plataforma de e-commerce completa com carrinho de compras, pagamentos e painel de administração.",
    image: "https://via.placeholder.com/300x200?text=E-commerce+Project",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubUrl: "https://github.com/username/ecommerce-project",
    demoUrl: "https://ecommerce-demo.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, categorias e lembretes.",
    image: "https://via.placeholder.com/300x200?text=Task+Manager",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    githubUrl: "https://github.com/username/task-manager",
    demoUrl: "https://task-manager-demo.example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard de previsão do tempo que exibe dados meteorológicos de várias cidades com gráficos interativos.",
    image: "https://via.placeholder.com/300x200?text=Weather+App",
    technologies: ["React", "Chart.js", "OpenWeather API", "Styled Components"],
    githubUrl: "https://github.com/username/weather-dashboard",
    demoUrl: "https://weather-app-demo.example.com"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plataforma de blog com editor rich text, comentários e sistema de autenticação.",
    image: "https://via.placeholder.com/300x200?text=Blog+Platform",
    technologies: ["Next.js", "MongoDB", "AWS S3", "Tailwind CSS"],
    githubUrl: "https://github.com/username/blog-platform",
    demoUrl: "https://blog-demo.example.com",
    featured: true
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Aplicativo para rastreamento de exercícios físicos, nutrição e progresso pessoal.",
    image: "https://via.placeholder.com/300x200?text=Fitness+Tracker",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    githubUrl: "https://github.com/username/fitness-tracker",
    demoUrl: "https://fitness-app-demo.example.com"
  },
  {
    id: 6,
    title: "Movie Database",
    description: "Aplicação web para busca e descoberta de filmes e séries com avaliações e recomendações.",
    image: "https://via.placeholder.com/300x200?text=Movie+Database",
    technologies: ["React", "TMDb API", "CSS Modules", "Context API"],
    githubUrl: "https://github.com/username/movie-database",
    demoUrl: "https://movie-db-demo.example.com"
  }
];