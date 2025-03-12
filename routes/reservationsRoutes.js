const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

// /reservations
router.get('/', (req,res) => {reservationsController.getAll(req,res)});

// /reservations/status/:status
router.get('/status/:status', (req,res) => {reservationsController.getByStatus(req,res)});

// /reservations/average_cost
router.get('/average_cost', (req,res) => {reservationsController.averageCost(req,res)});

// /reservations/above/:price
router.get('/above/:price', (req,res) => {reservationsController.above(req,res)});

// /reservations/rooms/type/:type
router.get('/rooms/type/:type', (req,res) => {reservationsController.getByRoomType(req,res)});

//  /reservations/rooms/:room
router.get('/room/:room', (req,res) => {reservationsController.getByRoom(req,res)});

// /reservation/clients/best
router.get('/clients/best', (req,res) => {reservationsController.bestClient(req,res)});

// /reservations/:id
router.get('/:id', (req,res) => {reservationsController.getOne(req,res)});


module.exports = router;