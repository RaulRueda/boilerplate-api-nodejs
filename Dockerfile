FROM node:14-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "yarn.lock", "./"]

# Project dependencies
RUN yarn install --production=true

COPY . .

# Exposing ports
EXPOSE 8080

CMD [ "node", "src/app.js" ]