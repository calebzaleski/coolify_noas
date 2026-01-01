FROM node:alpine
LABEL authors="calebzaleski"

WORKDIR /app

COPY package.json ./
RUN npm install

COPY index.js reasons.json ./

EXPOSE 3000

CMD ["node", "index.js"]