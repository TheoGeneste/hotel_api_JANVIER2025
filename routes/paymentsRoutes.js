const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const AuthController = require('../controllers/authController');

// /payments
router.get('/', (req,res) => { paymentsController.getAll(req,res) });

// /payments/payment_method/:type
router.get('/payment_method/:type', (req,res) => { paymentsController.getByPaymentMethod(req,res) });

// /payments/above/:price
router.get('/above/:price', (req,res) => { paymentsController.above(req,res) });

// /payments/reservation/status/:status
router.get('/reservation/status/:status', (req,res) => { paymentsController.getByReservationStatus(req,res) });

// /payments/total/month/:month/year/:year
router.get('/total/month/:month/year/:year', (req,res) => { paymentsController.totalByMonth(req,res) });

// /payments/total/reservation/status/:status
router.get('/total/reservation/status/:status', (req,res) => { paymentsController.totalByReservationStatus(req,res) });

// /payments/:id
router.get('/:id', (req,res) => { paymentsController.getOne(req,res) });

// POST /payments
router.post('/',AuthController.verifyToken, (req,res) => { paymentsController.create(req,res) });

// PATCH /payments/:id
router.patch('/:id',AuthController.verifyToken, (req,res) => { paymentsController.update(req,res) });

// DELETE /payments/:id
router.delete('/:id',AuthController.verifyToken, (req,res) => { paymentsController.deleteOne(req,res) });

module.exports = router;