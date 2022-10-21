-- Insira um novo funcionário na tabela sakila.staff
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Rafael', 'Brandão', 2, 'rafaelbrandao1992@gmail.com', 1, 1, 'themonio', '12345678');
-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password)
	VALUES ('Rafael', 'Pyh', 2, 'pyhbmx@gmail.com', 1, 1, 'pyhbmx', '12345678'), ('hoguvats', 'thebig', 2, 'hoguvats@gmail.com', 1, 1, 'hoguvats', '123458');
-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer LIMIT 5;
SELECT * FROM sakila.actor;
-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name)
	VALUES ('categoria-1'), ('categoria-2'), ('categoria-3');
SELECT * FROM sakila.category;
-- Cadastre uma nova loja na tabela sakila.store
INSERT IGNORE INTO sakila.store (address_id, manager_staff_id)
	VALUES (3, 3);
SELECT * FROM sakila.store;
