// src/routes/updateItem.js
const express = require('express');
const router = express.Router();
const db = require('../persistence/mysql');

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    db.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id], (err, result) => {
        if (err) throw err;
        res.send('Task updated');
    });
});

module.exports = router;
