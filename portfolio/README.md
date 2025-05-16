# Portfólio Pessoal

Este é um site de portfólio pessoal desenvolvido com React, Material UI e CSS Modules, seguindo a metodologia Atomic Design.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Material UI v5
- CSS Modules
- React Router v6
- Framer Motion (para animações)
- React Helmet (para SEO)

## Estrutura do Projeto (Atomic Design)

O projeto segue a metodologia Atomic Design, que divide os componentes em cinco categorias:

1. **Átomos**: Componentes básicos e indivisíveis
   - Botões, Inputs, Títulos, etc.

2. **Moléculas**: Grupos de átomos que funcionam juntos
   - Cards de Projeto, Formulário de Contato, etc.

3. **Organismos**: Grupos de moléculas que formam seções complexas
   - Seção de Projetos, Seção Sobre, etc.

4. **Templates**: Estruturas de página que organizam os organismos
   - Layout Principal

5. **Páginas**: Instâncias específicas de templates
   - Home, Sobre, Projetos, etc.

## Funcionalidades

- Design responsivo para todos os dispositivos
- Modo claro/escuro
- Animações suaves com Framer Motion
- Navegação entre páginas com React Router
- Formulário de contato funcional
- Exibição de projetos com filtragem por tecnologia
- Seção de habilidades com categorias
- Timeline de experiências profissionais e formação acadêmica

## Como Executar o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/portfolio.git
   ```

2. Instale as dependências:
   ```
   cd portfolio
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```
   npm start
   ```

4. Para criar uma versão de produção:
   ```
   npm run build
   ```

## Personalização

Para personalizar o site com suas informações:

1. Edite os arquivos em `src/data` para incluir seus projetos, habilidades e experiências
2. Substitua as imagens em `src/assets/images`
3. Ajuste as cores e estilos no tema em `src/theme/theme.ts`
4. Atualize os textos e informações de contato em cada componente

## Estrutura de Arquivos

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── data/
├── hooks/
├── pages/
├── theme/
└── utils/
```

## Licença

MIT