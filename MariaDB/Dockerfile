FROM mariadb:10.3.5
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mantenimiento
ADD mantenimiento.sql /docker-entrypoint-initdb.d/mantenimiento.sql 
EXPOSE 3306
CMD ["mysqld"]