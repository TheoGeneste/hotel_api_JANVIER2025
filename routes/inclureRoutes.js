const express = require('express');
const router = express.Router();
const inclureController = require('../controllers/inclureController');
const AuthController = require('../controllers/authController');

// /inclures
router.get('/', (req,res) => { inclureController.getAll(req,res) });

// /inclures/reservation/:id
router.get('/reservation/:id', (req,res) => { inclureController.getByReservation(req,res) });

// /inclures/total_service/reservation/:id
router.get('/total_service/reservation/:id', (req,res) => { inclureController.totalServiceByReservation(req,res) });

// /inclures/count_service/reservation/:id
router.get('/count_service/reservation/:id', (req,res) => { inclureController.countServiceByReservation(req,res) });

// /inclures/services_by_reservation/type/:type
router.get('/services_by_reservation/type/:type', (req,res) => { inclureController.servicesByReservationType(req,res) });

// /inclures/count_service_used/:service_name
router.get('/count_service_used/:service_name', (req,res) => { inclureController.countServiceUsed(req,res) });

// /inclures/services/reservation/total/above/:price
router.get('/services/reservation/total/above/:price', (req,res) => { inclureController.getServicesByReservationAbovePrice(req,res) });

// /inclures/:id
router.get('/:id', (req,res) => { inclureController.getOne(req,res) });

// POST /inclures
router.post('/',AuthController.verifyToken, (req,res) => { inclureController.create(req,res) });

// PATCH /inclures/:id
router.patch('/:id',AuthController.verifyToken, (req,res) => { inclureController.update(req,res) });

// DELETE /inclures/:id
router.delete('/:id',AuthController.verifyToken, (req,res) => { inclureController.deleteOne(req,res) });

module.exports = router;