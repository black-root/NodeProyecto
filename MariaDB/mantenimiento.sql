DROP DATABASE mantenimiento;
CREATE DATABASE mantenimiento;
USE mantenimiento;

CREATE TABLE marca (
  idMarca int(11) NOT NULL AUTO_INCREMENT,
  nombreMarca varchar(45) NOT NULL,
  descripcion text,
  email varchar(45) DEFAULT NULL,
  telefono varchar(45) DEFAULT NULL,
  website varchar(60) DEFAULT NULL,
  direccion text,
  PRIMARY KEY (idMarca)
) ENGINE=InnoDB;


INSERT INTO marca VALUES (1,'Dell','Empresa de tecnologia','dell-corporatio@outlook.com','2212323',NULL,'USA'),(2,'HP','Empresa de tecnologia','hp@corporation.com','2311234','','CHINA'),(3,'ASUS','Empresa de tecnologia',NULL,'1234631',NULL,'USA'),(4,'TOSHIBA','Empresa de tecnologia',NULL,'8751234',NULL,'JAPON'),(8,'asd','asdas','asd','asda','adsas','adsasd');


