-- Migration number: 0001 	 2024-08-05T23:38:46.986Z
drop table if exists question;
drop table if exists ai_painting;
drop table if exists painting;
drop table if exists answer;

create table if not exists ai_painting (
    id integer primary key autoincrement,
    painter text,
    ai_model text
);

create table if not exists painting (
    id integer primary key autoincrement,
    painter text not null,
    painted_year integer not null
);

create table if not exists answer (
    id integer primary key autoincrement,
    question_id integer not null references question(id),
    is_correct integer not null
);

create table if not exists question (
    id integer primary key autoincrement,
    painting_id integer not null references painting(id),
    ai_painting_id integer not null references ai_painting(id)
);
