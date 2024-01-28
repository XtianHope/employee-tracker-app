-- Create Table for Departments
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) --To hold department name
);

-- Create talbe for Roles
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30), --To hold role title
    salary DECIMAL, --To hold role salary
    department_id INT --To hold reference to department role belongs to
);

-- Create table for Employees