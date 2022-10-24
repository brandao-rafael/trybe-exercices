-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
USE Scientists;
SELECT Name FROM Projects
ORDER BY Hours LIMIT 1 OFFSET 1;