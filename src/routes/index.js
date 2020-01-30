const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Home' });
});

router.get('/contact', (req, res) => {
    res.render('contac.html', { title: 'Contacto Pagina' });
});

module.exports = router;