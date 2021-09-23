const posts = {
	lista:	[
	{
		id: 1,
		idUsuario: 1,
		foto: "/images/foto1.jpg",
		pie_de_foto: "Alex, como el león",
		fecha: 21/07/35
	},
	{
		id: 2,
		idUsuario: 2,
		foto: "/images/foto2.jpg",
		pie_de_foto: "Suave como las mujeres!",
		fecha: 21/07/35
	},{
		id: 3,
		idUsuario: 3,
		foto: "/images/foto3.jpg",
		pie_de_foto: "Reluciente packaging",
		fecha: 21/07/35
	},{
		id: 4,
		idUsuario: 4,
		foto: "/images/foto4.jpg",
		pie_de_foto: "Caro pero, riguroso",
		fecha: 21/07/35
	},{
		id: 5,
		idUsuario: 5,
		foto: "/images/foto5.jpg",
		pie_de_foto: "Excelente para un asado",
		fecha: 21/07/35
	},{
		id: 6,
		idUsuario: 6,
		foto: "/images/foto6.jpg",
		pie_de_foto: "Un buen whiskey para disfrutar en compañía",
		fecha: 21/07/35
	},{
		id: 7,
		idUsuario: 7,
		foto: "/images/foto7.jpg",
		pie_de_foto: "Black Label, no, es el nuevo Gold!",
		fecha: 21/07/35
	},{
		id: 8,
		idUsuario: 8,
		foto: "/images/foto8.jpg",
		pie_de_foto: "Color dorado como el oro",
		fecha: 21/07/35
	},{
		id: 9,
		idUsuario: 9,
		foto: "/images/foto9.jpg",
		pie_de_foto: "Rústico como ella sola",
		fecha: 21/07/35
	},{
		id: 10,
		idUsuario: 10,
		foto: "/images/foto10.jpg",
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