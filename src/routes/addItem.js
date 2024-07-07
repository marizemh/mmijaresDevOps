// src/routes/addItem.js
const express = require('express');
const router = express.Router();
const db = require('../persistence/mysql');

router.post('/', (req, res) => {
    const { title, description } = req.body;
    db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, result) => {
        if (err) throw err;
        res.send('Task added');
    });
});

module.exports = router;
