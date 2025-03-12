const connection = require('../config/bdd');

async function getAll(){
    const results =  await connection.promise().query('SELECT * FROM reservations');
    return results[0];
}

async function getByStatus(status){
    const results = await connection.promise().query('SELECT * FROM reservations WHERE reservation_status like ?', [status]);
    return results[0];
}

async function averageCost(){
    const results = await connection.promise().query('SELECT AVG(total_cost) as "Coût Moyen" FROM reservations');
    return results[0][0];
}

async function above(price){
    const results = await connection.promise().query('SELECT * FROM reservations WHERE total_cost > ?', [price]);
    return results[0];
}

async function getByRoomType(type){
    const results = await connection.promise().query('SELECT * FROM reservations INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type like ?', [type]);
    return results[0];
}

async function getByRoom(room){
    const results = await connection.promise().query('SELECT * FROM reservations INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_number = ?', [room]);
    return results[0];
}

async function bestClient(){
    const results = await connection.promise().query('SELECT clients.*, count(id_reservation) AS \'Nombre réservation\' FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client GROUP BY clients.id_client;');
    return results[0][0];
}

async function getOne(id){
    const results = await connection.promise().query('SELECT * FROM reservations WHERE id_reservation = ?', [id]);
    return results[0][0];
}

module.exports = {getAll, getByStatus, averageCost, above, getByRoomType, getByRoom, bestClient, getOne};