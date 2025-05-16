export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: 'Desenvolvedor Full Stack Senior',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Presente',
    description: 'Lidero o desenvolvimento de aplicações web de alta performance utilizando React, Node.js e TypeScript. Responsável pela arquitetura de sistemas, implementação de CI/CD e mentoria de desenvolvedores júnior.'
  },
  {
    title: 'Desenvolvedor Front-end',
    company: 'Digital Innovations',
    period: 'Mar 2020 - Dez 2021',
    description: 'Desenvolvimento de interfaces responsivas e acessíveis com React e Material UI. Implementação de testes automatizados e integração com APIs RESTful.'
  },
  {
    title: 'Desenvolvedor Web',
    company: 'Creative Web Agency',
    period: 'Jun 2018 - Fev 2020',
    description: 'Criação de sites e aplicações web utilizando HTML, CSS, JavaScript e WordPress. Otimização de performance e SEO para diversos clientes.'
  },
  {
    title: 'Estagiário de Desenvolvimento',
    company: 'StartUp Tech',
    period: 'Jan 2017 - Mai 2018',
    description: 'Suporte no desenvolvimento de aplicações web, correção de bugs e implementação de novas funcionalidades sob supervisão.'
  }
];