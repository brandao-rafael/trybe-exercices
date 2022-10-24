-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
USE Scientists;
SELECT * FROM Projects
ORDER BY Hours LIMIT 5;