// api/users.js
const express = require('express');
const app = express();

app.use(express.json());  // Middleware pour lire les corps des requêtes

// Route GET pour /users
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// Route POST pour /users
app.post('/users', (req, res) => {
    const newUser = req.body;
    // Ici, on pourrait ajouter un utilisateur dans la base de données
    res.status(201).json({ message: 'Utilisateur créé!', user: newUser });
});

module.exports = app;
