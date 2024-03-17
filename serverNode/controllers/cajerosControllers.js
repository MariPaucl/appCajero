const Cajero = require('../models/cajero');

module.exports = {
    register(req, res) {
        const cajero = req.body;
        Cajero.create(cajero, (err, data) => {
            if (err) {
                return res.status(501).json({
                    succes: false,
                    message: 'Error al registrar el cajero',
                    error: err
                });
            }
            return res.status(201).json({
                succes: true,
                message: 'Cajero Creado',
                data: data
            });
        });
    }
};