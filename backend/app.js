/*
creation de l'application EXPRESS js
*/

const express = require ('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'Votre requete a bien été reçu !'});
});
//ici on définit le port sur lequel notre serveur va écouter les requêtes 

module.exports = app;