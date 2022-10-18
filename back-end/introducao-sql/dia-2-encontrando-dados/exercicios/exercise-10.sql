-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
USE Scientists;
SELECT * FROM Projects
ORDER BY Hours DESC LIMIT 3;