FROM node:10-alpine
RUN mkdir -p /usr/src/
WORKDIR /usr/src/app
COPY wait-for /usr/local/bin
RUN chmod 777 /usr/local/bin/wait-for
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN chmod 777 wait-for
ENTRYPOINT node ./src/index.js
EXPOSE 3000
