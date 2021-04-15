# https://ca.wikiquote.org/wiki/Categoria:Dites_sobre_estacions_de_l%27any

DROP TABLE refrany;
DROP TABLE estacio;

CREATE TABLE estacio(
id_estacio smallint primary key,
estacio varchar(20) not null
);

CREATE TABLE refrany(
id_refrany smallint primary key,
refrany varchar(255) not null,
id_estacio smallint references estacio
);

insert into estacio values (1,'Primavera');
insert into estacio values (2,'Estiu');
insert into estacio values (3,'Tardor');
insert into estacio values (4,'Hivern');

insert into refrany values (1,'En el llit, tot l''any és primavera.',1);
insert into refrany values (2,'L''hivern dóna les cartes i la primavera fa el joc.',1);
insert into refrany values (3,'La falsa primavera enganya el bestiar.',1);
insert into refrany values (4,'La primavera la sang altera.',1);
insert into refrany values (5,'Mal hivern, primavera d''infern.',1);
insert into refrany values (6,'No hi ha primavera sense flors ni estiu sense calors.',1);
insert into refrany values (7,'Oreneta primerenca, primavera calorenca.',1);
insert into refrany values (8,'Per primavera la natura s''esvera.',1);
insert into refrany values (9,'Primavera tardana, fa créixer es blat a sa sala.',1);
insert into refrany values (10,'Sant Joan i sant Pere, adéu primavera.',1);
insert into refrany values (11,'Tramuntana de primavera, pluja al darrera.',1);
insert into refrany values (12,'Una flor no fa estiu; ni dues, primavera.',1);
insert into refrany values (13,'Una flor no fa primavera.',1);
insert into refrany values (14,'Una oreneta no fa estiu, ni dues primavera.',1);
insert into refrany values (15,'Una oreneta no fa primavera.',1);

insert into refrany values (16,'A l''estiu, filosa no diu.',2);
insert into refrany values (17,'A l''estiu tota cuca viu.',2);
insert into refrany values (18,'A l''estiu a l''ombra, i a l''hivern al sol.',2);
insert into refrany values (19,'Cada cosa a son temps, i d''estiu cigales.',2);
insert into refrany values (20,'Del bon estiu, el pagès viu.',2);
insert into refrany values (21,'L''oreneta ja ha vingut, ja tenim l''estiu damunt.',2);
insert into refrany values (22,'On hages passat l''hivern, passa l''estiu.',2);
insert into refrany values (23,'Paraules d''estiu, segons qui les diu.',2);
insert into refrany values (24,'Quan la Candelera plora, el fred ja és fora; quan la Candelera riu, ja ve l''estiu; tant si plora com si riu, ja ve l''estiu.',2);
insert into refrany values (25,'Quan la Candelera riu, ja som a l''estiu.',2);
insert into refrany values (26,'Qui diu mal de l''estiu, no sap el que diu.',2);
insert into refrany values (27,'Si la Candelera plora, el fred és fora; si la Candelera riu, ni hivern ni estiu.',2);
insert into refrany values (28,'Si la Candelera plora, es fred és fora; si la Candelera riu, lluny és s''estiu.',2);
insert into refrany values (29,'Si per Nadal fa estiu, a Pasqua prop d''es caliu.',2);
insert into refrany values (30,'Una flor no fa estiu',2);
insert into refrany values (31,'Vianda d''estiu vol regadiu.',2);

insert into refrany values (32,'A casa del vinater, bona tardor i mal hivern.',3);
insert into refrany values (33,'A la tardor, sembrarien si hi hagués saó.',3);
insert into refrany values (34,'A la tardor, el dia porta espardenyes.',3);
insert into refrany values (35,'Bou de tardor és cavall de primavera.',3);
insert into refrany values (36,'Del setembre a la tardor, torna la calor.',3);
insert into refrany values (37,'Diarrea tardoral, sovint mortal.',3);
insert into refrany values (38,'La tardor porta tristor.',3);
insert into refrany values (39,'La tardor segura, Sant Francesc la procura.',3);
insert into refrany values (40,'Les darreres pluges d''agost porten la tardor i aigualeixen el most.',3);
insert into refrany values (41,'Malalties tardorals, llargues i mortals.',3);
insert into refrany values (42,'Pluja de tardor, fa el millor saor.',3);
insert into refrany values (43,'Pluja de tardor, pluja de saó.',3);
insert into refrany values (44,'Pluja d''abril i sol de tardor, solen fer l''any bo i millor.',3);
insert into refrany values (45,'Si plou per Sant Jaume, la tardor es prepara.',3);
insert into refrany values (46,'Si veus l''eriçó a l''arbocer, la tardor ja vé.',3);
insert into refrany values (47,'Tardor entrada, panxa tivada.',3);
insert into refrany values (48,'Tardor i hivern, per al vell, temps d''infern.',3);
insert into refrany values (49,'Tardor serena, hivern ventós; tardor ventosa, hivern serè.',3);
insert into refrany values (50,'Tardorada dolenta, millor tardana que primerenca.',3);
insert into refrany values (51,'Tardorada vertadera, per Sant Mateu l''aigua primera.',3);
insert into refrany values (52,'Verdura per la tardor, per a tu i per a mi, no.',3);

insert into refrany values (53,'A l''hivern, boirina i la neu per veïna.',4);
insert into refrany values (54,'A l''hivern, bona sopa i vi calent.',4);
insert into refrany values (55,'A l''hivern, dia i solet; lluna i nit, quan no fa fred.',4);
insert into refrany values (56,'A l''hivern, el millor amic és un bon abric.',4);
insert into refrany values (57,'A l''hivern, forner i, a l''estiu, taverner.',4);
insert into refrany values (58,'A la Plana de Vic, nou mesos d''hivern i tres d''infern.',4);
insert into refrany values (59,'Abril finat, hivernpassat.',4);
insert into refrany values (60,'Del sol de l''hivern i dels núvols d''estiu, enganyats eixiu.',4);
insert into refrany values (61,'En hivern, tot perd son govern.',4);
insert into refrany values (62,'Fang a l''hivern i pols a l''estiu, tot el camp reviu.',4);
insert into refrany values (63,'Hivern fangós, juny granellós.',4);
insert into refrany values (64,'Hivern fredós, estiu calorós.',4);
insert into refrany values (65,'Hivern plujós, estiu abundós.',4);
insert into refrany values (66,'L''hivern enrajolat i l''estiu empedrat.',4);
insert into refrany values (67,'L''hivern té mal govern.',4);
insert into refrany values (68,'Mal hivern, primavera d''infern.',4);
insert into refrany values (69,'Ni hivernsense capa, ni estiu sense carabassa.',4);
insert into refrany values (70,'No diguis hivernpassat, que Sant Jordi no sigui estat.',4);
insert into refrany values (71,'On hages passat l''hivern, passa l''estiu.',4);
insert into refrany values (72,'Oreneta arribada, hivernada acabada.',4);
insert into refrany values (73,'Orenetes tardanes, hi ha hivern per setmanes.',4);
insert into refrany values (74,'Per Sant Tomàs comença l''hivernàs.',4);
insert into refrany values (75,'Pluja d''hivern, dia d''infern.',4);
insert into refrany values (76,'Quan el mussol canta en gener, un altre hivernve.',4);
insert into refrany values (77,'Si per santa Àgada plou, quaranta dies més d''hivern.',4);
insert into refrany values (78,'Trons en s''hivern, pa per vuit dies.',4);
