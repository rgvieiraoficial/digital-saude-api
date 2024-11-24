# Projeto +DIGITAL SAUDE

Back-end do projeto desenvolvido no âmbito do 1º Hackathon da Cont. 

![Imagem](https://i.imgur.com/PGwiAde.png)

## Sobre o Projeto 

Portal web de gerenciamento de receitas entre os médicos e farmácias, visando aprimorar o processo de compra de medicamentos pelos pacientes.

## Stack utilizada

**Back-end:** Node, TypeScript, Fastify, Prisma, ProstgreSQL e Docker.

## Como Executar o Projeto

Para executar o projeto execute os seguintes passos: 

### Clone o Repositório

```bash
git clone https://github.com/will-cesar/react-crud-projetos.git 
```

### Instale as Dependências

```bash
npm install
```
    
### Crie as Variáveis de Ambiente

Crie uma cópia do arquivo .env.example e renomeie para .env.local

Conteúdo do Arquivo .env.local:

```bash
#Server Port
PORT=3334

#PostgreSQL
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=

#Secret Token
SECRET_TOKEN=

#Prisma
DATABASE_URL="postgresql://johndoe:randompassword@main-db:5432/mydb?schema=public"

```

Crie outro arquivo com o nome .env contendo apenas com a URI de Conexão Externa ao Banco de Dados (Fora do Docker) para ser possível usar o Prisma CLI.

Conteúdo do Arquivo .env:

```bash
#Prisma
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

```

Importante: No arquivo env.local, na URI de Conexão ao Banco de Dados o Host deve ser "main-db" (ou o nome do serviço Docker que você definir), enquanto que no arquivo .env o Host deve ser "localhost", pois assim será possível rodar as migrations pelo terminal do computador que está executando o Docker.

### Subir o Docker

```bash
Docker Compose up
```

### Rodar as Migrations do Banco de Dados

```bash
npx prisma migrate dev
```

### Acessar a página de "Health Check" do Servidor

```bash
http://localhost:PORT

Exemplo:

http://localhost:3334
```

## Autores

- [@EvelinAlvarado](https://www.github.com/EvelinAlvarado)
- [@leticiaveigacs](https://www.github.com/leticiaveigacs)
- [@rgvieiraoficial](https://www.github.com/rgvieiraoficial)
- [@GabrielGomesSantos](https://www.github.com/GabrielGomesSantos)