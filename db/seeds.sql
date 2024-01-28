-- Insert data into Department Table
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

-- Insert data into Role Table
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Lead Engineer', 150000, 2),
(4, 'Software Engineer', 120000, 2),
(5, 'Account Manager', 160000, 3),
(6, 'Accountant', 125000, 3),
(7, 'Legal Team Lead', 250000, 4),
(8, 'Lawyer', 190000, 4);

-- Insert data into Employee Table 
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Emily', 'Davis', 1, NULL), --Emily is a Sales Lead -- Emily is the manager of Isabella 
(2, 'Isabella', 'White', 2, 1), --Isabella is a Salesperson -- Isabella reports to Emily
(3, 'Ethan', 'Martinez', 3, NULL), --Ethan is a Lead Engineer -- Ethan is the manager of James 
(4, 'Liam', 'Parker', 4, 3), --Liam is a Software Engineer -- Liam reports to Ethan 
(5, 'Aria', 'Murphy', 5, NULL), --Aria is an Account Manager -- Aria is the manager of Michael 
(6, 'Michael', 'Carter', 6, 5), --Michael is an Accountant -- Michael reports to Aria 
(7, 'Natalie', 'Foster', 7, NULL), --Natalie is a Legal Team Lead -- Natalie is the manager of James 
(8, 'James', 'Thompson', 8, 7), --James is a Lawyer -- James reports to Natalie 


