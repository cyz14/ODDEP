PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user(uid integer primary key, name character(20) unique not null, nickname nchar(20) not null, password character(32) not null, salt character(30) not null, power integer default 0);
INSERT INTO "user" VALUES(1,'root','老大哥不会被敲诈','4e645e0f848993b546b9e48bb3f6b435','dnzf2hgl9mn53ik9:1476449677973',99);
CREATE TABLE submission(id integer primary key, uid integer not null, token character(30) not null, status character(10) default 'in queue', submit_time TIMESTAMP DEFAULT (datetime('now', 'localtime')));
COMMIT;