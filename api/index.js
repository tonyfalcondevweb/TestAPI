const express = require('express');
const app = express();

// Middleware JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon API Express déployée sur Vercel!');
});

// Export de l'app pour Vercel
module.exports = app;
