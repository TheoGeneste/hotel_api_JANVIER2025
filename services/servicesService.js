const connection = require('../config/bdd');

async function getAll(){
    const results =  await connection.promise().query('SELECT * FROM services');
    return results[0];
}

async function above(price){
    const results = await connection.promise().query('SELECT * FROM services WHERE price > ?', [price]);
    return results[0];
}

async function mostUsed(){
    const results = await connection.promise().query('SELECT service_name, SUM(quantity) as \'Nombre utilisation du service\' FROM services JOIN inclure ON inclure.id_service = services.id_service GROUP BY inclure.id_service ORDER BY sum(quantity) DESC;');
    return results[0][0];
}

async function totalRoomType(roomType){
    const results = await connection.promise().query('SELECT services.*, SUM(total_price) as total FROM inclure INNER JOIN reservations ON reservations.id_reservation = inclure.id_reservation INNER JOIN rooms ON rooms.id_room = reservations.id_room INNER JOIN services ON services.id_service = inclure.id_service WHERE room_type like ? ', [roomType]);
    return results[0][0];
}

async function lessCostly(){
    const results = await connection.promise().query('SELECT * FROM services ORDER BY price ASC limit 1;');
    return results[0][0];
}

async function getOne(id){
    const results = await connection.promise().query('SELECT * FROM services WHERE id_service = ?', [id]);
    return results[0][0];
}
async function create(service){
    const results = await connection.promise().query('INSERT INTO services SET ?', [service]);
    return getOne(results[0].insertId);
}

async function update(id, service){
    await connection.promise().query('UPDATE services SET ? WHERE id_service = ?', [service, id]);
    return getOne(id);
}

async function deleteOne(id){
    await connection.promise().query('DELETE FROM services WHERE id_service = ?', [id]);
}



module.exports = {
    getAll,
    above,
    mostUsed,
    totalRoomType,
    lessCostly,
    getOne,
    create,
    update,
    deleteOne
};