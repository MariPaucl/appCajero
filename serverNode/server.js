const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const cajeroRoutes = require('./routes/cajeroRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port);

cajeroRoutes(app);
ventaRoutes(app);

//ipconfig para saber dir: ip
server.listen(3000, '192.168.0.15' || 'localhost', function() {
    console.log('Aplicacion de Node JS ' + process.pid + ' inicio en el puerto ' + port);
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});