USE employee_db;

-- Insert departments
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES 
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Mike', 'Johnson', 3, NULL),
('Emily', 'Davis', 4, 3),
('Sarah', 'Brown', 5, NULL),
('Chris', 'Wilson', 6, 5);
