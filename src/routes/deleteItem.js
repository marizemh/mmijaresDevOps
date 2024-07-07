// src/routes/deleteItem.js
const express = require('express');
const router = express.Router();
const db = require('../persistence/mysql');

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.send('Task deleted');
    });
});

module.exports = router;
