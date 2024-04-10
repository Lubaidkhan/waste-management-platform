const express = require('express');
const router = express.Router();

const pickupsController = require('../controllers/pickupsController');

router.post('/', pickupsController.getAllPickups);
router.post('/newpickup', pickupsController.createPickup);
router.put('/:id', pickupsController.updatePickup);
router.delete('/:id', pickupsController.deletePickup);

module.exports = router;
