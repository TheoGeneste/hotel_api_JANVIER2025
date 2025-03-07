const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/roomsController');
// Toutes les routes de ce fichier commenceront par /rooms

// GET /rooms/
router.get('/', (req, res) => {RoomsController.findAllRooms(req, res)});

// GET /rooms/available
router.get('/available', (req, res) => {RoomsController.findAvailableRooms(req, res)});

// GET /rooms/average_capacity
router.get('/average_capacity', (req, res) => {RoomsController.averageCapacity(req, res)});

// GET /rooms/pricesAbove/:price
router.get('/pricesAbove/:price', (req, res) => {RoomsController.pricesAbove(req, res)});

// GET /rooms/pricesBelow/:price
router.get('/pricesBelow/:price', (req, res) => {RoomsController.pricesBelow(req, res)});

// GET /rooms/prices/:min/:max
router.get('/prices/:min/:max', (req, res) => {RoomsController.pricesBetween(req, res)});

// GET /rooms/types/:type
router.get('/types/:type', (req, res) => {RoomsController.findRoomsByType(req, res)});

// GET /rooms/capacityAbove/:capacity
router.get('/capacityAbove/:capacity', (req, res) => {RoomsController.capacityAbove(req, res)});

// GET /rooms/types/:type/available
router.get('/types/:type/available', (req, res) => {RoomsController.findAvailableRoomsByType(req, res)});

// GET /rooms/:id
router.get('/:id', (req, res) => {RoomsController.findOneRoom(req, res)});




module.exports = router;