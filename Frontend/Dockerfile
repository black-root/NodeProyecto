FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
ADD ./nodeproyecto /usr/src/app
RUN chmod 777 wait-for
RUN npm install
ENTRYPOINT sh -c './wait-for 172.25.0.28:3306 -- npm run dev' 
EXPOSE 8080