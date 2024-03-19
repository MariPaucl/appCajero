const mysql = require('../config/config');

const Info = {};

Info.show = (info, result) => {
    const sql = `
        SELECT cajeros.nombre, cajeros.apellido, ventas.idVenta, ventas.nomCliente, ventas.valor, DATE_FORMAT(ventas.fecha, '%d-%m-%Y %H:%i:%s') AS fechaVenta
        FROM ventas
        INNER JOIN cajeros
        WHERE ventas.idCajero = ?
        AND DAY(ventas.fecha) = ?
        AND MONTH(ventas.fecha) = ?`;

    mysql.query(sql, [info.idCajero, info.fechaDia, info.fechaMes], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log(res);
        }
    });
};

module.exports = Info;