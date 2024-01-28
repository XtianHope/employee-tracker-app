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
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30), --To hold employee first name
    last_name VARCHAR(30), --To hold employee last name
    role_id INT, --To hold reference to role employee has
    manager_id INT --To hold reference to another employee that is manager of the current employee. This field may be null if employee has no manager.
);