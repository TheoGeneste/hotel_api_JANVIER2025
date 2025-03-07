const connection = require('../config/bdd');


async function findAllClients(){
    const results =  await connection.promise().query('SELECT * FROM clients');
    return results[0];
}


async function findOneClient(id){
    const results = await connection.promise().query('SELECT * FROM clients WHERE id_client = ?', [id]);
    return results[0][0];
}

async function findClientsByReservationYear(year){
    const results = await connection.promise().query('SELECT clients.* FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE YEAR(check_in_date) = ?', [year]);
    return results[0];
}

async function findClientsByTotalCostAbove(cost){
    const results = await connection.promise().query('SELECT DISTINCT clients.* FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE total_cost > ?', [cost]);
    return results[0];
}
async function findClientsByRegistrationDate(month, year){
    const results = await connection.promise().query('SELECT  * FROM clients WHERE MONTH(registration_date) = ? AND YEAR(registration_date) = ?', [month, year]);
    return results[0];
}

async function findClientsByReservationYearAndMonth(month, year){
    const results = await connection.promise().query('SELECT DISTINCT clients.* FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE YEAR(check_in_date) = ? AND MONTH(check_in_date) = ?', [year, month]);
    return results[0];
}

async function findClientsByReservationRoomType(roomType){
    const results = await connection.promise().query('SELECT DISTINCT clients.* FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type = ?', [roomType]);
    return results[0];
}


async function findClientWithMaxReservationCost(){
    const results = await connection.promise().query('SELECT clients.*, CONCAT(first_name,\' \', last_name) as client, amount as total FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN payer ON payer.id_reservation = reservations.id_reservation INNER JOIN payments ON payments.id_payment = payer.id_payment ORDER BY amount DESC limit 1;');
    return results[0][0];
}

module.exports = {
    findAllClients,
    findOneClient,
    findClientsByReservationYear,
    findClientsByTotalCostAbove,
    findClientsByRegistrationDate,
    findClientsByReservationYearAndMonth,
    findClientsByReservationRoomType,
    findClientWithMaxReservationCost
};