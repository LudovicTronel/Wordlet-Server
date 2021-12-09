const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const port = 5000;

app.use(cors());

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Serveur en écoute sur le port ${port}`);
});

//Permet de créer le serveur et donner le chemin sur lequel il doit être en écoute
// /!\ A MODIFIER LORS DU DEPLOIEMENT
const io = new Server(server, {
	cors: {
		origin: "http://localhost",
		methods: ["GET", "POST"],
	},
});

//Liste des salons disponibles
let rooms = [];

//Gestion de la connexion
io.on("connection", (socket) => {

	//Evenement principal gérant la création et l'initialisation d'une room par un joueur qui en devient l'hôte
	socket.on('playerData', (player, nameRoom) => {
		let room = null;

		if (!player.roomId) {

			player.socketId = socket.id;
			room = createRoom(player, nameRoom);
			console.log(`${player.username} a créé le salon ${nameRoom} !`);
			console.log(`${player.username} attend des joueurs dans le salon ${nameRoom}...`)

		} else {

			room = rooms.find( r => r.id === player.roomId);

			if ( room === undefined) {
				return;
			}

			room.players.push(player);
			console.log(`${player} a rejoint le salon ${room.name} !`)
		}
		//Ajoute le socket du joueur hôte au salon, et envoit l'evenement 'join room' à la partie client
		socket.join(room.id);
		io.to(socket.id).emit('join room', room.id);

		//Lance la partie si le nombre de joueur est atteind
		if (room.players.length === 6) {
			io.to(room.id).emit('start game', room.players);
			console.log(`La partie a commencé dans le salon ${room.name} !`)
		}
	})

	//Ecoute l'évènement 'get rooms' afin de renvoyer la liste des salons disponibles
	socket.on('get rooms', () => {
		io.to(socket.id).emit('list rooms', rooms);
	})

	//Gestion de la deconnexion 
	socket.on("disconnect", () => {
	let room = null;

	//Suppression d'un salon si le joueur hôte est seul présent dans son salon et se déconnecte
	rooms.forEach(r => {
		r.players.forEach(p => {
			if (p.socketId === socket.id && p.host){
				room = r;
				rooms = rooms.filter(r => r !== room);
				console.log(`${p.username} a supprimé le salon ${r.name} !`)
			}
	  	})
	})
  });
});

//Fonction permettant de créer un salons, lui attribuer un identifiant aléatoire, ajouter son nom et le joueur hôte. Puis ajout dans la liste des salons disponibles 
function createRoom(player, nameRoom) {
	const room = { id : roomId(), name : nameRoom, players : [] };

	player.roomId = room.id;
	room.players.push(player);
	rooms.push(room);

	return room;
}

//Fonction permettant de générer aléatoirement un identifiant pour les rooms 
function roomId() {
	return Math.random().toString(36).substr(2, 9);
}