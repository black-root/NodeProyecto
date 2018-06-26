FROM node:9.11.1-alpine
RUN npm install -g http-server
RUN mkdir /app
COPY . /app
RUN ls
WORKDIR /app/nodeproyecto
RUN npm install
EXPOSE 8080
CMD npm run dev
