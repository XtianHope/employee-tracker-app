// Import inquirer & connection
const inquirer = require('inquirer');
const connection = require('./db/connection.js');
const functions = require('./table-functions.js');

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
            case 'View Employee By Manager':
                viewEmployeeByManager();
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



// Call function to start the app
startApp();