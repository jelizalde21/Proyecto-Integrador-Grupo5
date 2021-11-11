CREATE DATABASE IF NOT exists myBooze;

USE myBooze;

CREATE TABLE users (
id INT UNSIGNED AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
apellido VARCHAR(100) NOT NULL,
username VARCHAR (100) unique NOT NULL,
email VARCHAR (150) unique NOT NULL,
password VARCHAR (150) NOT NULL,
picture VARCHAR (150),
fecha DATE NOT NULL,
nro_posts INT,
PRIMARY KEY (id)
);

CREATE TABLE posts (
id INT UNSIGNED AUTO_INCREMENT,
picture VARCHAR (150),
caption VARCHAR (1000),
fecha DATE NOT NULL,
user_post_id INT UNSIGNED NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY (user_post_id) REFERENCES users (id)
);

CREATE TABLE comments (
id INT UNSIGNED AUTO_INCREMENT,
comentario VARCHAR (500),
fecha DATE NOT NULL,
comment_post_id INT UNSIGNED NOT NULL,
comment_user_id INT UNSIGNED NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (comment_post_id) REFERENCES posts (id),
FOREIGN KEY (comment_user_id) REFERENCES users (id)
);

INSERT INTO users VALUES (DEFAULT , 'Horacio', 'Barbeito','Horacio Barbeito','hbarbeito@udesa.edu.ar', 'myBooze', 'ahoras.jpg','2002-01-09', 100);
INSERT INTO users VALUES (DEFAULT , 'Javier','Elizalde','Javier Elizalde', 'jelizalde@udesa.edu.ar', 'myBooze', 'ajavo.jpg','2001-08-21', 80);
INSERT INTO users VALUES (DEFAULT , 'Eugenia', 'García Borghes','Eugenia García Borghes','egborghes@udesa.edu.ar', 'myBooze', 'aeuge.jpg','2001-11-09', 80);
INSERT INTO users VALUES (DEFAULT , 'Brian', 'Gomez','Brian Gomez','bgomez@udesa.edu.ar', 'myBooze', 'abrian.jpg','1995-03-08', 70);
INSERT INTO users VALUES (DEFAULT, 'Agustín', 'Pittari','Agustín Pittari','apittari@udesa.edu.ar', 'myBooze', 'aagus.jpg', '1998-06-03', 50);
INSERT INTO users VALUES (DEFAULT, 'Santiago', 'Matheu', 'Santiago Matheu', 'smatheu@udesa.edu.ar', 'myBooze', 'asanti.jpg', '2001-11-11', 60);
INSERT INTO users VALUES (DEFAULT, 'Tomás', 'Poitevin', 'Tomás Poitevin', 'tgarcíapoitevin@udesa.edu.ar', 'myBooze', 'atomi.jpg','2001-03-21', 40);
INSERT INTO users VALUES (DEFAULT, 'Alejandro', 'Vivone', ' Alejandro Vivone', 'avivone@udesa.edu.ar', 'myBooze', 'aale.jpg','1981-08-31', 20);

INSERT INTO posts VALUES (DEFAULT , 'foto1.jpg' , 'Alex, como el león' , '2021-09-26', 1);
INSERT INTO posts VALUES (DEFAULT , 'foto2.jpg' , 'Suave como las mujeres!' , '2021-09-27', 2);
INSERT INTO posts VALUES (DEFAULT , 'foto3.jpg' , 'Reluciente packaging' , '2021-09-22', 3);
INSERT INTO posts VALUES (DEFAULT , 'foto4.jpg' , 'Caro pero, riguroso' , '2021-09-21', 4);
INSERT INTO posts VALUES (DEFAULT , 'foto5.jpg' , 'Excelente para un asado' , '2021-09-23', 5);
INSERT INTO posts VALUES (DEFAULT , 'foto6.jpg' , 'Un buen whiskey para disfrutar en compañía' , '2021-09-27', 2);
INSERT INTO posts VALUES (DEFAULT , 'foto7.jpg' , 'Black Label, no, es el nuevo Gold!' , '2021-09-24', 3);
INSERT INTO posts VALUES (DEFAULT , 'foto8.jpg' , 'Color dorado como el oro' , '2021-09-25', 4);
INSERT INTO posts VALUES (DEFAULT , 'foto9.jpg' , 'Rústico como ella sola' , '2021-09-25', 5);
INSERT INTO posts VALUES (DEFAULT , 'foto10.jpg' , 'Un clásico eterno' , '2021-09-22', 1);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 1, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 1, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 1, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 1, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 2, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 2, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 2, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 2, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 3, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 3, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 3, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 3, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 4, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 4, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 4, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 4, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 5, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 5, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 5, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 5, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 6, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 6, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 6, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 6, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 7, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 7, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 7, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 7, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 8, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 8, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 8, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 8, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 9, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 9, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 9, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 9, 3);

INSERT INTO comments VALUES (DEFAULT, 'BUENARDO', '2021-09-27', 10, 2);
INSERT INTO comments VALUES (DEFAULT, 'Excelente calidad', '2021-09-27', 10, 4);
INSERT INTO comments VALUES (DEFAULT, 'No me gustó tanto', '2021-09-27', 10, 1);
INSERT INTO comments VALUES (DEFAULT, 'Un clásico', '2021-09-27', 10, 3);
