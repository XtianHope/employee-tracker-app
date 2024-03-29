// Import inquirer & connection
const inquirer = require('inquirer');
const connection = require('./db/connection.js');

// Function to start the app
// Defining inquirer prompt & logic for each action
function startApp() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'Choose An Action:',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'View Employees By Manager', 'Update Employee Manager', 'View Employees By Department', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee Role', 'View Department Budget', 'Delete Department', 'Delete Role', 'Delete Employee','Exit']
    })
    .then((answer) => {
        switch (answer.action) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;    
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'View Employees By Manager':
                viewEmployeesByManager();
                break;
            case 'Update Employee Manager':
                updateEmployeeManager();
                break;
            case 'View Employees By Department':
                viewEmployeesByDepartment();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View Department Budget':
                viewDepartmentBudget();
                break;
            case 'Delete Department':
                deleteDepartment();
                break;
            case 'Delete Role':
                deleteRole();
                break;
            case 'Delete Employee':
                deleteEmployee();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

// Function to display data
function displayData(data) {
    console.table(data);
    startApp();
}

// Function to view all departments
function viewAllDepartments() {
    const query = 'SELECT * FROM department';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching departments:', error.message);
        } else {
            displayData(results);
        }
    });
}



// Function to view all roles
function viewAllRoles() {
    const query = 'SELECT * FROM role';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching roles:', error.message);
        } else {
            displayData(results);
        }
    });
}



// Function to view all employees
function viewAllEmployees() {
    const query = 'SELECT * FROM employee';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching employees:', error.message);
        } else {
            displayData(results);
        }
    });
}



// Function to view all employees by manager
function viewEmployeesByManager() {
    inquirer
        .prompt({
            name: 'managerId',
            type: 'input',
            message: 'Enter the Manager ID:',
        })
        .then((answer) => {
            const managerId = answer.managerId;
            connection.query('SELECT * FROM employee WHERE manager_id = ?', [managerId], (error, results) => {
                if (error) throw error;
                
                if (results.length > 0) {
                    displayData(results);
                } else {
                    console.log('No employees found for the provided Manager ID.');
                    startApp();
                }
            });
        });
}

// Function to update employee manager
function updateEmployeeManager() {
    inquirer
        .prompt([
            {
                name: 'employeeId',
                type: 'input',
                message: 'Enter the Employee ID to update:',
            },
            {
                name: 'newManagerId',
                type: 'input',
                message: 'Enter the new Manager ID:',
            },
        ])
        .then((answers) => {
            const { employeeId, newManagerId } = answers;
            connection.query('UPDATE employee SET manager_id = ? WHERE id = ?', [newManagerId, employeeId], (error) => {
                if (error) throw error;
                connection.query('SELECT * FROM employee WHERE id = ?', [employeeId], (fetchError, results) => {
                    if (fetchError) throw fetchError;
                    console.log('Employee manager updated successfully.');
                    displayData(results);
                });
            });
        });
}




// Function to view all employees by department
function viewEmployeesByDepartment() {
    connection.query('SELECT * FROM department', (error, departments) => {
        if (error) {
            console.error('Error fetching departments:', error.message);
            startApp();
        } else {
            const departmentChoices = departments.map((department) => ({
                name: department.name,
                value: department.id,
            }));

            inquirer
                .prompt({
                    name: 'departmentId',
                    type: 'list',
                    message: 'Select a department:',
                    choices: departmentChoices,
                })
                .then((answer) => {
                    const { departmentId } = answer;
                    const query = 'SELECT * FROM employee WHERE role_id IN (SELECT id FROM role WHERE department_id = ?)';

                    connection.query(query, [departmentId], (error, employees) => {
                        if (error) {
                            console.error('Error fetching employees by department:', error.message);
                        } else {
                            console.table(employees);
                        }
                        startApp();
                    });
                });
        }
    });
}


// Function to add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                name: 'id',
                type: 'input',
                message: 'Enter the department ID:',
            },
            {
                name: 'name',
                type: 'input',
                message: 'Enter the department name:',
            },
        ])
        .then((answer) => {
            const { id, name } = answer;
            const query = 'INSERT INTO department (id, name) VALUES (?, ?)';

            connection.query(query, [id, name], (error, results) => {
                if (error) {
                    console.error('Error adding department:', error.message);
                } else {
                    console.log('Department added successfully.');
                    startApp();
                }
            });
        });
}


