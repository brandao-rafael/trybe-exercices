SET SQL_SAFE_UPDATES = 0;
-- Example 2 columns same time
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;
SELECT * FROM sakila.staff;
-- Example lot update
-- option - 1 - fixed conditions
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);
-- option - 2 - dimanic conditions
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE'
			  WHEN 2 THEN 'DAVIS'
              WHEN 3 THEN 'CAROLINE'
		ELSE first_name
END);
-- sequential update
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- Exercises
-- Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome “JULIA” para “JULES”.
UPDATE sakila.actor
SET first_name = 'JULIA'
WHERE first_name = 'JULES';
SELECT * FROM sakila.actor;
-- Altere a linha da tabela categoria onde o valor da coluna x é igual “Sci-fi” para “Science Fiction”
USE sakila;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';
SELECT * FROM category;
-- Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação “G”, “PG” ou “PG-13” e um custo de substituição maior que $20
USE sakila;
UPDATE film
SET rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;
SELECT * FROM film;
-- Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
USE sakila;
UPDATE film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
END);
SELECT * FROM film;