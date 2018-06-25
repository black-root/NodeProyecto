FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN chmod 777 wait-for
ENTRYPOINT sh -c './wait-for 172.25.0.28:3306 -- node app.js' 
EXPOSE 3000
