const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./db.js'); // Ensure this points to your correct db connection file


const mainMenu = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    }).then((answer) => {
        switch (answer.action) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connection.end();
                break;
            default:
                break;
        }
    });
};

const viewAllDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
};

const viewAllRoles = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
};

const viewAllEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.table(res);
        mainMenu();
    });
};

const addDepartment = () => {
    inquirer.prompt({
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:'
    }).then((answer) => {
        connection.query('INSERT INTO department SET ?', { name: answer.name }, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Department ${answer.name} added!`);
            mainMenu();
        });
    });
};

const addRole = () => {
    connection.query('SELECT * FROM department', (err, departments) => {
        if (err) {
            console.error(err);
            return;
        }

        const departmentChoices = departments.map(department => ({
            name: department.name,
            value: department.id
        }));

        inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of the role:'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the salary for the role:'
            },
            {
                name: 'department_id',
                type: 'list',
                message: 'Select the department for the role:',
                choices: departmentChoices
            }
        ]).then((answers) => {
            connection.query('INSERT INTO role SET ?', {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department_id
            }, (err, res) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Role ${answers.title} added!`);
                mainMenu();
            });
        });
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the first name of the employee:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the employee:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the role ID for the employee:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter the manager ID for the employee (if any or):',
            default: null
        }
    ]).then((answers) => {
        connection.query('INSERT INTO employee SET ?', {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
        }, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Employee ${answers.first_name} ${answers.last_name} added!`);
            mainMenu();
        });
    });
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: 'Enter the ID of the employee you want to update:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the new role ID for the employee:'
        }
    ]).then((answers) => {
        connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answers.role_id, answers.employee_id], (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Employee role updated!`);
            mainMenu();
        });
    });
};

// Start the application
mainMenu();


