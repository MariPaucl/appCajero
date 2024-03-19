const mysql = require('../config/config');
const bcrypt = require('bcryptjs');
const Cajero = {};
Cajero.create = async (cajero, result) => {
    const hash = await bcrypt.hash(cajero.passCajero, 10);
    const sql = `
        INSERT INTO cajeros(
            numId,
            nombre,
            apellido,
            correo,
            passCajero
        )
        VALUES (?, ?, ?, ?, ?)`
        ;

        mysql.query(
            sql,
            [
                cajero.numId,
                cajero.nombre,
                cajero.apellido,
                cajero.correo,
                hash
            ],
            (err, res) => {
                if (err) {
                    console.log('Error: ', err);
                    result(err, null);
                }
                else {
                    console.log('Id del nuevo Cajero ', res.insertId);
                    result(null, res.insertId);
                }
            }
        )
};

module.exports = Cajero;