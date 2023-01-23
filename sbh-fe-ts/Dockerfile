# syntax=docker/dockerfile:1
FROM node:16.10.0-alpine as build
RUN apk add --no-cache python2 g++ make
WORKDIR /sbh-fe-ts
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /sbh-fe-ts/build /usr/share/nginx/html
