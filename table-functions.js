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