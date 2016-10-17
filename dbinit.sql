PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user(uid integer primary key, name character(20) unique, nickname nchar(20), password character(30));
INSERT INTO "user" VALUES(1,'v7a','瘫痪老哥','super');
CREATE TABLE submission(id integer primary key, uid integer, token character(29), status character(10), submit_time TIMESTAMP DEFAULT (datetime('now', 'localtime')));
COMMIT;