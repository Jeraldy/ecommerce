# syntax=docker/dockerfile:1
FROM node:16.14
WORKDIR /backend
COPY . .
RUN yarn install --immutable --production
CMD ["node", "server.js"]
EXPOSE 8080

