# FSW Donalds 🍔

![image](https://github.com/user-attachments/assets/5f0da6b3-32c8-4f0d-b31d-d8b77157212a)

Uma aplicação web moderna de delivery de fast-food desenvolvida com **Next.js 15**, **Prisma ORM** e **Stripe** para pagamentos. O projeto oferece uma experiência completa de pedidos online com carrinho de compras, acompanhamento de pedidos e integração com gateway de pagamento.

## 🚀 Tecnologias Principais

- **[Next.js 15](https://nextjs.org)** - Framework React com App Router e Server Actions
- **[Prisma ORM](https://www.prisma.io)** - ORM moderno para PostgreSQL
- **[Stripe](https://stripe.com)** - Gateway de pagamento integrado
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitário
- **[shadcn/ui](https://ui.shadcn.com)** - Biblioteca de componentes reutilizáveis
- **[Radix UI](https://www.radix-ui.com)** - Componentes acessíveis (base do shadcn/ui)
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript
- **[Docker](https://www.docker.com/)** - Containerização com PostgreSQL

## 🏗️ Arquitetura e Estratégias

### **Metodologias de Desenvolvimento**

- **Server-Side Rendering (SSR)** para melhor SEO e performance
- **Server Actions** para operações de backend sem APIs REST
- **Context API** para gerenciamento de estado global do carrinho
- **TypeScript** para tipagem estática e melhor DX
- **shadcn/ui** para componentes reutilizáveis e design system consistente
- **Radix UI** como base para componentes acessíveis e customizáveis

### **Estrutura do Banco de Dados**

- **PostgreSQL** como banco principal
- **Relacionamentos** entre Restaurante, Categorias, Produtos e Pedidos
- **Enums** para status de pedidos e método de consumo
- **Cascade deletion** para integridade referencial

## 🛠️ Configuração do Ambiente

### 1. Clone e Instale

```bash
git clone https://github.com/matheusscarvalho1/fsw-donalds.git
cd fsw-donalds
npm install
```

### 2. Configure o Banco de Dados

```bash
# Suba o PostgreSQL com Docker
docker-compose up -d

# Configure as variáveis de ambiente
cp .env.example .env
# Adicione: DATABASE_URL="postgresql://postgres:password@localhost:5432/app"
# Adicione: STRIPE_SECRET_KEY="sua_chave_stripe"

# Execute as migrações e seed
npx prisma migrate dev
npx prisma db seed
```

### 3. Execute o Projeto

```bash
npm run dev
```

Acesse: `http://localhost:3000/fsw-donalds`

## 📱 Funcionalidades Principais

### **Menu Interativo**

- Navegação por categorias (Combos, Lanches, Fritas, Bebidas, Sobremesas)
- Seleção de método de consumo (Dine-in/Takeaway)
- Visualização detalhada de produtos com ingredientes

### **Carrinho de Compras**

- Adição/remoção de produtos
- Controle de quantidades
- Preview em tempo real
- Cálculo automático de totais

### **Sistema de Pedidos**

- Validação de CPF
- Acompanhamento de status em tempo real
- Histórico de pedidos por CPF
- Integração com Stripe para pagamentos

### **Experiência do Usuário**

- Interface responsiva (Desktop/Mobile)
- Design system consistente com shadcn/ui
- Notificações toast com Sonner
- Loading states e feedback visual
- Validação de formulários com Zod
- Componentes acessíveis baseados em Radix UI

## 🎯 Resultados

### **Desktop / Mobile**

#### Menu Principal

![image](https://github.com/user-attachments/assets/c492e7d0-f573-47b9-9097-f7742d7bec65)

#### Categorias de Produtos

- **Combos**
  ![image](https://github.com/user-attachments/assets/7f34f9c3-4512-446b-ab8e-e9a7b15e923e)

- **Lanches**
  ![image](https://github.com/user-attachments/assets/15ee9e81-b5ea-4888-b109-fa1d42374d60)

- **Fritas**
  ![image](https://github.com/user-attachments/assets/af665eee-df68-4c51-ab5d-7c95e325d5a2)

- **Bebidas**
  ![image](https://github.com/user-attachments/assets/d7ba9f98-9227-4bfd-9772-32e9f00a3eab)

- **Sobremesas**
  ![image](https://github.com/user-attachments/assets/26816600-321e-4e40-a33c-464b71a3b4ef)

#### Detalhes do Produto

![image](https://github.com/user-attachments/assets/f6971076-a1f7-48dc-b262-a360097fe803)

#### Carrinho e Checkout

![image](https://github.com/user-attachments/assets/5c8d5e2c-4f75-4962-b80f-50ab8fd8959f)

![image](https://github.com/user-attachments/assets/bc50a723-438e-4905-97f9-dc1e476682b2)

![image](https://github.com/user-attachments/assets/626eaccc-7fed-4382-8bdd-a631fdeea697)

#### Finalização do Pedido

![image](https://github.com/user-attachments/assets/1ed2870d-41ee-4fc4-a3fe-28f845054055)

![image](https://github.com/user-attachments/assets/85e22a3d-0c0f-4adc-bf65-61c872523449)

#### Acompanhamento de Pedidos

![image](https://github.com/user-attachments/assets/374e09ab-ae1f-4c7d-85f0-7900cdc66c6a)

![image](https://github.com/user-attachments/assets/9e6b60c3-e3c8-4b66-86b9-e18ab589cdbe)

![image](https://github.com/user-attachments/assets/d33c1c60-f63c-440c-a286-ff7f9ad11f73)

![image](https://github.com/user-attachments/assets/25247a9f-17c5-4d9f-aa7c-e509013b340b)

![image](https://github.com/user-attachments/assets/b39768d0-ce7d-4249-be7f-d70b4304873c)

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🚀 Próximos Passos

- [ ] Integração com PIX
- [ ] Sistema de cupons de desconto
- [ ] Avaliações e reviews
- [ ] Notificações push
- [ ] Dashboard administrativo

## 👨‍💻 Desenvolvido por

**Matheus Carvalho**

LinkedIn: [@matheusscarvalho](https://www.linkedin.com/in/matheusscarvalho/)
