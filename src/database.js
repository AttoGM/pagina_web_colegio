const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_page'
});

mysqlConnection.connect(function (err) {
    if(err) { 
        console.log(err);
        return
    } else {
        console.log('Base de datos conectada');
    }
});

module.exports = mysqlConnection;