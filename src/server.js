const express = require('express'); //Importa o express para a constante.
const route = require('./route');
const path = require('path'); // (Módulo)

const server = express(); //Guarda o express já iniciado.

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(3000, () => console.log('Server is started!'));