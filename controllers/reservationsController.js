const reservationsService = require('../services/reservationsService');

async function getAll(req, res) {
    try {
        const reservations = await reservationsService.getAll();
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function getByStatus(req, res) {
    try {
        const reservations = await reservationsService.getByStatus(req.params.status);
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function averageCost(req, res) {
    try {
        const averageCost = await reservationsService.averageCost();
        res.status(200).json(averageCost);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function above(req, res) {
    try {
        const reservations = await reservationsService.above(req.params.price);
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function getByRoomType(req, res) {
    try {
        const reservations = await reservationsService.getByRoomType(req.params.type);
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function getByRoom(req, res) {
    try {
        const reservations = await reservationsService.getByRoom(req.params.room);
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function bestClient(req, res) {
    try {
        const bestClient = await reservationsService.bestClient();
        res.status(200).json(bestClient);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function getOne(req, res) {
    try {
        const reservation = await reservationsService.getOne(req.params.id);
        res.status(200).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des réservations"});
    }
}

async function create(req, res) {
    try {
        const reservation = await reservationsService.create(req.body);
        res.status(201).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la création de la réservation"});
    }
}

async function update(req, res) {
    try {
        const reservation = await reservationsService.update(req.params.id, req.body);
        res.status(200).json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la modification de la réservation"});
    }
}

async function deleteOne(req, res) {
    try {
        await reservationsService.deleteOne(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la suppression de la réservation"});
    }
}



module.exports = {getAll, getByStatus, averageCost, above, getByRoomType, getByRoom, bestClient, getOne, create, update, deleteOne};