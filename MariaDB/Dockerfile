FROM mariadb:10.3.5

MAINTAINER black-root ronald_reir21@hotmail.com

#RUN apt-get update
#RUN apt-get install -y wget nano

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mantenimiento

ADD mantenimiento.sql /docker-entrypoint-initdb.d/mantenimiento.sql 

EXPOSE 3306

CMD ["mysqld"]