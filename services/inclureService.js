const connection = require('../config/bdd');

async function getAll(){
    const results =  await connection.promise().query('SELECT * FROM inclure INNER JOIN services ON services.id_service = inclure.id_service INNER JOIN reservations ON reservations.id_reservation = inclure.id_reservation');
    return results[0];
}

async function getByReservation(id){
    const results = await connection.promise().query('SELECT * FROM services INNER JOIN inclure ON inclure.id_service = services.id_service INNER JOIN reservations ON reservations.id_reservation = inclure.id_reservation WHERE reservations.id_reservation = ?', [id]);
    return results[0];
}

async function totalServiceByReservation(id){
    const results = await connection.promise().query('SELECT SUM(total_price) as total FROM inclure WHERE id_reservation = ?', [id]);
    return results[0][0];
}

async function countServiceByReservation(id){
    const results = await connection.promise().query('SELECT COUNT(id_service) as total FROM inclure WHERE id_reservation = ?', [id]);
    return results[0][0];
}

async function servicesByReservationType(type) {
    const results = await connection.promise().query('SELECT * FROM reservations INNER JOIN inclure ON inclure.id_reservation = reservations.id_reservation INNER JOIN services ON services.id_service = inclure.id_service INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type like ?', [type]);
    return results[0];
}

async function countServiceUsed(name){
    const results = await connection.promise().query('SELECT service_name, COUNT(*) as total FROM inclure INNER JOIN services ON services.id_service = inclure.id_service WHERE service_name like ?', [name]);
    return results[0][0];
}

async function getServicesByReservationAbovePrice(price){
    const results = await connection.promise().query('SELECT * FROM services INNER JOIN inclure ON inclure.id_service=services.id_service INNER JOIN reservations ON reservations.id_reservation = inclure.id_reservation WHERE total_cost > ?', [price]);
    return results[0];
}

async function getOne(id){
    const results = await connection.promise().query('SELECT * FROM inclure WHERE id_inclure = ?', [id]);
    return results[0][0];
}

module.exports = {
    getAll,
    getByReservation,
    totalServiceByReservation,
    countServiceByReservation,
    servicesByReservationType,
    countServiceUsed,
    getServicesByReservationAbovePrice,
    getOne
};


