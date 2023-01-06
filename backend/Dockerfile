# syntax=docker/dockerfile:1
FROM node:16.14
WORKDIR /backend
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --immutable
COPY . .
