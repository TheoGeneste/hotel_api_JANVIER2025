const servivesService = require('../services/servicesService');

async function getAll(req, res) {
    try {
        const services = await servivesService.getAll();
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function above(req, res) {
    try {
        const services = await servivesService.above(req.params.price);
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function mostUsed(req, res) {
    try {
        const service = await servivesService.mostUsed();
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function totalRoomType(req, res) {
    try {
        const service = await servivesService.totalRoomType(req.params.type);
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function lessCostly(req, res) {
    try {
        const service = await servivesService.lessCostly();
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function getOne(req, res) {
    try {
        const service = await servivesService.getOne(req.params.id);
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des services"});
    }
}

async function create(req, res) {
    try {
        const service = await servivesService.create(req.body);
        res.status(201).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la création du service"});
    }
}

async function update(req, res) {
    try {
        const service = await servivesService.update(req.params.id, req.body);
        res.status(200).json(service);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la modification du service"});
    }
}

async function deleteOne(req, res) {
    try {
        await servivesService.deleteOne(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la suppression du service"});
    }
}


module.exports = {getAll, above, mostUsed, totalRoomType, lessCostly, getOne, create, update, deleteOne};