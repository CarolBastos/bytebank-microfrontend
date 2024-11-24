# Use uma imagem base para Node.js
FROM node:18-alpine

# Configure o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta
EXPOSE 8502

# Comando de inicialização
CMD ["npm", "start"]
