FROM node:10-10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN cd ./nodeproyecto
RUN npm install
ENTRYPOINT npm run build
EXPOSE 3000