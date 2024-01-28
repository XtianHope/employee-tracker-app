// Import
const inquirer = require('inquirer');
const connection = require('./db/connection.js');

// Function to display data
function displayData(data) {
    console.table(data);
    startApp();
}


// Function to display all departments
function displayDepartments() {
    console.table(departments);
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


// Function to display all roles
function displayRoles() {
    console.table(roles);
    startApp();
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




// Function to display all employees
function displayEmployees() {
    console.table(employees);
    startApp();
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




// Function to display all employees by manager
function displayEmployeesByManager() {
    console.table(employeesByManager);
    startApp();
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
                displayData(results);
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
            connection.query('UPDATE employee SET manager_id = ? WHERE id = ?', [newManagerId, employeeId], (error, results) => {
                if (error) throw error;
                console.log('Employee manager updated successfully.');
                displayData(results);
            });
        });
}



// Function to display all employees by department
function displayEmployeesByDepartment() {
    console.table(employeesByDepartment);
    startApp();
}

// Function to view all employees by department
function viewEmployeesByDepartment() {
    connection.query('SELECT * FROM department', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
    });
}


// Function to add a department
function addDepartment() {
    connection.query('SELECT * FROM department', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
    });
}


// Function to add a role
function addRole() {
    connection.query('SELECT * FROM role', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
    });
}


// Function to add an employee
function addEmployee() {
    connection.query('SELECT * FROM employee', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
    });
}


// Function to update employee role
function updateEmployeeRole() {
    connection.query('SELECT * FROM role', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
    });
}


// Function to view department budget
function viewDepartmentBudget() {
    connection.query('SELECT * FROM department', (error, results) => {
        if (error) throw error;
        console.table(results);
        startApp();
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