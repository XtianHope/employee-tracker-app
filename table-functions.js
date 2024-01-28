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

