# FSW Donalds

Este é um projeto desenvolvido com **Next.js** e **Prisma ORM**, utilizando **Tailwind CSS** e bibliotecas auxiliares para criação de uma aplicação web moderna. O projeto foi projetado para ser modular e flexível, com foco em uma boa experiência de usuário e performance.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org)**: Framework React para construção de aplicações web com foco em renderização do lado do servidor e otimização de performance.
- **[Prisma ORM](https://www.prisma.io)**: ORM moderno e rápido para Node.js, utilizado para interagir com bancos de dados de forma eficiente.
- **[Docker](https://www.docker.com/)**: Plataforma para criar, implantar e executar aplicações em containers.
- **[Tailwind CSS](https://tailwindcss.com)**: Framework CSS utilitário que permite estilizar rapidamente a interface de forma flexível.
- **[Radix UI](https://www.radix-ui.com)**: Conjunto de componentes de UI acessíveis e de alta qualidade.
- **[Lucide React](https://lucide.dev)**: Biblioteca de ícones para React, com ícones flexíveis e configuráveis.
- **[Class Variance Authority](https://github.com/nextui-org/class-variance-authority)**: Ferramenta para auxiliar na criação de componentes reutilizáveis com Tailwind CSS.
- **[Tailwind CSS Animate](https://github.com/rodneyfolz/tailwindcss-animate)**: Extensão para animações de classe no Tailwind CSS.
- **[React Hook Form](https://react-hook-form.com/)**: Biblioteca para gerenciamento de formulários de forma eficiente e performática.
- **[Zod](https://zod.dev/)**: Biblioteca para validação de schemas TypeScript-first.
- **[React Number Format](https://github.com/s-yadav/react-number-format)**: Biblioteca para formatação de números e campos de entrada.
- **[Vaul](https://github.com/emilkowalski/vaul)**: Biblioteca de animações para modais e transições.

## 🚀 Começando

Siga as instruções abaixo para configurar o ambiente de desenvolvimento e rodar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/matheusscarvalho1/fsw-donalds.git
cd fsw-donalds
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Suba o ambiente com Docker

Antes de rodar a aplicação, suba o ambiente com Docker:

```bash
docker-compose up -d
```

### 4. Configure o Banco de Dados

- Crie um arquivo `.env` na raiz do projeto com a string de conexão do seu banco de dados:

```env
DATABASE_URL="sua-string-de-conexao-docker-aqui"
```

- Rode as migrações e seed do banco de dados:

```bash
npx prisma migrate dev
npm run prisma:seed
```

### 5. Rode o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🛠️ Scripts

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria a versão otimizada para produção.
- `start`: Inicia o servidor de produção.
- `lint`: Executa o linter para garantir a consistência do código.
- `prisma:seed`: Executa a seed do banco de dados usando o script definido em `prisma/seed.ts`.

## 📚 Dependências

### **Dependências Principais**

- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**: Integração entre React Hook Form e bibliotecas de validação como Zod.
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client)**: Cliente para interagir com o banco de dados usando o Prisma ORM.
- **[@radix-ui/react-dialog](https://www.radix-ui.com)**: Componente de modal acessível.
- **[@radix-ui/react-label](https://www.radix-ui.com)**: Componente de label acessível.
- **[@radix-ui/react-scroll-area](https://www.radix-ui.com)**: Componente de área de rolagem acessível.
- **[@radix-ui/react-slot](https://www.radix-ui.com)**: Sistema de slots para componentes Radix.
- **[class-variance-authority](https://www.npmjs.com/package/class-variance-authority)**: Ferramenta para gerir variações de classe CSS.
- **[clsx](https://www.npmjs.com/package/clsx)**: Utilitário para condicionalmente aplicar classes CSS.
- **[lucide-react](https://lucide.dev)**: Biblioteca de ícones flexíveis para React.
- **[react-hook-form](https://react-hook-form.com/)**: Gerenciamento de formulários eficiente.
- **[react-number-format](https://github.com/s-yadav/react-number-format)**: Formatação de números.
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Utilitário para mesclar classes Tailwind CSS.
- **[tailwindcss-animate](https://github.com/rodneyfolz/tailwindcss-animate)**: Para animações com Tailwind CSS.
- **[vaul](https://github.com/emilkowalski/vaul)**: Biblioteca de animações para modais e transições.
- **[zod](https://zod.dev/)**: Biblioteca para validação de schemas.

### **Dependências de Desenvolvimento**

- **[@eslint/eslintrc](https://www.npmjs.com/package/@eslint/eslintrc)**: Configuração do ESLint.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Tipagem para Node.js.
- **[@types/react](https://www.npmjs.com/package/@types/react)**: Tipagem para React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: Tipagem para React DOM.
- **[eslint](https://eslint.org)**: Linter para qualidade do código.
- **[eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)**: Plugin para organizar importações.
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**: Plugin do Prettier para ordenar classes Tailwind.
- **[ts-node](https://www.npmjs.com/package/ts-node)**: Executa código TypeScript diretamente.
- **[typescript](https://www.typescriptlang.org)**: Superset do JavaScript para fornecer tipagem estática.

## 🎯 Objetivo do Projeto

Criar uma plataforma eficiente e escalável, utilizando as melhores práticas de desenvolvimento moderno para criar uma **experiência de usuário agradável**, garantindo **segurança, desempenho e flexibilidade**.

