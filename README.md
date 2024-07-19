# EmployeeStats

## Description
Keeping track of employees has never been this easy. Take a look at your employees information

## Table of Contents
Installation
Usage
Database Schema
Demo
Bonus Features
License

## Installation
Clone the repository: 
git clone git@github.com:MagsZavala/EmployeeStats.git
Navigate to the project directory:
cd EmployeeStats
Install the required dependencies:
npm install
npm i inquirer@8.2.4

## Usage
Create the MySQL database and tables. Use the provided schema.sql file to set up the database schema.
Populate the database with initial data using the seeds.sql file if needed.
Create a .env file in the root directory and add your MySQL credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db
Run the application:
node index.js

## Features
-View all departments: Displays a formatted table of department names and their IDs.
-View all roles: Displays a formatted table of job titles, role IDs, department names, and salaries.
-View all employees: Displays a formatted table of employee IDs, names, job titles, departments, salaries, and managers.
-Add a department: Prompts the user to enter the name of a new department and adds it to the database.
-Add a role: Prompts the user to enter the name, salary, and department for a new role and adds it to the database.
-Add an employee: Prompts the user to enter the employee’s first name, last name, role, and manager, and adds the employee to the database.
-Update an employee role: Prompts the user to select an employee and update their role in the database.
Database Schema
The database schema includes three tables: department, role, and employee.

## Department Table
id: INT PRIMARY KEY
name: VARCHAR(30)
Role Table
id: INT PRIMARY KEY
title: VARCHAR(30)
salary: DECIMAL
department_id: INT (References department.id)
Employee Table
id: INT PRIMARY KEY
first_name: VARCHAR(30)
last_name: VARCHAR(30)
role_id: INT (References role.id)
manager_id: INT (References employee.id, NULL if no manager)

## Demo
A walkthrough video demonstrating the functionality of the application can be viewed here.
[Uploading Screen Recording 2024-07-18 at 10.07.41 PM.zip…]

## Bonus Features
Update employee managers
View employees by manager
View employees by department
Delete departments, roles, and employees
View the total utilized budget of a department (combined salaries of all employees in that department)

## License
none

