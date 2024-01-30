-- Insert data into Department Table --ID is auto-incremented
INSERT INTO department (name) VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

-- Insert data into Role Table --ID is auto-incremented
INSERT INTO role (title, salary, department_id) VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

-- Insert data into Employee Table --ID is auto-incremented
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Emily', 'Davis', 1, NULL),
('Isabella', 'White', 2, 1),
('Ethan', 'Martinez', 3, NULL),
('Liam', 'Parker', 4, 3),
('Aria', 'Murphy', 5, NULL),
('Michael', 'Carter', 6, 5),
('Natalie', 'Foster', 7, NULL),
('James', 'Thompson', 8, 7);


