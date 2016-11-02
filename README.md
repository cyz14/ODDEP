# Project 7: Team of Taoli

## Set Up and Run
### Install npm dependencies and bower dependencies
In project path, /path/to/prj7_tot/ , run
```
/path/to/prj7_tot $ npm install
```
Install *bower* globally if not installed yet
```
$ npm install -g bower
```
Then install dependencies managed by *bower*
```
/path/to/prj7_tot $ bower install
```
### Config sqlite database
#### 1. Install sqlite3 globally
When in *Install npm dependencies*, node_module *sqlite3* has been installed, but the project also need the sqlite3 program.
To install sqlite3 globally
##### 1.1 On Ubuntu or Mac
```
$ sudo apt-get install sqlite3
```
##### 1.2 On Windows
Go to [SQLite Download Page](https://sqlite.org/download.html) and get the proper version installed for Windows.
#### 2. SetUp and Test database
##### 2.1 On Windows
```
/path/to/prj7_tot $ cd db
/path/to/prj7_tot/db $ sqlite3
sqlite> .read dbinit.sql
sqlite> .read dbtest-load.sql
sqlite> .save tot.db
sqlite> .exit
```
##### 2.2 On Ubuntu or Mac
Because there maybe no *.save* command on Ubuntu sqlite3, so you should open sqlite3 with the database name specified. Here the project uses *tot.db*.
```
/path/to/prj7_tot $ cd db
/path/to/prj7_tot/db $ sqlite3 tot.db
sqlite> .read dbinit.sql
sqlite> .read dbtest-load.sql
sqlite> .exit 
```

## Members
| Name         | Email        
|:------------ |:------------
| Chen Yazheng |icyz14@163.com
| Li Chengjie  |licj14@mails.tsinghua.edu.cn
| Chen Minghao |cmh14@mails.tsinghua.edu.cn
| Tian Yu      |tianyu.bruce@gmail.com
| Ning Minxing |1554948687@qq.com

## ToDo 

### Week 8 ToDo
* 田雨
    1. SideBarScroll
    2. 芯片标注
    
* 陈明豪
    1. 波形显示彩色

* 陈雅正
    1. 流程测试
    2. 编辑界面，file tree

* 李成杰
    - 题目类型：
        1. tab 可视化电路编辑 -> tab 编辑激励文件（1000 没有激励文件， 1001 没有激励文件）
        2. tab VHDL代码题目  -> tab 编辑激励文件（如果题目有默认激励文件则跳过该步）
    - 编辑界面layout
    
### Future ToDo
1. ModelSim 模块化
    a. 请求(文件，激励）
    b. 结果返回

2. 激励信号可视化编辑

## References
### Nodejs Express etc.
[setting-up-express-with-nginx-and-pm2/](http://blog.danyll.com/setting-up-express-with-nginx-and-pm2/)

### Electrical Symbols Library SVG
[commons.wikimedia.org/wiki/File:Electrical_symbols_library.svg](https://commons.wikimedia.org/wiki/File:Electrical_symbols_library.svg)</br>

### Draw2d Library
[Draw2d touch](http://www.draw2d.org/draw2d/)