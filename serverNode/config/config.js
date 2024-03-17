const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appcajeros'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Base de datos conectada');
});

module.exports = db;