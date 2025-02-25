CREATE DATABASE employee_db;
DROP DATABASE IF EXISTS employee_db;
-- Create the database
CREATE DATABASE employee_db;

-- Use the database
USE employee_db;

-- Create the department table
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

-- Create the role table
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employee table
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
