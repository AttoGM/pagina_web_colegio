const mysqlConnection = require('../database');

export function consultaLogin() {
    const query = 'SELECT * FROM USUARIO';
    mysqlConnection.query(query, ( err, rows ) => {
        if(!err) { return rows; } else { return err; }
    });
}