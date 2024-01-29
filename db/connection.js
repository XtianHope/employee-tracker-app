// Connection to SQL
const mysql = require('mysql2');

// Connect to MySQL database
const connection = mysql.createConnection({
    host: 'localhost', // NOTE: Need to add MySQL host
    user: 'root', // NOTE: Need to add MySQL username
    password: 'root', // NOTE: Need to add MySQL password
    database: 'employee_tracker_db' // NOTE: Need to add MySQL database name
});

// Export connection for module use
module.exports = connection;