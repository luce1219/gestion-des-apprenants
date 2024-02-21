const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const cors = require ('cors');

app.use(cors());

app.use((req, res, next) => {
    const event = new Date();
    console.log('AUTH TIME:', event.toString());
    next();
});

const bodyParser = require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Créez une connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lucette',
    database: 'gestion_des_apprenants',
});

// Connectez-vous à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL');
       
    }
});

module.exports = {
    connection: connection
};


// Utilisez les routes après avoir établi la connexion à la base de données
app.use('/', require('./routes/apprenant.routes'));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
