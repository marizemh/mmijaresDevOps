// src/routes/getItems.js
const express = require('express');
const router = express.Router();
const db = require('../persistence/mysql');

router.get('/', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
