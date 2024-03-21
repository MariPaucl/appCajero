const Info = require('../models/info');

module.exports = {
    visualizar(req, res) {
        const { idCajero, fechaDia, fechaMes } = req.body;
        const info = {
            idCajero: idCajero,
            fechaDia: fechaDia,
            fechaMes: fechaMes
        };

        Info.show(info, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al mostrar la información',
                    error: err
                });
            }
            return res.status(200).json(data);
        });
    }
};