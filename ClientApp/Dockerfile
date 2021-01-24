FROM node:14
WORKDIR /usr/src/productFront

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080


CMD [ "node", "server.js" ]
