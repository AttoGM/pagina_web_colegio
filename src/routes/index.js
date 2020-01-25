const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    //res.render('index.html', { title: 'Primera Pagina' });
    mysqlConnection.query('select * from persona', (err, rows, fields) => {
        if(!err) { 
            console.log(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/contact', (req, res) => {
    res.render('contac.html', { title: 'Contacto Pagina' });
});

module.exports = router;