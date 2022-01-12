use testdb;

/*alter table Dept convert to charset utf8;
alter table Emp convert to charset utf8;
*/

alter table Emp convert to charset utf8;
/*create table Emp(
	id int unsigned not null auto_increment,
    ename varchar(31) not null,
    dept tinyint not null ,
    salary int not null default 0,
    primary key(id),
    foreign key(dept) references Dept(id)
    );
    */
    
select * from Dept;
update Dept set dname='개발부' where id =2;
insert into Dept (pid, dname) values (1, '영업부');
insert into Dept (pid, dname) values (1, '영업1팀'), (1, '영업2팀'), (1, '영업3팀'), (2, '서버팀'), (2, '클라이언트팀');

select d1.dname as '상위부서', d2.* from Dept d1 inner join Dept d2 on d1.id = d2.pid;


select * from Emp;


select testdb.f_rand1('KOREA');
select f_randname();
desc Emp;
insert into Emp(ename, dept, salary) values(f_randname(), f_rand1('34567'), f_rand1('123456789')*100);

call sp_test_emp(48);

select dept, count(*) from Employee group by dept;

select  d1.id as '부서ID', d1.dname as '부서명' , count(*) as '소속인원수' 
from Dept d1  inner join Employee e1 on d1.id = e1.dept 
group by e1.dept;


SELECT e.*, d.dname
		from Dept d right outer join Employee e on d.id = e.dept;
#	where e.id=5;
  
  delete from Dept where id=3;



create table Student (
	id int unsigned not null AUTO_INCREMENT,
  name VARCHAR(32) not null,
  age TINYINT(1),
  PRIMARY KEY(id)
    );
    
CREATE TABLE University (
id int UNSIGNED NOT NULL AUTO_INCREMENT,
name varchar(32) NOT NULL,
explanation TEXT,
PRIMARY KEY(id)
);    


call sp_add_student(10);
select * from Student;

insert into University(name) values('서울대'), ('연세대'),('고려대'), ('성균관대'), ('한양대'),('가천대'),('중앙대');
insert into University(name) values('경희대'), ('수원대');
select * from University;


select * from Dept;

select *, (select ename from Employee where id=d.captain) as '부서장명' from Dept d;

select *
	from Dept d left outer join Employee e on d.captain = e.id;
  
  select @@autocommit;
  
  start transaction;
  select * from Dept where id in (1,2);
  
  update Dept set dname = '영업부서' where id =1;

update Dept d set captain = (select id from Employee where dept = d.id order by rand() limit 1);



select * from Student s full outer join University u on s.id = u.id 
where u.id is null or s.id is null
order by s.id asc;
    