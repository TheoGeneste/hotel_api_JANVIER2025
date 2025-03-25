const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');
const AuthController = require('../controllers/authController');

// Toutes les routes de ce fichier commenceront par /clients

// GET /clients/
router.get('/', (req, res) => {ClientsController.findAllClients(req, res)});

// GET /me
router.get('/me',AuthController.verifyToken, (req, res) => {ClientsController.findMe(req, res)});

// GET /clients/reservation/year/:year
router.get('/reservation/year/:year', (req, res) => {ClientsController.findClientsByReservationYear(req, res)});

// GET /clients/reservation/month/:month/year/:year/
router.get('/reservation/month/:month/year/:year', (req, res) => {ClientsController.findClientsByReservationYearAndMonth(req, res)});

// GET /clients/total_cost/above/:cost
router.get('/total_cost/above/:cost', (req, res) => {ClientsController.findClientsByTotalCostAbove(req, res)});

// GET /clients/registration_date/:month/:year
router.get('/registration_date/:month/:year', (req, res) => {ClientsController.findClientsByRegistrationDate(req, res)});

// GET /clients/reservation/roomType/:roomType
router.get('/reservation/roomType/:roomType', (req, res) => {ClientsController.findClientsByReservationRoomType(req, res)});

// GET /clients/max_reservation_cost
router.get('/max_reservation_cost', (req, res) => {ClientsController.findClientWithMaxReservationCost(req, res)});

// GET /clients/:id
router.get('/:id', (req, res) => {ClientsController.findOneClient(req, res)});

// POST /clients/
router.post('/',AuthController.verifyToken, (req, res) => {ClientsController.createClient(req, res)});

// PATCH /clients/:id
router.patch('/:id',AuthController.verifyToken, (req, res) => {ClientsController.updateClient(req, res)});

// DELETE /clients/:id
router.delete('/:id',AuthController.verifyToken, (req, res) => {ClientsController.deleteClient(req, res)});

module.exports = router;