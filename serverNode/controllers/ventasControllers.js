const Venta = require('../models/venta');

module.exports = {
    register(req, res) {
        const venta = req.body;
        Venta.create(venta, (err, data) => {
            if (err) {
                return res.status(501).json({
                    succes: false,
                    message: 'Error al crear la venta',
                    error: err
                });
            }
            return res.status(201).json({
                succes: true,
                message: 'Venta Creada',
                data: data
            });
        });
    }
};