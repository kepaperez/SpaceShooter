BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "android_metadata" (
	"locale"	TEXT
);
CREATE TABLE IF NOT EXISTS "partidas" (
	"id"	INTEGER,
	"username"	TEXT,
	"score"	TEXT,
	"date"	DATE,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "users" (
	"username"	TEXT,
	"password"	TEXT,
	PRIMARY KEY("username")
);
INSERT INTO "android_metadata" VALUES ('en_US');
INSERT INTO "partidas" VALUES (1,'kepa','1','28-03-2022');
INSERT INTO "partidas" VALUES (2,'manolo','6','28-03-2022');
INSERT INTO "partidas" VALUES (3,'manolo','2','28-03-2022');
INSERT INTO "partidas" VALUES (4,'kepa','6','28-03-2022');
INSERT INTO "users" VALUES ('kepa','1234');
INSERT INTO "users" VALUES ('manolo','123');
COMMIT;
