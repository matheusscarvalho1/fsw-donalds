# FSW Donalds

![image](https://github.com/user-attachments/assets/5f0da6b3-32c8-4f0d-b31d-d8b77157212a)

Este é um projeto desenvolvido com **Next.js** e **Prisma ORM**, utilizando **Tailwind CSS** e bibliotecas auxiliares para criação de uma aplicação web moderna. O projeto foi projetado para ser modular e flexível, com foco em uma boa experiência de usuário e performance, totalmente responsiva.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org)**: Framework React para construção de aplicações web com foco em renderização do lado do servidor e otimização de performance.
- **[Prisma ORM](https://www.prisma.io)**: ORM moderno e rápido para Node.js, utilizado para interagir com bancos de dados de forma eficiente.
- **[Docker](https://www.docker.com/)**: Plataforma para criar, implantar e executar aplicações em containers.
- **[Tailwind CSS](https://tailwindcss.com)**: Framework CSS utilitário que permite estilizar rapidamente a interface de forma flexível.
- **[Radix UI](https://www.radix-ui.com)**: Conjunto de componentes de UI acessíveis e de alta qualidade.
- **[shadcn UI / Lucide React](https://ui.shadcn.com)**: Biblioteca de ícones para React, com ícones flexíveis e configuráveis.
- **[React Hook Form](https://react-hook-form.com/)**: Biblioteca para gerenciamento de formulários de forma eficiente e performática.
- **[Zod](https://zod.dev/)**: Biblioteca para validação de schemas TypeScript-first.
- **[React Number Format](https://github.com/s-yadav/react-number-format)**: Biblioteca para formatação de números e campos de entrada.

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

- Crie um arquivo `.env` na raiz do projeto com a string de conexão do seu banco de dados com base nos dados da sua imagem do docker no arquivo `docker-compose.yml`:

```env
DATABASE_URL="sua-string-de-conexao-docker-aqui"
```

- Rode as migrações e seed do banco de dados:

```bash
npx prisma migrate dev
npx prisma db seed
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
- **[lucide-react](https://lucide.dev)**: Biblioteca de ícones flexíveis para React.
- **[react-hook-form](https://react-hook-form.com/)**: Gerenciamento de formulários eficiente.
- **[react-number-format](https://github.com/s-yadav/react-number-format)**: Formatação de números.
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

## 📱 Resultados
Para acessar a aplicação, basta acessar a rota '/fsw-donalds'
 ### Desktop
 #### Menu
 - No menu é possível observar que a opção do pedido é passada via params para depois registrar na finalização do pedido se o cliente que comer no local ou levar o lanche:
 ![image](https://github.com/user-attachments/assets/c492e7d0-f573-47b9-9097-f7742d7bec65)
- Além disso é possível ver as categorias do restaurante: 'Combos', 'Lanches', 'Fritas', 'Bebidas' e 'Sobremesas'
- 'Combos'
  ![image](https://github.com/user-attachments/assets/7f34f9c3-4512-446b-ab8e-e9a7b15e923e)
- 'Lanches'
 ![image](https://github.com/user-attachments/assets/15ee9e81-b5ea-4888-b109-fa1d42374d60)
- 'Fritas'
  ![image](https://github.com/user-attachments/assets/af665eee-df68-4c51-ab5d-7c95e325d5a2)
- 'Bebidas'
  ![image](https://github.com/user-attachments/assets/d7ba9f98-9227-4bfd-9772-32e9f00a3eab)
- 'Sobremesas'
 ![image](https://github.com/user-attachments/assets/26816600-321e-4e40-a33c-464b71a3b4ef)

#### Carrinho
- Ao escolher lanche e clicar nele, irá abrir a página ndo lanche com sua descrição e ingredientes para adicionar ao carrinho:
![image](https://github.com/user-attachments/assets/f6971076-a1f7-48dc-b262-a360097fe803)
![image](https://github.com/user-attachments/assets/5c8d5e2c-4f75-4962-b80f-50ab8fd8959f)
- Com o lanche já adicionado ao carrinho, caso o cliente queira adicionar mais produtos ao carrinho irá aparecer um 'preview' para saber os itens que ja está no carrinho anteriormente:
  ![image](https://github.com/user-attachments/assets/bc50a723-438e-4905-97f9-dc1e476682b2)
- Adicionando duas sobremesas ao pedido:
![image](https://github.com/user-attachments/assets/626eaccc-7fed-4382-8bdd-a631fdeea697)
- Ao finalizar o pedido, abrirá um dialog para adicionar o CPF do cliente para poder acompanhar o seu pedido posteriormente:
  ![image](https://github.com/user-attachments/assets/1ed2870d-41ee-4fc4-a3fe-28f845054055)
- Gerando um CPF aleatório pelo **[4devs]([https://tailwindcss.com](https://www.4devs.com.br/gerador_de_cpf))**, adicionei o pedido em meu nome e o CPF gerado.
 ![image](https://github.com/user-attachments/assets/85e22a3d-0c0f-4adc-bf65-61c872523449)
- Ao finalizar o pedido, o cliente será redirecionado para a página de acompanhamento com o status do pedido:
  ![image](https://github.com/user-attachments/assets/374e09ab-ae1f-4c7d-85f0-7900cdc66c6a)
- Ao voltar para a tela dos produtos é possível ver o pedido clicando no icone de pedidos no canto superior direito da tela, informando o CPF do pedido registrado anteriormente:
![image](https://github.com/user-attachments/assets/d33c1c60-f63c-440c-a286-ff7f9ad11f73)
- Registro do pedido no prisma studio 
![image](https://github.com/user-attachments/assets/9e6b60c3-e3c8-4b66-86b9-e18ab589cdbe)





## Próximos passos

Seria interessante a implementação de uma integração com uma plataforma de pagamento feita por pix, para aumentar as opções para os clientes.

## Autor

<b>Matheus de Souza Carvalho</b>

Linkedin:
https://www.linkedin.com/in/matheusscarvalho/

E-mail:
matheusdocarvalho@gmail.com


