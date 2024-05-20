create database Daju_events;
use Daju_events;

create table tipo_documento(
t_doc varchar(5) not null,
des_tdoc varchar(35) not null,
estado_tdoc boolean not null,
primary key(t_doc)
);

create table usuario(
id_usuario int auto_increment primary key,
pkfk_tdoc varchar(5) not null,
numero_id varchar(15) not null,
Nombres varchar(50) not null,
Apellidos varchar(50) not null,
correo varchar(50) not null,
celular varchar(15) not null,
unique(pkfk_tdoc,numero_id),
unique(correo),
foreign key(pkfk_tdoc) references tipo_documento(t_doc)
);

create table lugar(
id_lugar int auto_increment primary key,
nombre_lugar varchar(50) not null,
descripcion_lugar varchar(100),
capacidad_lugar int not null
);

create table eventos(
id_evento int auto_increment primary key,
usuario_id int not null,
nombre_evento varchar(50) not null,
fecha_e date not null,
hora_e time not null,
lugar_id int not null,
participantes_e int not null,
descripcion_e varchar(100),
foreign key(usuario_id) references usuario(id_usuario),
foreign key(lugar_id) references lugar(id_lugar)
);
