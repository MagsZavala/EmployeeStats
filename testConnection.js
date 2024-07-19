const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');

    connection.query('SELECT * FROM department', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
        } else {
            console.table(results);
        }
        connection.end();
    });
});
