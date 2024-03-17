const mysql = require('../config/config');
const Venta = {};
Venta.create = (venta, result) => {
    const sql = `
        INSERT INTO ventas(
            idCajero,
            nomCliente,
            valor
        )
        VALUES (?, ?, ?)`
        ;

        mysql.query(
            sql,
            [
                venta.idCajero,
                venta.nomCliente,
                venta.valor,
                new Date()
            ],
            (err, res) => {
                if (err) {
                    console.log('Error: ', err);
                    result(err, null);
                }
                else {
                    console.log('Id de la venta nueva: ', res.insertId);
                    result(null, res.insertId);
                }
            }
        )
};

module.exports = Venta;