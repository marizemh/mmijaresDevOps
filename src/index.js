// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const addItem = require('./routes/addItem');
const getItems = require('./routes/getItems');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/add', addItem);
app.use('/get', getItems);
app.use('/update', updateItem);
app.use('/delete', deleteItem);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
