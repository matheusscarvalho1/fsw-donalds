# FSW Donalds

Este é um projeto desenvolvido com **Next.js** e **Prisma ORM**, utilizando **Tailwind CSS** e bibliotecas auxiliares para criação de uma aplicação web moderna. O projeto foi projetado para ser modular e flexível, com foco em uma boa experiência de usuário e performance.

## 🔧 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org)**: Framework React para construção de aplicações web com foco em renderização do lado do servidor e otimização de performance.
- **[Prisma ORM](https://www.prisma.io)**: ORM moderno e rápido para Node.js, utilizado para interagir com bancos de dados de forma eficiente.
- **[Tailwind CSS](https://tailwindcss.com)**: Framework CSS utilitário que permite estilizar rapidamente a interface de forma flexível.
- **[Radix UI](https://www.radix-ui.com)**: Conjunto de componentes de UI acessíveis e de alta qualidade.
- **[Lucide React](https://lucide.dev)**: Biblioteca de ícones para React, com ícones flexíveis e configuráveis.
- **[Class Variance Authority](https://github.com/nextui-org/class-variance-authority)**: Ferramenta para auxiliar na criação de componentes reutilizáveis com Tailwind CSS.
- **[Tailwind CSS Animate](https://github.com/rodneyfolz/tailwindcss-animate)**: Extensão para animações de classe no Tailwind CSS.

## 🚀 Começando

Siga as instruções abaixo para configurar o ambiente de desenvolvimento e rodar o projeto localmente.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fsw-donalds.git
cd fsw-donalds
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Banco de Dados

Antes de rodar a aplicação, você precisa configurar o banco de dados.

- Crie um arquivo `.env` na raiz do projeto com a string de conexão do seu banco de dados:

```env
DATABASE_URL="sua-string-de-conexao-prisma-aqui"
```

- Rode as migrações e seed do banco de dados:

```bash
npx prisma migrate dev
npm run prisma seed
```

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🛠 Scripts

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Cria a versão otimizada para produção.
- `start`: Inicia o servidor de produção.
- `lint`: Executa o linter para garantir a consistência do código.
- `prisma:seed`: Executa a semente do banco de dados usando o script definido em `prisma/seed.ts`.

## 📦 Dependências

### **Dependências Principais**

- **[@prisma/client](https://www.npmjs.com/package/@prisma/client)**: Cliente para interagir com o banco de dados usando o Prisma ORM.
- **[Radix UI](https://www.radix-ui.com)**: Para componentes acessíveis, como áreas de rolagem e slots de componentes.
- **[clsx](https://www.npmjs.com/package/clsx)**: Utilitário para condicionalmente aplicar classes CSS.
- **[lucide-react](https://lucide.dev)**: Biblioteca de ícones flexíveis para React.
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Utilitário para mesclar classes Tailwind CSS.
- **[tailwindcss-animate](https://github.com/rodneyfolz/tailwindcss-animate)**: Para animações com Tailwind CSS.

### **Dependências de Desenvolvimento**

- **[eslint](https://eslint.org)**: Linter para garantir a qualidade do código.
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)**: Plugin do Prettier para ordenar classes Tailwind automaticamente.
- **[tailwindcss](https://tailwindcss.com)**: Framework CSS utilitário para estilização rápida.
- **[ts-node](https://www.npmjs.com/package/ts-node)**: Executa código TypeScript diretamente sem a necessidade de transpilar.
- **[typescript](https://www.typescriptlang.org)**: Superset do JavaScript para fornecer tipagem estática.

## 📋 Estrutura do Projeto

- `pages/`: Contém as páginas da aplicação (padrão do Next.js).
- `prisma/`: Contém o esquema e scripts para o banco de dados, incluindo as migrações e seed.
- `components/`: Contém componentes reutilizáveis da interface.
- `styles/`: Contém os arquivos CSS, incluindo o Tailwind CSS.

## 🎯 Objetivo do Projeto

O objetivo principal do **FSW Donalds** é criar uma plataforma eficiente e escalável, utilizando as melhores práticas de desenvolvimento moderno para criar uma **experiência de usuário agradável**, além de garantir **segurança, desempenho e flexibilidade**. 
