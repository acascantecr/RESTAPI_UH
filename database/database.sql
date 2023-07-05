/*CREACION DE USUARIO*/
create user t_user with password '123';
/*CREACION DE BASE DE DATOS*/
CREATEDB taller WITH OWNER t_user;
/*CREACION DE TABLAS*/
CREATE TABLE Personas(
    IdPersona serial,
    Nombre varchar(50) not null,
    Apellido1 varchar(50) not null,
    Apellido2 varchar(50),
    Telefono varchar(10) not null,
    Cedula int,
    Direccion varchar(50) not null,
    TipoPersona boolean not null,
    Estado boolean not null,
    primary key(IdPersona)
);
CREATE TABLE Usuarios(
    IdUsuario serial,
    IdPersona int not null,
    Userid varchar(20),
    Password varchar(100),
    Estado boolean not null,
    primary key(IdUsuario),
    foreign key(IdPersona) references Personas(IdPersona)
); 
/*RELLENAR TABLAS*/
INSERT INTO Personas (Nombre,Apellido1,Apellido2,Telefono,Cedula,Direccion,TipoPersona,Estado)
VALUES ('Alexander','Cascante','Corrales','99995588',811553665,'Alajuela',true,true),
('Jose','Morales','Mora','88888888',345889663,'San Jose',true,true),
('Marcos','Mena','Rojas','54556999',185993665,'Heredia',true,true);

INSERT INTO Usuarios (IdPersona,Userid,Password,Estado)
VALUES (1,'acascante','HolaMundo',true),
(2,'jmorales','1234',true),
(3,'mmena','Mena123',true);

