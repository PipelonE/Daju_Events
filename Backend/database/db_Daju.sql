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
hora_inicio time not null,
hora_Fin time not null,
lugar_id int not null,
participantes_e int not null,
descripcion_e varchar(100),
foreign key(usuario_id) references usuario(id_usuario),
foreign key(lugar_id) references lugar(id_lugar)
);

insert into tipo_documento(t_doc,des_tdoc,estado_tdoc) values("CC","Cedula de ciudadania",1),
("CE","Cedula de extranjeria",1),
("TI","Tarjeta de identidad",1),
("RC","Registro Civil",1);

insert into usuario (pkfk_tdoc,numero_id,Nombres,Apellidos,correo,celular)
values("CC","1023564123","Edwin Alonso","Cortazar Gonzales","CortazarJuan@gmail.com","3026052541");

insert into usuario (pkfk_tdoc,numero_id,Nombres,Apellidos,correo,celular)
values("CC","1028214655","Valery Allison","Español Montenegro","espanola@gmail.com","3053068106");

insert into usuario (pkfk_tdoc,numero_id,Nombres,Apellidos,correo,celular)
values("CC","1030465977","Jullieth","Herrera Cuesta","jvherrera66@gmail.com","3154568971");

insert into lugar (nombre_lugar, descripcion_lugar, capacidad_lugar) values("Auditorio C","Espacio agradable y espacioso para eventos informativos, con plataforma",200);
insert into lugar (nombre_lugar, descripcion_lugar, capacidad_lugar) values("Jardin de Eventos","Espacio agradable y espacioso para eventos informativos, con plataforma",250);
insert into lugar (nombre_lugar, descripcion_lugar, capacidad_lugar) values("Salon de baile","Espacio agradable y espacioso para eventos informativos, con plataforma",70);

insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Fiesta 15 años Gabriela","2024-08-06","08:00:00","10:30:00",2,160,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");
insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Boda Dionicio","2024-07-16","17:00:00","23:30:00",1,180,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");
insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Fiesta primera comunion","2024-05-25","06:00:00","08:45:00",2,110,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");
insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Despedida prom 11 colegio Acoinprev","2024-11-26","13:30:00","22:30:00",3,50,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");
insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Despedida de soltero","2024-08-19","17:00:00","24:59:00",3,20,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");
insert into eventos (usuario_id,nombre_evento, fecha_e,hora_inicio,hora_Fin,lugar_id,participantes_e,descripcion_e) values(1,"Cumpleaños tia martha","2024-08-01","12:00:00","14:00:00",3,40,"Fiesta de 15 años de valery , unicamente permitir acceso a personas contraje y regalo.");