const payerService = require('../services/payerService');

async function getAll(req, res) {
    try {
        const payers = await payerService.getAll();
        res.status(200).json(payers);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des payers"});
    }
}

async function create(req, res) {
    try {
        const payer = await payerService.create(req.body);
        res.status(201).json(payer);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la création du payer"});
    }
}

async function deletePayer(req, res) {
    try {
        await payerService.deletePayer(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la suppression du payer"});
    }
}

async function update(req, res) {
    try {
        const payer = await payerService.update(req.params.id, req.body);
        res.status(200).json(payer);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la modification du payer"});
    }
}

module.exports = {
    getAll,
    create,
    deletePayer,
    update
};