const ventasController = require('../controllers/ventasControllers');
module.exports = (app) => {
    app.post('/api/ventas/create', ventasController.register);
};