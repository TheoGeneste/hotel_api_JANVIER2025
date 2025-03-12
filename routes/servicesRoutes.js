const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// /services
router.get('/', (req,res) => { servicesController.getAll(req,res) });

// /services/above/:price
router.get('/above/:price', (req,res) => { servicesController.above(req,res) });

// /services/most_used
router.get('/most_used', (req,res) => { servicesController.mostUsed(req,res) });

// /services/total/room/type/:type
router.get('/total/room/type/:type', (req,res) => { servicesController.totalRoomType(req,res) });

// /services/less_costly
router.get('/less_costly', (req,res) => { servicesController.lessCostly(req,res) });

// /services/:id
router.get('/:id', (req,res) => { servicesController.getOne(req,res) });

// POST /services
router.post('/', (req,res) => { servicesController.create(req,res) });

// PATCH /services/:id
router.patch('/:id', (req,res) => { servicesController.update(req,res) });

// DELETE /services/:id
router.delete('/:id', (req,res) => { servicesController.deleteOne(req,res) });


module.exports = router;