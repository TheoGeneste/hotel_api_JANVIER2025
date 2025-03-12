const PaymentsService = require('../services/paymentsService');

async function getAll(req, res) {
    try {
        const payments = await PaymentsService.getAll();
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function getByPaymentMethod(req, res) {
    try {
        const payments = await PaymentsService.getByPaymentMethod(req.params.type);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function above(req, res) {
    try {
        const payments = await PaymentsService.above(req.params.price);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function getByReservationStatus(req, res) {
    try {
        const payments = await PaymentsService.getByReservationStatus(req.params.status);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function totalByMonth(req, res) {
    try {
        const payments = await PaymentsService.totalByMonth(req.params.month, req.params.year);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function totalByReservationStatus(req, res) {
    try {
        const payments = await PaymentsService.totalByReservationStatus(req.params.status);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function getOne(req, res) {
    try {
        const payment = await PaymentsService.getOne(req.params.id);
        res.status(200).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la récupération des paiements"});
    }
}

async function create(req, res) {
    try {
        const payment = await PaymentsService.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la création du paiement"});
    }
}

async function update(req, res) {
    try {
        const payment = await PaymentsService.update(req.params.id, req.body);
        res.status(200).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la modification du paiement"});
    }
}

async function deleteOne(req, res) {
    try {
        await PaymentsService.deleteOne(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": "Une erreur est survenue lors de la suppression du paiement"});
    }
}


module.exports = {getAll, getByPaymentMethod, above, getByReservationStatus, totalByMonth, totalByReservationStatus, getOne, create, update, deleteOne};