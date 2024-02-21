const express = require('express');
const router = express.Router();
const apprenantController = require('../controllers/apprenantController');

// Route pour récupérer tous les apprenants
router.get('/apprenants', apprenantController.getApprenants);

// Route pour récupérer un apprenant par son ID
router.get('/apprenant/:id', apprenantController.getApprenantById);

// Route pour créer un nouvel apprenant
router.post('/apprenant', apprenantController.postApprenant);

// Route pour mettre à jour un apprenant
router.put('/apprenant/:id', apprenantController.putApprenant);

// Route pour supprimer un apprenant
router.delete('/apprenant/:id', apprenantController.deleteApprenant);

module.exports = router;
