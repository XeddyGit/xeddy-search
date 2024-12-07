FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY . ./

RUN npm install

EXPOSE 3001

CMD ["node", "server.js"] 