const { connection } = require('../index');

// Contrôleur pour récupérer tous les apprenants
exports.getApprenants = (req, res) => {
    connection.query('SELECT * FROM apprenant', (error, data) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la récupération des apprenants');
        } else {
            res.status(200).json(data);
        }
    });
};

// Contrôleur pour récupérer un apprenant par son ID
exports.getApprenantById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM apprenant WHERE id = ?', [id], (error, data) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la récupération de l\'apprenant');
        } else {
            if (data.length === 0) {
                res.status(404).send('Apprenant non trouvé');
            } else {
                res.status(200).json(data[0]);
            }
        }
    });
};

// Contrôleur pour créer un nouvel apprenant
exports.postApprenant = (req, res) => {
    const { nom, prenom, numéro_de_téléphone } = req.body;
    connection.query('INSERT INTO apprenant (nom, prenom, numéro_de_téléphone) VALUES (?, ?, ?)', [nom, prenom, numéro_de_téléphone], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la création de l\'apprenant');
        } else {
            res.status(201).send('Apprenant créé avec succès');
        }
    });
};

// Contrôleur pour mettre à jour un apprenant
exports.putApprenant = (req, res) => {
    const id = req.params.id;
    const { nom, prenom, numéro_de_téléphone } = req.body;
    connection.query('UPDATE apprenant SET nom = ?, prenom = ?, numéro_de_téléphone = ? WHERE id = ?', [nom, prenom, numéro_de_téléphone, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la mise à jour de l\'apprenant');
        } else {
            res.status(200).send('Apprenant mis à jour avec succès');
        }
    });
};

// Contrôleur pour supprimer un apprenant
exports.deleteApprenant = (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM apprenant WHERE id = ?', [id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de la suppression de l\'apprenant');
        } else {
            res.status(200).send('Apprenant supprimé avec succès');
        }
    });
};
