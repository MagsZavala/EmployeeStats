const db = require('./db.js');

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    });
};

// Add similar functions for viewAllRoles, viewAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole

module.exports = {
    viewAllDepartments,
    // Export other functions similarly
};
