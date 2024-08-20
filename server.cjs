const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
	},
});
const messages = [
	{
		user: { id: 'car', name: 'Carlos' },
		text: 'Hola! que tal?',
	},
	{
		user: { id: 'pep', name: 'Pepe' },
		text: 'Muy bien! y tu??',
	},
	{
		user: { id: 'pac', name: 'Paco' },
		text: 'Genial',
	},
];

app.use(cors());

server.listen(8080, function () {
	console.log('Servidor corriendo en http://localhost:8080');
});

io.on('connection', function (socket) {
	console.log('Un cliente se ha conectado');
	socket.emit('messages', messages);

	socket.on('new-message', function (data) {
		messages.push(data);

		io.sockets.emit('messages', messages);
	});
});
