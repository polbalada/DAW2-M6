CREATE TABLE tema (
id_tema smallint primary key,
tema varchar(50) not null
) ENGINE=InnoDB;

CREATE TABLE segell (
id_segell smallint primary key,
segell varchar(50) not null,
pais varchar(30) not null,
year integer not null
) ENGINE=InnoDB;

CREATE TABLE tema_segell (
id_segell smallint,
id_tema smallint,
PRIMARY KEY (id_segell, id_tema),
CONSTRAINT fk_id_segell  FOREIGN KEY (id_segell)  REFERENCES segell(id_segell),
CONSTRAINT fk_id_tema  FOREIGN KEY (id_tema)  REFERENCES tema(id_tema)
) ENGINE=InnoDB;

INSERT INTO tema VALUES (1, 'Jocs Olímpics');
INSERT INTO tema VALUES (2, 'Esports');
INSERT INTO tema VALUES (3, 'Astronàutica');
INSERT INTO tema VALUES (4, 'NASA');
INSERT INTO tema VALUES (5, 'Sputnik');
INSERT INTO tema VALUES (6, 'Europa');
INSERT INTO tema VALUES (7, 'Amèrica');

INSERT INTO segell VALUES (1, 'Jocs Olímpics Moscú 1980', 'Rússia', 1980);
INSERT INTO segell VALUES (2, 'Mundial Espanya', 'Espanya', 1982);
INSERT INTO segell VALUES (3, 'Tour de France 1986', 'Romania', 1986);
INSERT INTO segell VALUES (4, 'Nadia Comanenci', 'Estats Units', 1980);
INSERT INTO segell VALUES (5, 'Fermín Cacho', 'Espanya', 1992);
INSERT INTO segell VALUES (6, 'Apollo 11', 'Estats Units', 1969);
INSERT INTO segell VALUES (7, 'Neil Armstrong', 'França', 1969);
INSERT INTO segell VALUES (8, 'Armstrong, Collins, Aldrin', 'Itàlia', 1969);
INSERT INTO segell VALUES (9, 'Apollo 8', 'Estats Units', 1967);
INSERT INTO segell VALUES (10, 'Lunar Module and Eagle', 'Estats Units', 1969);
INSERT INTO segell VALUES (11, 'Sputnik satellite', 'URSS', 1957);
INSERT INTO segell VALUES (12, 'Gossa Laika', 'URSS', 1957);
INSERT INTO segell VALUES (13, 'Gemini Mission', 'Anglaterra', 1960);
INSERT INTO segell VALUES (14, 'Footstep on the Moon', 'Estats Units', 1969);
INSERT INTO segell VALUES (15, 'Pluja d''estels Gemínids', 'Espanya', 2018);

INSERT INTO tema_segell VALUES (1,1);
INSERT INTO tema_segell VALUES (1,2);
INSERT INTO tema_segell VALUES (1,6);
INSERT INTO tema_segell VALUES (2,2);
INSERT INTO tema_segell VALUES (2,6);
INSERT INTO tema_segell VALUES (3,2);
INSERT INTO tema_segell VALUES (3,6);
INSERT INTO tema_segell VALUES (4,1);
INSERT INTO tema_segell VALUES (4,2);
INSERT INTO tema_segell VALUES (4,7);
INSERT INTO tema_segell VALUES (5,1);
INSERT INTO tema_segell VALUES (5,2);
INSERT INTO tema_segell VALUES (5,6);
INSERT INTO tema_segell VALUES (6,3);
INSERT INTO tema_segell VALUES (6,4);
INSERT INTO tema_segell VALUES (6,7);
INSERT INTO tema_segell VALUES (7,3);
INSERT INTO tema_segell VALUES (7,4);
INSERT INTO tema_segell VALUES (7,6);
INSERT INTO tema_segell VALUES (8,3);
INSERT INTO tema_segell VALUES (8,4);
INSERT INTO tema_segell VALUES (8,6);
INSERT INTO tema_segell VALUES (9,3);
INSERT INTO tema_segell VALUES (9,4);
INSERT INTO tema_segell VALUES (9,7);
INSERT INTO tema_segell VALUES (10,3);
INSERT INTO tema_segell VALUES (10,4);
INSERT INTO tema_segell VALUES (10,7);
INSERT INTO tema_segell VALUES (11,3);
INSERT INTO tema_segell VALUES (11,6);
INSERT INTO tema_segell VALUES (12,3);
INSERT INTO tema_segell VALUES (12,6);
INSERT INTO tema_segell VALUES (13,3);
INSERT INTO tema_segell VALUES (13,4);
INSERT INTO tema_segell VALUES (13,6);
INSERT INTO tema_segell VALUES (14,3);
INSERT INTO tema_segell VALUES (14,4);
INSERT INTO tema_segell VALUES (14,7);
INSERT INTO tema_segell VALUES (15,3);
INSERT INTO tema_segell VALUES (15,6);