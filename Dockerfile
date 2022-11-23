FROM node:14-alpine3.15
WORKDIR /app
COPY package*.json .
RUN npm cache clean --force && rm -rf node_modules && npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start:dev"]