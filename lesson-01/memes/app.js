// "use strict";

const memes = [
	{ src: "design.jpg", title: "Разве это дизайн?", likes: 20, dislikes: 4, vote: -1 },
	{ src: "done.jpg", title: "Я сделаль!", likes: 2, dislikes: 1, vote: 1 },
	{ src: "icanhelp.jpg", title: "Я могу тебе помочь", likes: 6, dislikes: 8, vote: 0 },
	{ src: "js.jpg", title: "JavaScript", likes: 5, dislikes: 2, vote: 1 },
	{ src: "programmers.jpg", title: "Будни программиста", likes: 3, dislikes: 0, vote: 0 },
];

window.addEventListener('load', function () {
	//обьект app называют экземпляром приложения (инстанс вью)
	const app = new Vue({
		el: "#app",
		//все свойства этого обьекта станут реактивными в т.ч. вложенные массивы и обьекты
		//эти данные доступны в шаблоне как переменные
		//все свойства этого обьекта так же становятся свойствами обьекта app
		data: {
			memes,

		},

	});
//данные можно менять через экземпляр приложения
	// app.counter = 100500;

	// setTimeout(() => {app.counter = 100500}, 2500);
});