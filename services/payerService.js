const connection = require('../config/bdd');

async function getAll() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM payer', (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

async function create(payer) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO payer SET ?', payer, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve({ id: results.insertId, ...payer });
        });
    });
}

async function deletePayer(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM payer WHERE id = ?', id, (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
}

async function update(id, payer) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE payer SET ? WHERE id = ?', [payer, id], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve({ id, ...payer });
        });
    });
}

module.exports = { getAll, create, deletePayer, update };

