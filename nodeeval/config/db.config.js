const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'db_school'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("db conected")
});

module.exports = db;