FROM node:14.2-alpine
WORKDIR  /frontend/app
COPY package.json ./
RUN npm install --force

COPY . .
RUN npm start


