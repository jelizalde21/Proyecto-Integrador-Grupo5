const posts = {
	lista:	[
	{
		id: 1,
		idUsuario: 1,
		foto: "./images/foto1.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},
	{
		id: 2,
		idUsuario: 2,
		foto: "./images/foto2.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 3,
		idUsuario: 3,
		foto: "./images/foto3.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 4,
		idUsuario: 4,
		foto: "./images/foto4.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 5,
		idUsuario: 5,
		foto: "./images/foto5.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 6,
		idUsuario: 6,
		foto: "./images/foto6.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 7,
		idUsuario: 7,
		foto: "./images/foto7.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 8,
		idUsuario: 8,
		foto: "./images/foto8.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 9,
		idUsuario: 9,
		foto: "./images/foto9.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	},{
		id: 10,
		idUsuario: 10,
		foto: "./images/foto10.jpg",
		pie_de_foto: "Es el mejor que probé en estos años",
		fecha: 21/07/35
	}
	],
	findById: function (idPost) {
		let results = "";
		for (let i = 0; i < posts.lista.length; i++) {
			if (posts.lista[i].id == idPost) {
				results = posts.lista[i];
			}
		}
		return results;
	}
}

module.exports = posts;