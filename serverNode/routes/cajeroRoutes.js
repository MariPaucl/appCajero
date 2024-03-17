const cajerosController = require('../controllers/cajerosControllers');
module.exports = (app) => {
    app.post('/api/cajeros/create', cajerosController.register);
}