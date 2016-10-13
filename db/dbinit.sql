PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE user(uid integer primary key, name character(20) unique, nickname nchar(20), password character(30));
CREATE TABLE submission(id integer primary key, uid integer not null, token character(30) not null, status character(10) default 'in queue', submit_time TIMESTAMP DEFAULT (datetime('now', 'localtime')));
COMMIT;