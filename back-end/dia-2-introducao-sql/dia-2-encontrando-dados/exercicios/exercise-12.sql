-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
USE Scientists;
SELECT Name FROM Projects
ORDER BY Hours DESC LIMIT 1;