FROM node:10-10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD ["dockerize", "-wait http://172.25.0.29:8181/MantenimientoTPI-web"]
ENTRYPOINT node app.js
EXPOSE 3000