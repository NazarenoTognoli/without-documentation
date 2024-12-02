let generateSideConsole = true;
let removeSideConsole = true;
let generateTechConsole = true;
let removeTechConsole = true;
let generateSwtConsole = true;
let removeSwtConsole = true;
let generateSubTechConsole = true;
let removeSubTechConsole = true;
let generateLinkConsole = true;
let removeLinkConsole = true;
let generateRlmConsole = true;
let removeRlmConsole = true;
function allConsoleFunc (v) {
	generateSideConsole = v;
	removeSideConsole = v;
	generateTechConsole = v;
	removeTechConsole = v;
	generateSwtConsole = v;
	removeSwtConsole = v;
	generateSubTechConsole = v;
	removeSubTechConsole = v;
	generateLinkConsole = v;
	removeLinkConsole = v;
	rlmConsole = v;
	removeRlmConsole = v;
}
const consoleInput = getElement('.console');
consoleInput.addEventListener('input', function() {
  	consoleValue = consoleInput.value;
});
function conGenSide () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `Side long / Side short`;
	side = true;
	if (side === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				let sideValuesST = JSON.parse(localStorage.getItem("sideValues"));
				resetPlaceholder();
				pushHistory(consoleValue);
				const sideConsoleValue = consoleValue.split(",");
				if (sideConsoleValue.length === 2  &&
					sideConsoleValue[1].length <= 4  && 
					sideConsoleValue[0].length <= 17) {
					sideValuesST[sideConsoleValue[1]] = true;
					//console.log(sideConsoleValue);
					localStorage.setItem("sideValues", JSON.stringify(sideValuesST));
					localStorage.setItem(sideConsoleValue[1], JSON.stringify(sideConsoleValue));
					generator.generateSide(...sideConsoleValue);
					activateButtons();
					side = false;
					actualizarDisplays();
					actualizarAsideFocus();
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();	
					allConsoleFunc(true);
				}
				else {
					side = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value: ${consoleValue}`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset()
					allConsoleFunc(true);
				}
			}
		});
	}
}
function conRemSide () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove side>>> side long / side short`;
	removeside = true;
	if (removeside === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				removeSideConsoleValue = consoleValue.split(",");
				let existe0 = false;
				if (localStorage.getItem(removeSideConsoleValue[1]) !== null) {
					let sideArr = localStorage.getItem(removeSideConsoleValue[1]);
					if (sideArr.includes(removeSideConsoleValue[0])) {
						existe0 = true;
					}
				}
				let existe1 = localStorage.getItem(removeSideConsoleValue[1]);
				if (removeSideConsoleValue.length === 2 && 
				 removeSideConsoleValue[1].length <= 4 && 
				 removeSideConsoleValue[0].length <= 17 &&
				 existe1 !== null &&
				 existe0 === true) {
					let sideValuesST = JSON.parse(localStorage.getItem("sideValues"));
					delete sideValuesST[removeSideConsoleValue[1]];
					localStorage.setItem("sideValues", JSON.stringify(sideValuesST));
					document.getElementById(`nav${removeSideConsoleValue[0]}`).remove();
					getElement("." + removeSideConsoleValue[0]).remove();
					localStorage.removeItem(removeSideConsoleValue[1]);
					removeside = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);					
				}
				else if (existe0 === false && existe1 === null) {
					removeside = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value, Doesn't exists: ${removeSideConsoleValue[0]} and ${removeSideConsoleValue[1]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else if (existe0 === false && existe1 !== null) {
					removeside = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value, Doesn't exists: ${removeSideConsoleValue[0]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removeside = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});				
	}	
}
function conGenTech () {
resetPlaceholder();
pushHistory(consoleValue);
getElement('.consolebox').reset();
getElement('.console').placeholder = `<<<generate tech>>> side/tech`;
tech = true;
if (tech === true) {
	document.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			let techValuesST = JSON.parse(localStorage.getItem("techValues"));
			resetPlaceholder();
			pushHistory(consoleValue);
			const techConsoleValue = consoleValue.split(",");
			let existe0 = false;
			//do this a func
			let sideValores = JSON.parse(localStorage.getItem("sideValues"));
			console.log('sideValore: ' + sideValores);
			for (let x in sideValores) {
				let valorSide = JSON.parse(localStorage.getItem(x));
				console.log('valorSide: ' + valorSide);
				if (valorSide.includes(techConsoleValue[0])) {
					existe0 = true;
				}
				console.log(existe0);
			}
			if (techConsoleValue.length === 2 && 
			 	techConsoleValue[0].length <= 17 && 
			 	techConsoleValue[1].length <= 4 &&
			 	existe0 === true){
				techValuesST[techConsoleValue[1]] = true;
				//console.log(techConsoleValue);
				localStorage.setItem("techValues", JSON.stringify(techValuesST));
				localStorage.setItem(techConsoleValue[1], JSON.stringify(techConsoleValue));
				generator.generateTech(...techConsoleValue);
				tech = false;
				document.removeEventListener("keydown", arguments.callee);
				getElement('.console').value = '';
				getElement('.consolebox').reset();
				allConsoleFunc(true);	
			}
			else if (techConsoleValue[0].length <= 17 && 
				techConsoleValue[1].length <= 4 &&
				existe0 === false) {
				tech = false;
				document.removeEventListener("keydown", arguments.callee);
				getElement('.console').placeholder = `Doesn't Exists '${techConsoleValue[0]}'`;
				document.documentElement.style.setProperty('--phc', '#F00');
				getElement('.console').value = '';
				getElement('.consolebox').reset();
				allConsoleFunc(true);
			}
			else {
				tech = false;
				document.removeEventListener("keydown", arguments.callee);
				getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
				document.documentElement.style.setProperty('--phc', '#F00');
				getElement('.console').value = '';
				getElement('.consolebox').reset();
				allConsoleFunc(true);
			}
		}
	});
}
}
function conRemTech () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove tech>>> side/tech`;
	removetech = true;
	if (removetech === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				removeTechConsoleValue = consoleValue.split(",");
				let existe0 = false;
				let sideValores = JSON.parse(localStorage.getItem("sideValues"));
				console.log('sideValore: ' + sideValores);
				for (let x in sideValores) {
					let valorSide = JSON.parse(localStorage.getItem(x));
					console.log('valorSide: ' + valorSide);
					if (valorSide.includes(removeTechConsoleValue[0])) {
						existe0 = true;
					}
					console.log(existe0);
				}
				let existe1 = localStorage.getItem(removeTechConsoleValue[1]);
				if (removeTechConsoleValue.length === 2 &&  
					removeTechConsoleValue[0].length <= 17 && 
					removeTechConsoleValue[1].length <= 4 &&
					existe1 != null &&
					existe0 === true) {
					let techValuesST = JSON.parse(localStorage.getItem("techValues"));
					delete techValuesST[removeTechConsoleValue[1]];
					localStorage.setItem("techValues", JSON.stringify(techValuesST));
					document.getElementById(`nav${removeTechConsoleValue[1]}`).remove();
					getElement(`.tech${removeTechConsoleValue[1]}`).remove();
					localStorage.removeItem(removeTechConsoleValue[1]);
					removetech = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (removeTechConsoleValue.length === 2 && 
					removeTechConsoleValue[0].length <= 17 && 
					removeTechConsoleValue[1].length <= 4 &&
					(existe1 === null ||
					existe0 === false)) {
					removetech = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').placeholder = `Invalid Value, does not exists '${removeTechConsoleValue[0]}' or '${removeTechConsoleValue[1]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removetech = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}	
			}
		});				
	}
}
function conGenSwt () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<generate switch>>> side/swt`;
	swt = true;
	if (swt === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				let swtValuesST = JSON.parse(localStorage.getItem("swtValues"));
				resetPlaceholder();
				pushHistory(consoleValue);
				const swtConsoleValue = consoleValue.split(",");
				let existe0 = false;
				let existe1 = false;
				let sideValores = JSON.parse(localStorage.getItem("sideValues"));
				console.log('sideValore: ' + sideValores);
				for (let x in sideValores) {
					let valorSide = JSON.parse(localStorage.getItem(x));
					console.log('valorSide: ' + valorSide);
					if (valorSide.includes(swtConsoleValue[0])) {
						existe0 = true;
					}
					console.log(existe0);
				}
				if (localStorage.getItem(swtConsoleValue[1]) !== null) {
					existe1 = true;
				}
				if (swtConsoleValue.length === 2 &&  
					swtConsoleValue[0].length <= 17 && 
					swtConsoleValue[1].length <= 15 &&
					existe0 === true && existe1 === false) {
					swtValuesST[swtConsoleValue[1]] = true;
					//console.log(swtConsoleValue);
					localStorage.setItem("swtValues", JSON.stringify(swtValuesST));
					localStorage.setItem(swtConsoleValue[1], JSON.stringify(swtConsoleValue));
					generator.generateSwitch(...swtConsoleValue);
					swt = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (swtConsoleValue.length === 2 && 
					typeof swtConsoleValue[0] === 'string' && 
					typeof swtConsoleValue[1] === 'string' && 
					swtConsoleValue[0].length <= 17 && 
					swtConsoleValue[1].length <= 15 &&
					(existe0 === false || existe1 === true)) {
					swt = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = 
						existe0 === false ? `Invalid Value does not exists'${swtConsoleValue[0]}'` : 
						existe1 === true ? `Invalid Value already exists'${swtConsoleValue[1]}'` : `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					swt = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});
	}
}
function conRemSwt () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove switch>>> side/swt`;
	removeswt = true;
	if (removeswt === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				const removeSwtConsoleValue = consoleValue.split(",");
				let existe0 = false;
				let sideValores = JSON.parse(localStorage.getItem("sideValues"));
				console.log('sideValore: ' + sideValores);
				for (let x in sideValores) {
					let valorSide = JSON.parse(localStorage.getItem(x));
					console.log('valorSide: ' + valorSide);
					if (valorSide.includes(removeSwtConsoleValue[0])) {
						existe0 = true;
					}
					console.log(existe0);
				}
				let existe1 = localStorage.getItem(removeSwtConsoleValue[1]);
				if (removeSwtConsoleValue.length === 2 &&  
					removeSwtConsoleValue[0].length <= 17 && 
					removeSwtConsoleValue[1].length <= 15 &&
					existe0 === true &&
					existe1 != null) {
					let swtValuesST = JSON.parse(localStorage.getItem("swtValues"));
					delete swtValuesST[removeSwtConsoleValue[1]];
					localStorage.setItem("swtValues", JSON.stringify(swtValuesST));
					getElement(`.${removeSwtConsoleValue[0] + removeSwtConsoleValue[1]}btn`).remove();
					getElement(`.swt${removeSwtConsoleValue[1]}`).remove();
					localStorage.removeItem(removeSwtConsoleValue[1]);
					removeswt = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (removeSwtConsoleValue.length === 2 && 
					removeSwtConsoleValue[0].length <= 17 && 
					removeSwtConsoleValue[1].length <= 15 &&
					(existe0 === false || existe1 === null)) {
					removeswt = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').placeholder = `Invalid Value does not exists '${removeSwtConsoleValue[0]}' or '${removeSwtConsoleValue[1]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removeswt = false;
					document.removeEventListener("keydown", arguments.callee);	
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});				
	}
}
function conGenSubTech () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<generate subTech>>> tech/subTech`;
	subTech = true;
	if (subTech === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				let subTechValuesST = JSON.parse(localStorage.getItem("subTechValues"));
				resetPlaceholder();
				pushHistory(consoleValue);
				const subTechConsoleValue = consoleValue.split(",");
				let existe0 = false;
				if (localStorage.getItem(subTechConsoleValue[0]) != null) {
					existe0 = true;
				};
				if (subTechConsoleValue.length === 2 &&  
					subTechConsoleValue[0].length <= 4 && 
					subTechConsoleValue[1].length <= 15 &&
					existe0 === true) {
					subTechValuesST[subTechConsoleValue[1]] = true;
					//console.log(subTechConsoleValue);
					localStorage.setItem("subTechValues", JSON.stringify(subTechValuesST));
					localStorage.setItem(subTechConsoleValue[1], JSON.stringify(subTechConsoleValue));
					generator.generateSubTech(...subTechConsoleValue);
					actualizarFlexBasisSubTech();
					subTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (subTechConsoleValue.length === 2 && 
					subTechConsoleValue[0].length <= 4 && 
					subTechConsoleValue[1].length <= 15 &&
					existe0 === false) {
					subTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value does not exists'${subTechConsoleValue[0]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					subTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				} 
			}
		});
	}
}
function conRemSubTech () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove subTech>>> tech/subTech`;
	let removesubTech = true;
	if (true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				const removeSubTechConsoleValue = consoleValue.split(",");
				let existe0 = false;
				if (localStorage.getItem(removeSubTechConsoleValue[0]) != null) {
					existe0 = true;
				}
				let existe1 = false;
				if (localStorage.getItem(removeSubTechConsoleValue[1]) != null) {
					existe1 = true;
				}
				if (removeSubTechConsoleValue.length === 2 && 
					removeSubTechConsoleValue[0].length <= 17 && 
					removeSubTechConsoleValue[1].length <= 15 &&
					existe0 === true &&
					existe1 === true) {
					let subTechValuesST = JSON.parse(localStorage.getItem("subTechValues"));
					delete subTechValuesST[removeSubTechConsoleValue[1]];
					localStorage.setItem("subTechValues", JSON.stringify(subTechValuesST));
					getElement(`.subTech${removeSubTechConsoleValue[1]}`).remove();
					localStorage.removeItem(removeSubTechConsoleValue[1]);
					actualizarFlexBasisSubTech();
					removesubTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (removeSubTechConsoleValue.length === 2 && 
					removeSubTechConsoleValue[0].length <= 17 && 
					removeSubTechConsoleValue[1].length <= 15 &&
					(existe0 === false ||
					existe1 === false)) {
					removesubTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value does not exists '${removeSubTechConsoleValue[0]}' or '${removeSubTechConsoleValue[1]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removesubTech = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}	
			}
		});	
	}
}
function conGenLink () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<generate link>>> subTech/swtNum/ID`;
	link = true;
	if (link === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				let linkValuesST = JSON.parse(localStorage.getItem("linkValues"));
				resetPlaceholder();
				pushHistory(consoleValue);
				const linkConsoleValue = consoleValue.split(",");
				let existe0 = false;
				if (localStorage.getItem(linkConsoleValue[0]) != null) {
					existe0 = true;
				}
				let includes0 = false;
				let includes1 = false;
				let includes2 = false;
				let includes3 = false;
				if (linkConsoleValue.length === 3) {
					let sideValores = JSON.parse(localStorage.getItem("sideValues"));
					console.log('sideValore: ' + sideValores);
					for (let x in sideValores) {
						let valorSide = JSON.parse(localStorage.getItem(x));
						if (linkConsoleValue[2].includes(valorSide[0])) { 
							includes0 = true;
						}
						console.log(includes0);
					}
					let techValores = JSON.parse(localStorage.getItem("techValues"));
					for (let j in techValores) {
						let valorTech = JSON.parse(localStorage.getItem(j));
						if (linkConsoleValue[2].includes(valorTech[1])) {
							includes1 = true;
						}
					}
					let swtValores = JSON.parse(localStorage.getItem("swtValues"));
					for (let j in swtValores) {
						let valorSwt = JSON.parse(localStorage.getItem(j));
						if (linkConsoleValue[2].includes(valorSwt[1])) {
							includes2 = true;
						}
					}
					let subTechValores = JSON.parse(localStorage.getItem("subTechValues"));
					for (let j in subTechValores) {
						let valorSubTech = JSON.parse(localStorage.getItem(j));
						if (linkConsoleValue[2].includes(valorSubTech[1])) {
							includes3 = true;
						}
					}
				}
				if (linkConsoleValue.length === 3 &&
					linkConsoleValue[0] != undefined &&
					linkConsoleValue[1] != undefined &&
					linkConsoleValue[2] != undefined &&
					typeof parseInt(linkConsoleValue[1]) === 'number' &&
					linkConsoleValue[0].length <= 15 &&
					existe0 === true &&
					includes0 === true &&
					includes1 === true &&
					includes2 === true &&
					includes3 === true) {
					linkValuesST[`.subTech${linkConsoleValue[0] + linkConsoleValue[1]}`] = true;
					//console.log("generated link: " + `.subTech${linkConsoleValue[0] + linkConsoleValue[1]}`);
					localStorage.setItem("linkValues", JSON.stringify(linkValuesST));
					localStorage.setItem(`.subTech${linkConsoleValue[0]}${linkConsoleValue[1]}`, JSON.stringify(linkConsoleValue));
					generator.generateLink(`.subTech${linkConsoleValue[0]}`, linkConsoleValue[1], linkConsoleValue[2]);
					link = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);	
				}
				else if (linkConsoleValue.length === 3 &&  
					typeof parseInt(linkConsoleValue[1]) === 'number' && 
					linkConsoleValue[0].length <= 15 &&
					(existe0 === false ||
					includes0 === false ||
					includes1 === false ||
					includes2 === false ||
					includes3 === false)) {
					link = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = 
					existe0 === false ? `Invalid Value does not exists '${linkConsoleValue[0]}'`:
					includes0 === false || includes1 === false || includes2 === false || includes3 === false ? 'Invalid Value, Id element does not exists':
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					link = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});
	}
}
function conRemLink () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove link>>> subTech/swtNum`;
	let removelink = true;
	if (removelink === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				removelinkConsoleValue = consoleValue.split(",");
				let existe0 = false;
				if (localStorage.getItem(removelinkConsoleValue[0]) != null) {
					existe0 = true;
				}
				if (removelinkConsoleValue.length === 2 &&  
					typeof parseInt(removelinkConsoleValue[1]) === 'number' && 
					removelinkConsoleValue[0].length <= 15 &&
					existe0 === true) {
					let linkValuesST = JSON.parse(localStorage.getItem("linkValues"));
					delete linkValuesST[`.subTech${removelinkConsoleValue[0] + removelinkConsoleValue[1]}`];
					localStorage.setItem("linkValues", JSON.stringify(linkValuesST));
					let links = getElements(`.subTech${removelinkConsoleValue[0]} a`);
					for (let i = 0; i < links.length; i++) {	
					links[i].remove();
					};
					localStorage.removeItem(`.subTech${removelinkConsoleValue[0] + removelinkConsoleValue[1]}`);
					removelink = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else if (removelinkConsoleValue.length === 2 && 
					typeof parseInt(removelinkConsoleValue[1]) === 'number' && 
					removelinkConsoleValue[0].length <= 15 &&
					existe0 === false) {
					removelink = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value does not exists '${removelinkConsoleValue[0]}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removelink = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});
	}
}
function conGenRLM () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<linker modifier>>> side/tech/swt/subTech/numero/txt/href/title/bg/state`;
	rlm = true;
	if (rlm === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				let rlmValuesST = JSON.parse(localStorage.getItem("rlmValues"));
				resetPlaceholder();
				pushHistory(consoleValue);
				const rlmConsoleValue = consoleValue.split(",");
				let existe0 = false;
				let sideValores = JSON.parse(localStorage.getItem("sideValues"));
				console.log('sideValore: ' + sideValores);
				for (let x in sideValores) {
					let valorSide = JSON.parse(localStorage.getItem(x));
					console.log('valorSide: ' + valorSide);
					if (valorSide.includes(rlmConsoleValue[0])) {
						existe0 = true;
					}
					console.log(existe0);
				}
				let existe1 = false;
				if (localStorage.getItem(rlmConsoleValue[1]) != null) {
					existe1 = true;
				}
				let existe2 = false;
				if (localStorage.getItem(rlmConsoleValue[2]) != null) {
					existe2 = true;
				}
				let existe3 = false;
				if (localStorage.getItem(rlmConsoleValue[3]) != null) {
					existe3 = true;
				}
				if (rlmConsoleValue.length === 10 && 
					typeof parseInt(rlmConsoleValue[4]) === 'number' && 
					existe0 === true &&
					existe1 === true &&
					existe2 === true &&
					existe3 === true) {
					rlmValuesST[rlmConsoleValue[0] + rlmConsoleValue[1] + rlmConsoleValue[2] + rlmConsoleValue[3] + rlmConsoleValue[4]] = true;
					//console.log(rlmConsoleValue);
					localStorage.setItem("rlmValues", JSON.stringify(rlmValuesST));
					let valorRLM = [rlmConsoleValue[0],rlmConsoleValue[1],rlmConsoleValue[2],rlmConsoleValue[3],rlmConsoleValue[4],rlmConsoleValue[5],rlmConsoleValue[6],rlmConsoleValue[7],rlmConsoleValue[8],rlmConsoleValue[9]];
					localStorage.setItem(rlmConsoleValue[0] + rlmConsoleValue[1] + rlmConsoleValue[2] + rlmConsoleValue[3] + rlmConsoleValue[4], JSON.stringify(valorRLM));
					RLM(rlmConsoleValue[0], rlmConsoleValue[1], rlmConsoleValue[2], rlmConsoleValue[3], rlmConsoleValue[4], rlmConsoleValue[5], rlmConsoleValue[6], rlmConsoleValue[7], eval(rlmConsoleValue[8]), eval(rlmConsoleValue[9]));
					rlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else if (rlmConsoleValue.length === 10 &&
					typeof parseInt(rlmConsoleValue[4]) === 'number' && 
					(existe0 === false ||
					existe1 === false ||
					existe2 === false ||
					existe3 === false)) {
					rlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = 
					existe0 === false ? `Invalid Value does not exists '${rlmConsoleValue[0]}'` :
					existe1 === false ? `Invalid Value does not exists '${rlmConsoleValue[1]}'` :
					existe2 === false ? `Invalid Value does not exists '${rlmConsoleValue[2]}'` :
					existe3 === false ? `Invalid Value does not exists '${rlmConsoleValue[3]}'` : `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					rlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});
	}
}
function conRemRLM () {
	resetPlaceholder();
	pushHistory(consoleValue);
	getElement('.consolebox').reset();
	getElement('.console').placeholder = `<<<remove rlm>>> side/tech/swt/subTech/numero`;
	removerlm = true;
	if (removerlm === true) {
		document.addEventListener("keydown", function(event) {
			if (event.key === "Enter") {
				resetPlaceholder();
				pushHistory(consoleValue);
				const rlmConsoleValue = consoleValue.split(",");
				let existe0 = false;
				let sideValores = JSON.parse(localStorage.getItem("sideValues"));
				console.log('sideValore: ' + sideValores);
				for (let x in sideValores) {
					let valorSide = JSON.parse(localStorage.getItem(x));
					console.log('valorSide: ' + valorSide);
					if (valorSide.includes(rlmConsoleValue[0])) {
						existe0 = true;
					}
					console.log(existe0);
				}
				let existe1 = false;
				if (localStorage.getItem(rlmConsoleValue[1]) != null) {
					existe1 = true;
				}
				let existe2 = false;
				if (localStorage.getItem(rlmConsoleValue[2]) != null) {
					existe2 = true;
				}
				let existe3 = false;
				if (localStorage.getItem(rlmConsoleValue[3]) != null) {
					existe3 = true;
				}
				if (rlmConsoleValue.length === 5 &&  
					typeof parseInt(rlmConsoleValue[4]) === 'number' &&
					existe0 === true &&
					existe1 === true &&
					existe2 === true &&
					existe3 === true) {
					let rlmValuesST = JSON.parse(localStorage.getItem("rlmValues"));
					delete rlmValuesST[rlmConsoleValue.join("")];
					localStorage.removeItem(rlmConsoleValue.join(""));
					localStorage.setItem("rlmValues", JSON.stringify(rlmValuesST));
					RLM(rlmConsoleValue[0],rlmConsoleValue[1],rlmConsoleValue[2],rlmConsoleValue[3],rlmConsoleValue[4],"","","","",false);
					removerlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else if (rlmConsoleValue.length === 5 &&  
					typeof parseInt(rlmConsoleValue[4]) === 'number' &&
					(existe0 === false ||
					existe1 === false ||
					existe2 === false ||
					existe3 === false)) {
					rlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = 
					existe0 === false ? `Invalid Value does not exists '${rlmConsoleValue[0]}'` :
					existe1 === false ? `Invalid Value does not exists '${rlmConsoleValue[1]}'` :
					existe2 === false ? `Invalid Value does not exists '${rlmConsoleValue[2]}'` :
					existe3 === false ? `Invalid Value does not exists '${rlmConsoleValue[3]}'` : `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
				else {
					removerlm = false;
					document.removeEventListener("keydown", arguments.callee);
					getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
					document.documentElement.style.setProperty('--phc', '#F00');
					getElement('.console').value = '';
					getElement('.consolebox').reset();
					allConsoleFunc(true);
				}
			}
		});
	}
}
function LSactualizarSide () {
	let sideValores = JSON.parse(localStorage.getItem("sideValues"));
	//console.log(sideValores);
	for (let SV in sideValores) {
	  let sideValue2 = JSON.parse(localStorage.getItem(SV));
	  //console.log("side valor: " + sideValue2);
	  generator.generateSide(...sideValue2);
	  actualizarDisplays();
		actualizarAsideFocus();
	}	
}
function LSactualizarTech () {
	let techValores = JSON.parse(localStorage.getItem("techValues"));
	//console.log(techValores);
	for (let TV in techValores) {
		let techValue2 = JSON.parse(localStorage.getItem(TV));
		//console.log("tech valor: " + techValue2);
		generator.generateTech(...techValue2);
	}
}
function LSactualizarSwt () {
	let swtValores = JSON.parse(localStorage.getItem("swtValues"));
	//console.log(swtValores);
	for (let SWV in swtValores) {
		let swtValue2 = JSON.parse(localStorage.getItem(SWV));
		//console.log("swt valor: " + swtValue2);
		generator.generateSwitch(...swtValue2);
	}	
}
function LSactualizarSubTech () {
	let subTechValores = JSON.parse(localStorage.getItem("subTechValues"));
	//console.log(subTechValores);
	for (let STV in subTechValores) {
		let subTechValue2 = JSON.parse(localStorage.getItem(STV));
		//console.log("subTech valores: " + subTechValue2);
		generator.generateSubTech(...subTechValue2);
		actualizarFlexBasisSubTech();
	}	
}
function LSactualizarLink () {
	let linkValores = JSON.parse(localStorage.getItem("linkValues"));
	//console.log(linkValores);
	for (let STV in linkValores) {
		let linkValue2 = JSON.parse(localStorage.getItem(STV));
		//console.log("link valor: " + linkValue2);
		generator.generateLink(`.subTech${linkValue2[0]}`, linkValue2[1], linkValue2[2]);
	}	
}
function LSactualizarRLM () {
	let rlmValores = JSON.parse(localStorage.getItem("rlmValues"));
	//console.log(rlmValores);
	for (let STV in rlmValores) {
		let rlmValue2 = JSON.parse(localStorage.getItem(STV));
		//console.log("rlm valor: " + rlmValue2);
		RLM(rlmValue2[0],rlmValue2[1],rlmValue2[2],rlmValue2[3],rlmValue2[4],rlmValue2[5],rlmValue2[6],rlmValue2[7],eval(rlmValue2[8]),eval(rlmValue2[9]));
	}	
}
LSactualizarSide();
LSactualizarTech();
LSactualizarSwt();
LSactualizarSubTech();
LSactualizarLink();
LSactualizarRLM();
