use testdb;

select * from Agency;
select * from User;

SET GLOBAL log_bin_trust_function_creators = 1;

grant all privileges on *.* to 'billy'@'%' with grant option;

FLUSH PRIVILEGES;

