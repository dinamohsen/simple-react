FROM node:14.2-alpine as builder 
WORKDIR  /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm start

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=builder /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
ENTRYPOINT ["nginx","-g","daemon off;"]


