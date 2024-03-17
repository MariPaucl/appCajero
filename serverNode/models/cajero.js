const mysql = require('../config/config');
const Cajero = {};
Cajero.create = (cajero, result) => {
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
                cajero.passCajero
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