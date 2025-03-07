const RoomsService = require('../services/roomsService');

async function findAllRooms(req, res){
    try {
        const rooms = await  RoomsService.findAllRooms(res);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function findOneRoom(req, res){
    try {
        const room = await  RoomsService.findOneRoom(req.params.id);
        res.status(200);
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de la chambre"});
    }
}

async function findAvailableRooms(req, res){
    try {
        const rooms = await RoomsService.findAvailableRooms();
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function averageCapacity(req,res){
    try {
        const average = await RoomsService.averageCapacity();
        res.status(200);
        res.json(average);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération de la capacité moyenne"});
    }
}

async function pricesAbove(req, res){
    try {
        const rooms = await RoomsService.pricesAbove(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function findRoomsByType(req, res) {
    try {
        const rooms = await RoomsService.findRoomsByType(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function capacityAbove(req, res) {
    try {
        const rooms = await RoomsService.capacityAbove(req.params.capacity);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function findAvailableRoomsByType(req, res) {
    try {
        const rooms = await RoomsService.findAvailableRoomsByType(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
    
}

async function pricesBelow(req,res){
    try {
        const rooms = await RoomsService.pricesBelow(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

async function pricesBetween(req, res) {
    try {
        const rooms = await RoomsService.pricesBetween(req.params.min, req.params.max);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des chambres"});
    }
}

module.exports = {
    findAllRooms,
    findOneRoom,
    findAvailableRooms,
    averageCapacity,
    pricesAbove,
    findRoomsByType,
    capacityAbove,
    findAvailableRoomsByType,
    pricesBelow,
    pricesBetween
}