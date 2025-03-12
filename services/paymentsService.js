const connection = require('../config/bdd');

async function getAll(){
    const results =  await connection.promise().query('SELECT * FROM payments');
    return results[0];
}

async function getByPaymentMethod(type){
    const results = await connection.promise().query('SELECT * FROM payments WHERE payment_method like ?', [type]);
    return results[0];
}

async function above(price){
    const results = await connection.promise().query('SELECT * FROM payments WHERE amount > ?', [price]);
    return results[0];
}

async function getByReservationStatus(status){
    const results = await connection.promise().query('SELECT * FROM payments INNER JOIN payer ON payer.id_payment = payments.id_payment INNER JOIN reservations ON reservations.id_reservation = payer.id_reservation WHERE reservation_status like ?', [status]);
    return results[0];
}

async function totalByMonth(month, year){
    const results = await connection.promise().query('SELECT SUM(amount) as total FROM payments WHERE MONTH(payment_date) = ? AND YEAR(payment_date) = ?', [month, year]);
    return results[0][0];
}

async function totalByReservationStatus(status){
    const results = await connection.promise().query('SELECT SUM(amount) as total FROM payments INNER JOIN payer ON payer.id_payment = payments.id_payment INNER JOIN reservations ON reservations.id_reservation = payer.id_reservation WHERE reservation_status like ?', [status]);
    return results[0][0];
}

async function getOne(id){
    const results = await connection.promise().query('SELECT * FROM payments WHERE id_payment = ?', [id]);
    return results[0][0];
}

async function create(payment){
    const results = await connection.promise().query('INSERT INTO payments SET ?', [payment]);
    return getOne(results[0].insertId);
}

async function update(id, payment){
    await connection.promise().query('UPDATE payments SET ? WHERE id_payment = ?', [payment, id]);
    return getOne(id);
}

async function deleteOne(id){
    await connection.promise().query('DELETE FROM payments WHERE id_payment = ?', [id]);
}


module.exports = {
    getAll,
    getByPaymentMethod,
    above,
    getByReservationStatus,
    totalByMonth,
    totalByReservationStatus,
    getOne,
    create,
    update,
    deleteOne
};