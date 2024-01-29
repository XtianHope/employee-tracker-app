DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

-- Create Table for Departments
CREATE TABLE department (
    id INTEGER auto-increment PRIMARY KEY,
    name VARCHAR(30) NOT NULL -- To hold department name
);

-- Create table for Roles
CREATE TABLE role (
    id INTEGER auto-increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL, -- To hold role title
    salary DECIMAL, -- To hold role salary
    department_id INTEGER, -- To hold reference to department role belongs to
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- Create table for Employees
CREATE TABLE employee (
    id INTEGER auto-increment PRIMARY KEY,
    first_name VARCHAR(30), -- To hold employee first name
    last_name VARCHAR(30), -- To hold employee last name
    role_id INTEGER, -- To hold reference to role employee has
    manager_id INTEGER, -- To hold reference to another employee that is the manager of the current employee. This field may be null if the employee has no manager.
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);