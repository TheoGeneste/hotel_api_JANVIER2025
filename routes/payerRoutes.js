const express = require('express');
const servicesController = require('../controllers/payerController');
const auth = require('../controllers/authController');
const router = express.Router();

router.get('/', auth.verifyToken, servicesController.getAll);
router.post('/', auth.verifyToken, servicesController.create);
router.delete('/:id', auth.verifyToken, servicesController.deletePayer);
router.patch('/:id', auth.verifyToken, servicesController.update);

module.exports = router;
