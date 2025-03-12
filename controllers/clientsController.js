const ClientsService = require('../services/clientsService');
const bcrypt = require('bcryptjs');

async function findAllClients(req, res){
    try{
        const clients = await ClientsService.findAllClients();
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findOneClient(req, res){
    try{
        const client = await ClientsService.findOneClient(req.params.id);
        res.status(200);
        res.json(client);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du client"});
    }
}

async function findClientsByReservationYear(req, res){
    try{
        const clients = await ClientsService.findClientsByReservationYear(req.params.year);
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientsByTotalCostAbove(req, res){
    try{
        const clients = await ClientsService.findClientsByTotalCostAbove(req.params.cost);
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientsByRegistrationDate(req, res){
    try{
        const clients = await ClientsService.findClientsByRegistrationDate(req.params.month, req.params.year);
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientsByReservationYearAndMonth(req, res){
    try{
        const clients = await ClientsService.findClientsByReservationYearAndMonth(req.params.month, req.params.year);
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientsByReservationRoomType(req, res){
    try{
        const clients = await ClientsService.findClientsByReservationRoomType(req.params.roomType);
        res.status(200);
        res.json(clients);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération des clients"});
    }
}

async function findClientWithMaxReservationCost(req, res){
    try{
        const client = await ClientsService.findClientWithMaxReservationCost();
        res.status(200);
        res.json(client);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du client"});
    }
}

async function createClient(req, res){
    try{
        // Crypt le password
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const client = await ClientsService.createClient(req.body);
        res.status(201);
        res.json(client);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la création du client"});
    }
}

async function updateClient(req, res){
    try{
        const client = await ClientsService.updateClient(req.params.id, req.body);
        res.status(200);
        res.json(client);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la modification du client"});
    }
}

async function deleteClient(req, res){
    try{
        await ClientsService.deleteClient(req.params.id);
        res.status(204);
        res.json();
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la suppression du client"});
    }
}


module.exports = {
    findAllClients,
    findOneClient,
    findClientsByReservationYear,
    findClientsByTotalCostAbove,
    findClientsByRegistrationDate,
    findClientsByReservationYearAndMonth,
    findClientsByReservationRoomType,
    findClientWithMaxReservationCost,
    createClient,
    updateClient,
    deleteClient
};