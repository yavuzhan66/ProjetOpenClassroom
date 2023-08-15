/*
Creation du SERVEUR :
avec le port 3000
*/


const http = require('http');
//vous importez le package HTTP natif de Node et l'utilisez pour créer un serveur,
//en passant une fonction qui sera exécutée à chaque appel effectué vers ce serveur. 

const app = require('./app');
//importation de notre application express

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
//créer un serveur avec la méthode createServer()


server.listen(process.env.PORT || 3000);
//il ecoutera ce port pour le backend

