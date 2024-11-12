const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Produit A' }, { id: 2, name: 'Produit B' }]);
});

module.exports = app;
