PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user(uid integer primary key, name character(20) unique not null, nickname nchar(20) not null, password character(32) not null, salt character(30) not null, power integer default 0);
INSERT INTO "user" VALUES(1,'root','老大哥不会被敲诈','4e645e0f848993b546b9e48bb3f6b435','dnzf2hgl9mn53ik9:1476449677973',99);
CREATE TABLE submission(id integer primary key, uid integer not null, pid integer default 1000, token character(30) not null, tag nchar(50), status character(10) default 'in queue', submit_time TIMESTAMP DEFAULT (datetime('now', 'localtime')));
CREATE TABLE problem(pid integer primary key, title nchar(100) not null, source nchar(256), limited varchar not null, description varchar not null);
INSERT INTO "problem" VALUES (1000, "SandBox", "root", "", "沙盒模式，全开放无限制。");
COMMIT;