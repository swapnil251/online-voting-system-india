const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');

    // Execute the SQL query
    const sql = `
        CREATE TABLE contacts (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(100),
            mobile VARCHAR(15)
        );
    `;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Table created successfully.');
    });
});