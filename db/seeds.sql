-- Insert data into Department Table --ID is auto-incremented
INSERT INTO department (id, name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

-- Insert data into Role Table --ID is auto-incremented
INSERT INTO role (id, title, salary, department_id) VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

-- Insert data into Employee Table --ID is auto-incremented
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
('Emily', 'Davis', 1, NULL), --Emily is a Sales Lead -- Emily is the manager of Isabella 
('Isabella', 'White', 2, 1), --Isabella is a Salesperson -- Isabella reports to Emily
('Ethan', 'Martinez', 3, NULL), --Ethan is a Lead Engineer -- Ethan is the manager of James 
('Liam', 'Parker', 4, 3), --Liam is a Software Engineer -- Liam reports to Ethan 
('Aria', 'Murphy', 5, NULL), --Aria is an Account Manager -- Aria is the manager of Michael 
('Michael', 'Carter', 6, 5), --Michael is an Accountant -- Michael reports to Aria 
('Natalie', 'Foster', 7, NULL), --Natalie is a Legal Team Lead -- Natalie is the manager of James 
('James', 'Thompson', 8, 7), --James is a Lawyer -- James reports to Natalie 


