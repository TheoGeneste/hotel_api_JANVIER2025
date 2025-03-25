const ClientsService = require('../services/clientsService');
const bcrypt = require('bcryptjs');
const transporter = require('../config/nodemail');
const jwt = require('jsonwebtoken');

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
        console.log(req.user);
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
        console.log(req.user);
        
        if (req.user.role !== 'ADMIN'){
            res.status(403);
            res.json({"message": "Vous n'avez pas les droits pour effectuer cette action"});
            return;
        }
        await ClientsService.deleteClient(req.params.id);
        res.status(204);
        res.json();
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la suppression du client"});
    }
}

async function findMe(req, res){
    try{
        const client = await ClientsService.findOneClient(req.user.id);
        res.status(200);
        res.json(client);
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la récupération du client"});
    }
}

async function passwordForget(req, res){
    try{
        const client = await ClientsService.findClientByEmail(req.body.email);
        if (!client){
            res.status(404);
            res.json({"message": "Aucun utilisateur trouvé avec cet email"});
            return;
        }   
        const token = jwt.sign({id: client.id_client}, "SECRET", {expiresIn: '1h'});
        await transporter.sendMail({
            from: 'BIALASIK Théo <theobialasik@gmail.com>',
            to : client.email,
            subject: 'Réinitialisation de votre mot de passe',
            html: `<h1>Bonjour ${client.first_name} ${client.last_name}</h1>, <br>
            <p>Vous avez demandé à réinitialiser votre mot de passe.</p> <br>
            <p>Veuillez cliquer sur le lien suivant pour le réinitialiser : <a href="http://localhost:5173/reset_password/${token}">Renitialiser le mot de passe</a></p> <br>
            <p>Si vous n'êtes pas à l'origine de cette demande, veuillez ignorer cet email.</p> <br>
            <strong>Cordialement,</strong>\n
            <h3>L'équipe de l'hôtel Janvier 2025</h3>`
        });
        res.status(201);    
        res.json({"message": "Un email vous a été envoyé pour réinitialiser votre mot de passe"});
    }catch(error){
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de l'envoi du mail"});
    }
}

async function passwordReset(req, res){ 
    try {
        const client = await ClientsService.updateClient(req.user.id, {password: bcrypt.hashSync(req.body.password, 10)});
        res.status(200);
        res.json(client);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({"message": "Une erreur est survenue lors de la réinitialisation du mot de passe"});
        
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
    deleteClient,
    findMe,
    passwordForget,
    passwordReset
};