const mysql = require('../config/config');

const Info = {};

Info.show = (info, result) => {
    const sql = `
        SELECT
            cajeros.nombre,
            cajeros.apellido,
            ventas.idVenta,
            ventas.nomCliente,
            ventas.valor,
            DATE_FORMAT(ventas.fecha, '%d-%m-%Y %H:%i:%s') AS fechaVenta
        FROM ventas
        INNER JOIN cajeros ON ventas.idCajero = cajeros.idCajero
        WHERE ventas.idCajero = ?
        AND DAY(ventas.fecha) = ?
        AND MONTH(ventas.fecha) = ?
    `;

    mysql.query(sql, [info.idCajero, info.fechaDia, info.fechaMes], (err, res) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            // Calcula el total de ventas
            const totalVentas = res.reduce((total, venta) => total + venta.valor, 0);
            result(null, { ventas: res, totalVentas });
        }
    });
};

module.exports = Info;