# APS Front-end – Gerenciador de Tarefas

Projeto desenvolvido como parte da **Atividade Prática Supervisionada (APS)**, com o objetivo de aplicar conceitos de **desenvolvimento front-end moderno**, integração com API e controle de autenticação.

A aplicação permite que usuários se cadastrem, façam login e gerenciem suas tarefas de forma simples e organizada.


# Objetivo do Projeto

- Aplicar conceitos de **React** na construção de interfaces
- Trabalhar com **rotas protegidas**
- Consumir uma **API REST**
- Implementar **autenticação com token**
- Praticar organização de código e boas práticas

#  Funcionalidades

#  Área Pública
- Página inicial
- Cadastro de usuário
- Login de usuário

# Área Protegida (requer autenticação)
- Dashboard do usuário
- Cadastro de tarefas
- Listagem de tarefas
- Edição de tarefas
- Exclusão de tarefas


# Tecnologias Utilizadas

- React
- React Router DOM
- Vite
- Bootstrap
- JavaScript (ES6+)
- Fetch API





# Autenticação

A autenticação é baseada em **token JWT**, armazenado no contexto da aplicação.  
Rotas sensíveis são protegidas por um componente `PrivateRoute`, que impede acesso sem login.



# Como executar o projeto

# Pré-requisitos
- Node.js (versão 18 ou superior)
- NPM ou Yarn
- API backend em execução

### Passos

```bash
# Clonar o repositório
git clone https://github.com/santosUlisses/aps-front-end.git

# Entrar na pasta do projeto
cd client

# Instalar dependências
npm install

# Executar o projeto
npm run dev


