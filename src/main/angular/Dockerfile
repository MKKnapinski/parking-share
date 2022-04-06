FROM node:16-alpine
RUN mkdir -p /app/angular
WORKDIR /app/angular
RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm install
