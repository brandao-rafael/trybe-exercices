-- self join example
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS Employee
INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;

-- exercices to fix
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT CONCAT(e.first_name, ' ', e.last_name) AS 'employee_name', 
	   CONCAT(m.first_name, ' ', m.last_name) AS 'manager_name'
FROM hr.employees AS e
INNER JOIN hr.employees AS m
ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;
-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT CONCAT(manager.first_name, ' ', manager.last_name) AS `Manager`, COUNT(*) AS `number_employees`
FROM hr.employees AS manager
INNER JOIN hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;