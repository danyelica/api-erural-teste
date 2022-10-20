create table salas (
  id serial primary key,
  video text not null);
  
 create table participantes (
  usuario text not null,
  host boolean default false not null,
 sala_id integer references salas(id) not null);

Alter table salas Add url text;