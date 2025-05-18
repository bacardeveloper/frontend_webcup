const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Sert les fichiers statiques du dossier courant
app.use(express.static(__dirname));

// Pour toute autre route, renvoie index.html (pour le routage Flutter)
app.get('#', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});