BEGIN TRANSACTION;
insert into submission (token, uid, tag) values ('test', 1, "测试1");
insert into submission (token, uid, tag) values ('test1', 1, "测试2");
insert into submission (token, uid, tag) values ('test2', 1, "测试3");
/*
insert into submission (token, uid, tag) values ('sqpayiqr940io1or:1476339593927', 1, '再吸一口 屁股');
insert into submission (token, uid) values ('caf4vztmr3aw0zfr:1476348271482', 1);
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'done');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'failed');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'running');
insert into submission (token, uid, status) values ('lk039ax39e3lerk9:1476348300969', 1, 'in queue');
insert into submission (token, uid, status, tag) values ('lk039ax39e3lerk9:1476348300969', 1, 'in queue', '三五瓶');
*/
insert into user (name, nickname, password, salt) values ('test', '三K党', '3e0db4e14891e342187f929436c92dd0', 'nnsz0voyq6hto6r:1477465926089');
INSERT INTO "problem" (title, source, limited, description) VALUES ("A+B problem", "测试", "", '<h2>Norwegian Mountain Trip</h2><img border="0" src="http://www.runoob.com/images/pulpit.jpg" alt="Pulpit rock" width="304" height="228">');
COMMIT;