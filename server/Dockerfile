FROM node:16

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY . ./

# Clean install and force package resolution
RUN rm -rf node_modules package-lock.json && npm install

EXPOSE 3001

CMD ["node", "server.js"] 