const InclureService = require('../services/inclureService');

async function getAll(req, res) {
    try {
        const inclures = await InclureService.getAll();
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function getByReservation(req, res) {
    try {
        const inclures = await InclureService.getByReservation(req.params.id);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function totalServiceByReservation(req, res) {
    try {
        const inclures = await InclureService.totalServiceByReservation(req.params.id);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function countServiceByReservation(req, res) {
    try {
        const inclures = await InclureService.countServiceByReservation(req.params.id);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function servicesByReservationType(req, res) {
    try {
        const inclures = await InclureService.servicesByReservationType(req.params.type);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function countServiceUsed(req, res) {
    try {
        const inclures = await InclureService.countServiceUsed(req.params.service_name);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function getServicesByReservationAbovePrice(req, res) {
    try {
        const inclures = await InclureService.getServicesByReservationAbovePrice(req.params.price);
        res.status(200).json(inclures);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des inclusions"});
    }
}

async function getOne(req, res) {
    try {
        const inclure = await InclureService.getOne(req.params.id);
        res.status(200).json(inclure);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération de l'inclusion"});
    }
}

async function create(req, res) {
    try {
        const inclure = await InclureService.create(req.body);
        res.status(200).json(inclure);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la création de l'inclusion"});
    }
}

async function update(req, res) {
    try {
        const inclure = await InclureService.update(req.params.id, req.body);
        res.status(200).json(inclure);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la modification de l'inclusion"});
    }
}

async function deleteOne(req, res) {
    try {
        await InclureService.deleteOne(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la suppression de l'inclusion"});
    }
}

module.exports = { getAll, getByReservation, totalServiceByReservation, countServiceByReservation, servicesByReservationType, countServiceUsed, getServicesByReservationAbovePrice, getOne, create, update, deleteOne };