// Function to add a role
function addRole() {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the role title:',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the role salary:',
            },
            {
                name: 'departmentId',
                type: 'input',
                message: 'Enter the department ID for the role:',
            },
        ])
        .then((answers) => {
            const { title, salary, departmentId } = answers;
            const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';

            connection.query(query, [title, salary, departmentId], (error, results) => {
                if (error) {
                    console.error('Error adding role:', error.message);
                } else {
                    console.log('Role added successfully.');
                    startApp();
                }
            });
        });
}


// Function to add an employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Enter the employee\'s first name:',
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Enter the employee\'s last name:',
            },
            {
                name: 'roleId',
                type: 'input',
                message: 'Enter the role ID for the employee:',
            },
            {
                name: 'managerId',
                type: 'input',
                message: 'Enter the manager ID for the employee (if applicable):',
            },
        ])
        .then((answers) => {
            const { firstName, lastName, roleId, managerId } = answers;
            const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

            connection.query(query, [firstName, lastName, roleId, managerId], (error, results) => {
                if (error) {
                    console.error('Error adding employee:', error.message);
                } else {
                    console.log('Employee added successfully.');
                    startApp();
                }
            });
        });
}


// Function to update employee role
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                name: 'employeeId',
                type: 'input',
                message: 'Enter the Employee ID to update role:',
            },
            {
                name: 'newRoleId',
                type: 'input',
                message: 'Enter the new Role ID:',
            },
        ])
        .then((answers) => {
            const { employeeId, newRoleId } = answers;
            const query = 'UPDATE employee SET role_id = ? WHERE id = ?';

            connection.query(query, [newRoleId, employeeId], (error, results) => {
                if (error) {
                    console.error('Error updating employee role:', error.message);
                } else {
                    console.log('Employee role updated successfully.');
                    startApp();
                }
            });
        });
}

// Function to view department budget
function viewDepartmentBudget() {
    inquirer
        .prompt({
            name: 'departmentId',
            type: 'input',
            message: 'Enter the Department ID to view budget:',
        })
        .then((answer) => {
            const departmentId = answer.departmentId;
            const query = 'SELECT SUM(role.salary) AS total_budget FROM role WHERE role.department_id = ?';

            connection.query(query, [departmentId], (error, results) => {
                if (error) {
                    console.error('Error fetching department budget:', error.message);
                } else {
                    console.log('Total Budget:', results[0].total_budget);
                    startApp();
                }
            });
        });
}

// Function to delete department
function deleteDepartment() {
    inquirer
        .prompt({
            name: 'departmentId',
            type: 'input',
            message: 'Enter the Department ID to delete:',
        })
        .then((answer) => {
            const departmentId = answer.departmentId;
            const query = 'DELETE FROM department WHERE id = ?';

            connection.query(query, [departmentId], (error, results) => {
                if (error) {
                    console.error('Error deleting department:', error.message);
                } else {
                    console.log('Department deleted successfully.');
                    startApp();
                }
            });
        });
}

// Function to delete role
function deleteRole() {
    inquirer
        .prompt({
            name: 'roleId',
            type: 'input',
            message: 'Enter the Role ID to delete:',
        })
        .then((answer) => {
            const roleId = answer.roleId;
            const query = 'DELETE FROM role WHERE id = ?';

            connection.query(query, [roleId], (error, results) => {
                if (error) {
                    console.error('Error deleting role:', error.message);
                } else {
                    console.log('Role deleted successfully.');
                    startApp();
                }
            });
        });
}


// Function to delete employee
function deleteEmployee() {
    inquirer
        .prompt({
            name: 'employeeId',
            type: 'input',
            message: 'Enter the Employee ID to delete:',
        })
        .then((answer) => {
            const employeeId = answer.employeeId;
            const query = 'DELETE FROM employee WHERE id = ?';

            connection.query(query, [employeeId], (error, results) => {
                if (error) {
                    console.error('Error deleting employee:', error.message);
                } else {
                    console.log('Employee deleted successfully.');
                    startApp();
                }
            });
        });
}

// Call function to start the app
startApp();