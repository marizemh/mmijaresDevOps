const express = require('express');
const bodyParser = require('body-parser');
const addItem = require('./routes/addItem');
const deleteItem = require('./routes/deleteItem');
const getItems = require('./routes/getItems');
const updateItem = require('./routes/updateItem');

const app = express();
app.use(bodyParser.json());

app.post('/items', addItem);
app.delete('/items/:id', deleteItem);
app.get('/items', getItems);
app.put('/items/:id', updateItem);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;