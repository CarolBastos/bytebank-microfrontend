# Microfrontend Monorepo

Este projeto utiliza uma arquitetura de **Microfrontends** organizada em um **monorepo**. Cada microfrontend é um aplicativo separado que se integra ao Orquestrador. O projeto utiliza **Webpack** para empacotar e configurar os microfrontends.

## Estrutura do Repositório

O repositório contém os seguintes diretórios:

- /welcome # Tela de Boas Vindas 
- /util # Microfrontend de Utilitários 
- /orchestrator # Microfrontend Orquestrador 
- package.json # Gerencia dependências e scripts 
- amplify.yml # Configuração do AWS Amplify (para CI/CD)


## Pré-requisitos

Antes de rodar o projeto localmente, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 16 ou superior): [Baixe o Node.js](https://nodejs.org/)
- **npm** (gerenciador de pacotes): Já vem com o Node.js
- **Git**: [Baixe o Git](https://git-scm.com/)
- **Docker** (opcional, se for usar containers): [Baixe o Docker](https://www.docker.com/get-started)

## Instalação e Execução Local

1. **Clone o repositório**:
   Se você ainda não tem o repositório, clone-o para sua máquina local:

   ```bash
   git clone https://github.com/CarolBastos/bytebank-microfrontend
   ```

2. **Instale as dependências: O projeto usa workspaces do npm, então a instalação de dependências é feita em nível de monorepo.**

    ```bash
    npm install
    ````

3. Rodar os microfrontends: O comando abaixo executa todos os microfrontends simultaneamente usando concurrently (ou seja, o microfrontend welcome, util, e orchestrator serão iniciados juntos).

    ```bash
    npm run start
    ````

    Se você quiser iniciar um microfrontend individualmente, use um dos comandos abaixo:

    Para iniciar o microfrontend Welcome:
    ```bash
    npm run start:welcome
    ````

    Para iniciar o microfrontend Util:
    ```bash
    npm run start:util
    ````

    Para iniciar o microfrontend Orchestrator:
    ```bash
    npm run start:orchestrator
    ````

4. Visualize no Navegador: Após iniciar o projeto, você pode acessar os microfrontends no navegador:

    - Welcome: http://localhost:8502
    - Util: http://localhost:8504
    - Orchestrator: http://localhost:9000 

    Os microfrontends devem estar em execução em diferentes portas, conforme configurado no Webpack.

## Build e Deploy

Para compilar e empacotar todos os microfrontends, execute o comando de build:

```bash
npm run build
````

Isso irá executar o build de cada microfrontend e gerar os arquivos de distribuição nas respectivas pastas dist/ de cada microfrontend.

