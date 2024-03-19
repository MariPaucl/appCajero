const infoController = require('../controllers/infoControllers');
module.exports = (app) => {
    app.post('/api/info/show', infoController.visualizar);
}