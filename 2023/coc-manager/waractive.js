var p_form = document.getElementById("search-box");
var p_input = document.getElementById("search");
if (JSON.parse(localStorage.getItem("players")) === null || undefined) {
	let caca = {};
	localStorage.setItem("players", JSON.stringify(caca));
}
function createPlayer (nombre, rango) {
	const player_box = document.createElement("div");
	const state = document.createElement("button");
	const name = document.createElement("span");
	const n_war = document.createElement("span");
	const add = document.createElement("button");
	const sub = document.createElement("button");
	player_box.classList.add("player-box", `p_${nombre}`);
	state.classList.add("state");
	name.classList.add("name");
	n_war.classList.add("n-war");
	n_war.innerHTML = "0";
	add.classList.add("add");
	sub.classList.add("sub");
	state.style.background = 
	rango === "miembro" ? "yellow" :
	rango === "veterano" ? "darkorange" :
	rango === "colider" ? "red" : "white";
	name.innerHTML = nombre;
	document.querySelector(".list").appendChild(player_box);
	player_box.appendChild(state);
	player_box.appendChild(name);
	player_box.appendChild(n_war);
	player_box.appendChild(add);
	player_box.appendChild(sub);
	state.addEventListener('click', function (){
		var prompt_rango = window.prompt("Ingrese rango");
		if (prompt_rango != null && (prompt_rango === "miembro" || prompt_rango === "veterano" || prompt_rango === "colider")) {
			let player = JSON.parse(localStorage.getItem(`p_${nombre}`));
			player[1] = prompt_rango;
			localStorage.setItem(`p_${nombre}`, JSON.stringify(player));
			state.style.background =
			prompt_rango === "miembro" ? "yellow" :
			prompt_rango === "veterano" ? "darkorange" :
			prompt_rango === "colider" ? "red" : "white";
		}
		else {
			window.alert("Invalid Value");
		}
	});
	let add_n = 0;
	let sub_n = 0;
	let player = JSON.parse(localStorage.getItem(`p_${nombre}`));
	if (player[2] != undefined && player[2] != null) {
		if ("objadd_n" in player[2]) {
			add_n = player[2].objadd_n;
		}
		if ("objsub_n" in player[2]) {
			sub_n = player[2].objsub_n;
		}
	}
	function actColorName() {
		if (sub_n >= 2 && sub_n < 4) {
			name.style.color = "violet";
		}
		else if (sub_n >= 4 && sub_n < 7) {
			name.style.color = "purple";	
		}
		else if (sub_n >= 7) {
			name.style.color = "red";
		}
		else {
			name.style.color = "white";
		}
	}
	actColorName();
	add.addEventListener('click', function () {
		sub_n = 0;
		add_n += 1;
		n_war.innerHTML = add_n;
		n_war.style.background = "green";
		let player = JSON.parse(localStorage.getItem(`p_${nombre}`));
		player[2] = { objadd_n: add_n };
		localStorage.setItem(`p_${nombre}`, JSON.stringify(player));
		actColorName();
	});
	sub.addEventListener('click', function () {
		add_n = 0;
		sub_n += 1;
		n_war.innerHTML = sub_n;
		n_war.style.background = "red";
		let player = JSON.parse(localStorage.getItem(`p_${nombre}`));
		player[2] = { objsub_n: sub_n };
		localStorage.setItem(`p_${nombre}`, JSON.stringify(player));
		actColorName();
	});
}
p_input.addEventListener("keydown", function () {
	if (event.key === "Enter") {
		event.preventDefault();
		var nombre = p_input.value;
		p_form.reset();
		if (nombre != null && nombre != "" && nombre != " " && localStorage.getItem(`p_${nombre}`) === null) {
			var rango =  window.prompt("Asigne un rango:");
			if (rango != null && (rango === "miembro" || rango === "veterano" || rango === "colider")) {
				var players = JSON.parse(localStorage.getItem("players"));
				players[`p_${nombre}`] = true;
				localStorage.setItem("players", JSON.stringify(players));
				let player = [nombre,rango];
				localStorage.setItem(`p_${nombre}`, JSON.stringify(player));
				createPlayer(nombre, rango);
			}
			else {
				window.alert("Invalid Value");
			}
		}
		else if (nombre != null && nombre != "" && nombre != " " && localStorage.getItem(`p_${nombre}`) != null) {
			document.querySelector(`.p_${nombre}`).remove();
			localStorage.removeItem(`p_${nombre}`);
			let players = JSON.parse(localStorage.getItem("players"));
			delete players[`p_${nombre}`];
			localStorage.setItem("players", JSON.stringify(players));
		}
		else {
			window.alert("Invalid Value");
		}
	}
});
let players = JSON.parse(localStorage.getItem("players"));
for (let x in players) {
	let player = JSON.parse(localStorage.getItem(x));
	console.log(player);
	createPlayer(...player);
	if (player[2] != null && player[2] != undefined) {
		if ("objadd_n" in player[2]) {
			document.querySelector(`.p_${player[0]} .n-war`).style.background = "green";
			document.querySelector(`.p_${player[0]} .n-war`).innerHTML = player[2].objadd_n;
		}
		else if ("objsub_n" in player[2]) {
			document.querySelector(`.p_${player[0]} > .n-war`).style.background = "red";
			document.querySelector(`.p_${player[0]} > .n-war`).innerHTML = player[2].objsub_n;	
		}		
	} 

}