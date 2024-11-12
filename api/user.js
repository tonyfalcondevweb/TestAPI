const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    // Ici, on pourrait ajouter un utilisateur dans la base de données
    res.status(201).json({ message: 'Utilisateur créé!', user: newUser });
});

module.exports = app;
