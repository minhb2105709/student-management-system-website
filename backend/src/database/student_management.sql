create database studentManagement default charset utf8mb4;
use studentManagement;

create table roles (
	role_ID int primary key,
    role_name varchar(255)
);

insert into roles values (0, 'admin'), (2, 'lecturer'), (1, 'student');

-- Tài Khoản
create table accounts (
	acc_ID int primary key auto_increment,
    acc_username varchar(255) unique not null,
    acc_password varchar(255) not null,
    role_ID int default 1,
    foreign key (role_ID) references roles (role_ID)
);