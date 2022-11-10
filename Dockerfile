FROM node:16.18.1-alpine as builder
WORKDIR /app
COPY package.json   ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM nginx:alpine as server
COPY --from=builder ./app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx" ,"g" , "daemon off;"]
