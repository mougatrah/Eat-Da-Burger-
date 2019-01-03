drop database if exists burgers_db;
create database burgers_db;

use burgers_db;
create table burger(
    id int not null auto_increment,
    burger_name varchar(200) not null,
    devoured boolean not null default 0,
    primary key (id)
);

