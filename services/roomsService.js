const connection = require('../config/bdd');

async function findAllRooms(){
    const results = await connection.promise().query('SELECT * FROM rooms');
    return results[0];
}

async function findOneRoom(id){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE id_room = ?', [id]);
    return results[0][0];
}

async function findAvailableRooms(){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE status = 1');
    return results[0];
}

async function averageCapacity(){
    const results = await connection.promise().query('SELECT AVG(capacity) as "Capacité Moyenne" FROM rooms');
    return results[0][0];
}

async function pricesAbove(price){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE price_per_night >= ?', [price]);
    return results[0];
}

async function findRoomsByType(type){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE room_type = ?', [type]);
    return results[0];
}

async function capacityAbove(capacity){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE capacity >= ?', [capacity]);
    return results[0];
}

async function findAvailableRoomsByType(type){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE status = 1 AND room_type = ?', [type]);
    return results[0];
}

async function pricesBelow(price){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE price_per_night <= ?', [price]);
    return results[0];
}

async function pricesBetween(min, max){
    const results = await connection.promise().query('SELECT * FROM rooms WHERE price_per_night BETWEEN ? AND ?', [min, max]);
    return results[0];
}

async function createRoom(room){
    const results = await connection.promise().query('INSERT INTO rooms SET ?', [room]);
    return await findOneRoom(results[0].insertId);
}

async function updateRoom(id, room){
    await connection.promise().query('UPDATE rooms SET ? WHERE id_room = ?', [room, id]);
    return await findOneRoom(id);
}

async function deleteRoom(id){
    const response = await connection.promise().query('DELETE FROM rooms WHERE id_room = ?', [id]);
    return response[0].affectedRows;
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
    pricesBetween,
    createRoom,
    updateRoom,
    deleteRoom
}