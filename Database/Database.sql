show databases;
create database job_application;
use job_application;

create table basic_details(
basic_id int unsigned primary key auto_increment,
language_id int unsigned not null,
first_name varchar(50) not null,
last_name varchar(50) not null,
designation varchar(50) not null,
address_one varchar(200) not null,
email varchar(100) unique not null,
address_two varchar(200),
phone_nob varchar(15) not null,
city varchar(50) not null,
state varchar(50) not null,
gender enum("Male","Female") not null,
zipcode varchar(10) not null,
relationship_status enum("Unmarried","Married","Prefer not to say") not null,
date_of_birth date not null
);

create table education_details(
education_id int unsigned primary key auto_increment,
basic_id int unsigned not null,
course varchar(20) not null,
board varchar(20) not null,
passing_year year not null,
result decimal(4,2) not null,

constraint fk_edu_basicDetails_key foreign key (basic_id) references basic_details(basic_id)
);

create table company_details(
id int unsigned primary key auto_increment,
basic_id int unsigned not null,
company_name varchar(100) not null, 
from_date date not null,
to_date date not null,
annual_package varchar(10) not null,
reason_to_leave varchar(300) not null,
ref_contact_nob varchar(15) not null,
ref_contact_name varchar(30) not null,

constraint fk_company_basic_key foreign key (basic_id) references basic_details(basic_id)
);

create table languages(
language_id int unsigned primary key auto_increment,
language_name varchar(50) not null
);

create table languages_known(
language_id int unsigned not null,
basic_id int unsigned not null,
language_can_read boolean,
language_can_write boolean,
language_can_speak boolean,

primary key(language_id,basic_id),
constraint fk_languagesKnown_key foreign key (language_id) references languages(language_id),
constraint fk_language_basic_key foreign key (basic_id) references basic_details(basic_id)
);

create table tech_languages_known(
 tech_language_id int unsigned primary key auto_increment,
 tech_language_name varchar(30) not null
 
);
create table tech_languages(
tech_language_id int unsigned not null,
basic_id int unsigned not null,
tech_language_expertise enum("Beginner","Intermediate","Expert") not null,

primary key (tech_language_id,basic_id),
constraint fk_techLanguage_known_key foreign key (tech_language_id) references tech_languages_known(tech_language_id),
constraint fk_techLanguage_basic_key foreign key (basic_id) references basic_details(basic_id)
);
create table reference_contacts(
reference_id int unsigned primary key auto_increment,
basic_id int unsigned not null,
reference_name varchar(50) not null,
reference_contact_num varchar(15) not null,
relation varchar(20) not null,
constraint fk_referenceContact_basic_key foreign key(basic_id) references basic_details(basic_id)
);

create table preferences(
preference_id int unsigned primary key auto_increment,
basic_id int unsigned not null,
location_id int unsigned,
notice_period varchar(20) not null,
expected_ctc varchar(20) not null,
current_ctc varchar(20) not null,
department_name enum("Development","Marketing","System-Designing","QA-Testing") not null,
constraint fk_preference_location_id foreign key (location_id) references preference_location(location_id),
constraint fk_preference_basic_key foreign key (basic_id) references basic_details(basic_id)
);

create table preference_location(
location_id int unsigned primary key auto_increment,
location_name varchar(40) not null
);

drop database job_application;