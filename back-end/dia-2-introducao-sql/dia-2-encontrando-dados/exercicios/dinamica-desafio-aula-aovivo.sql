-- Eu quero somente os nomes dos livros cadastrados na biblioteca;	
USE faculdade;
SELECT nome FROM biblioteca;
-- Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
USE faculdade;
SELECT COUNT(nome) FROM biblioteca;
-- Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro ‘Um livro do Ano’ e ‘Novas conquistas novas responsabilidades’;
USE faculdade;
SELECT * FROM biblioteca LIMIT 2 OFFSET 2;
-- Quero os livros mais recentes primeiro, e tambÃ©m em ordem alfabÃ©tica;
USE faculdade;
SELECT * FROM biblioteca ORDER BY ano_lancamento DESC, nome; 
-- Eu quero todas as informaÃ§Ãµes do livro com maior estoque na biblioteca. Somente o com o maior estoque;
USE faculdade;
SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1; 
-- Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
USE faculdade;
SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4; 