FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY . ./

# Clean install and force package resolution
RUN rm -rf node_modules package-lock.json && npm install

EXPOSE 3001

# Set environment to production
ENV NODE_ENV=production

CMD ["node", "server.js"] 