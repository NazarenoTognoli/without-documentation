/*<button class="devweb__js-courses-core-linker-1-button linker-mod" id="btn-1">
												<img src="sources/img/gearwhitesvg.svg" class="linker-mod__icon"></button>*/
/*Atributos a cambiar: href y title. Contenido a cambiar: Inner.HTML del b dentro de link*/

/*Sí, es posible emular un servidor local sin conexión a internet. Hay varias formas de hacerlo, por ejemplo:

Usar un servidor local como XAMPP o WAMP: Estos programas proporcionan un servidor Apache y una base de datos MySQL que puedes ejecutar en tu computadora local. Puedes instalarlos y configurararingolos para que funcionen sin conexión a internet.

Utilizar un servidor de aplicaciones como Tomcat: Tomcat es un servidor web y de aplicaciones que puedes descargar y ejecutar localmente en tu computadora. Puedes instalar Tomcat y configurararingo una aplicación web para que se ejecute en él.

Crear una aplicación web basada en JavaScript: Puedes crear una aplicación web basada en JavaScript que no requiere de un servidor, sino que se ejecuta completamente en el navegador web. Para ello, puedes utilizar un framework como React, Vue o Angular.

Es importante tener en cuenta que, aunque puedes emular un servidor local sin conexión a internet, no tendrás acceso a recursos externos como bases de datos alojadas en la nube o servicios web que requieran una conexión a internet.*/
function globaldisplayer(button, display, nodisplay) {
	button.addEventListener('click', function() {
		for (let i = 0; i < nodisplay.length; i++) {
			nodisplay[i].style.display = "none";
		}
		display.style.display = "flex";
	});
};
function globaldisplayerauxiliar(button, display, nodisplay) {
	button.addEventListener('click', function() {
		for (let i = 0; i < nodisplay.length; i++) {
			nodisplay[i].style.display = "none";
		}
		for (let j = 0; j < display.length; j++) {
		display[j].style.display = "flex";	
		}
	});
};
function globaldisplayerSwitch(button, display, nodisplay, extra) {
	button.addEventListener('click', function() {
		for (let k = 0; k < nodisplay.length; k++) {
			nodisplay[k].style.display = "none";
		}
		for (let f = 0; f < display.length; f++) {
		display[f].style.display = "flex";
		}
		for (let r = 0; r < extra.length; r++) {
			extra[r].style.display = "none";
		}	
	});
};
getElement = (selector) => document.querySelector(selector);
getElements = (selector) => document.querySelectorAll(selector);
getComptStyle = (selector) => getComputedStyle(document.documentElement).getPropertyValue(selector);
const cssVar = {
	//web
	lbw: getComptStyle('--lbw'),
	lbwb: getComptStyle('--lbwb'),
	//video
	lbv: getComptStyle('--lbv'),
	lbvb: getComptStyle('--lbvb'),
	//local
	lbl: getComptStyle('--lbl'),
	lblb: getComptStyle('--lblb'),
	//anim
	abw: getComptStyle('--abw'),
	abv: getComptStyle('--abv'),
	abl: getComptStyle('--abl'),
	//default
	default: getComptStyle('--bg4')
};
var bw = cssVar.lbw;
var bv = cssVar.lbv;
var bl = cssVar.lbl;

const generator = {
	side: {},
	tech: {},
	switch: {},
	subTech: {},
	generateSide: function (name, namebtn) {
		generator.side[name] = true;
		//generate .aside buttons elements
		const button = document.createElement('button');
		const b = document.createElement('b');
		button.classList.add('aside__button', 'habtn');
		button.id = `nav${name}`;
		b.innerHTML = namebtn.toUpperCase();
		getElement('.aside').appendChild(button);
		getElement(`#nav${name}`).appendChild(b);
		//generate section elements
		const section = document.createElement('section');
		section.classList.add('display', `${name}`, 'side');
		getElement('.mothersection').appendChild(section);
		//generate generated section content
			getElement(`.${name}`).innerHTML = `
						<div class="phrase">
							<div class="phrase-movement">
								<span id="ch1">因</span>
								<span id="ch2">为</span>
								<span id="ch3">罪</span>
								<span id="ch4">孽</span>
								<span id="ch5">比</span>
								<span id="ch6">比</span>
								<span id="ch7">皆</span>
								<span id="ch8">是</span>
								<span id="ch9">，</span>
								<span id="ch10">许</span>
								<span id="ch11">多</span>
								<span id="ch12">人</span>
								<span id="ch13">的</span>
								<span id="ch14">爱</span>
								<span id="ch15">心</span>
								<span id="ch16">渐</span>
								<span id="ch17">渐</span>
								<span id="ch18">冷</span>
								<span id="ch19">淡</span>
							</div>
						</div>
						<div class="side--boxcontainer">
						<nav class="${name}__nav side-nav">
							<div class="${name}__nav-div side-nav-div">
							</div>
							<button class="${name}__switcher side__switcher">switch</button>
							<div class="${name}__switcher-display side__switcher-display">
							</div>
						</nav>
						</div>
			`;
	},
	generateTech: function (side, name) {
		generator.tech[name] = true;
		//generate side-nav buttons
		const button = document.createElement('button');
		button.id = `nav${name}`;
		button.innerHTML = name;
		getElement(`.${side}__nav-div`).appendChild(button);
		//generate side-container section
		const section = document.createElement('section');
		section.classList.add(`${side}__${name}`, `tech${name}`, `${side}tech`, 'tech', `${name}`);
		getElement(`.${side} > .side--boxcontainer`).appendChild(section);
	},
	generateSwitch: function (side, name) {
		generator.switch[name] = true;
		//generate side__switcher-display button
		const button = document.createElement('button');
		button.classList.add(`${side}${name}btn`, `swt${name}btn`, 'swtbtn');
		var numero = getElements(`.${side}__switcher-display button`).length + 1;
		button.innerHTML = `${name + '(' + numero + ')'}`;
		getElement(`.${side}__switcher-display`).appendChild(button);
		//generate tech switch
		//document.addEventListener('DOMContentLoaded', function() {
			for (let i = 0; i < getElements(`.${side} .tech`).length; i++) {
				const section = document.createElement('section');
				section.classList.add(`${side}${name}swt`, `${side}swt`, 'swt', `swt${name}`);
				section.innerHTML = `
				<h3 class="${side}${name}-h3 swt-h3">
					<div class="h3-statictitle">
						<span>${getElements(`.${side} .tech`)[i].classList.item(4)}</span>
					</div>
					<div class="h3-dynamictitle">
						<div class="h3-dynamictitle-div1"><span>${name} category</span></div>
						<div class="h3-dynamictitle-div2"><span>${side}</span></div>
					</div>
				</h3>
				`;
				getElements(`.${side} .tech`)[i].appendChild(section);
				//console.log(getElements(`.${side} .tech`)[i]);
			};
			//activate switch buttons after DOM is loaded
			for (let extraswitch in generator.switch) {
				globaldisplayerSwitch(getElement(`.swt${extraswitch}btn`), getElements(`.swt${extraswitch}`), getElements('.swt'), getElements('.side__switcher-display'));
			}
		//});
	},
	generateSubTech: function (tech, name) {
		generator.subTech[name] = true;
		for (let i = 0; i < getElements(`.${tech} .swt`).length; i++) {
			const section = document.createElement('section');
			const h4 = document.createElement('h4');
			section.classList.add(`subTech${name}`, 'extra', 'subTech');
			h4.classList.add(`${name}h4`, 'subTech-h4');
			h4.innerHTML = `${name}`;
			//let sideID = getElement(`.${tech}`).classList.item(0).replace(`__${tech}`, "");
			//let techsIDs = getElements(`.${sideID} > .side--boxcontainer .tech`);
			if (getElements(`.${tech} .swt`)[i].querySelector('.starsBackground') === null) {
				const starsBackground = document.createElement('div');
				starsBackground.classList.add("starsBackground");
					function genRanStar () {
						const star = document.createElement("div");
						star.classList.add('star');
						let randomN1 = Math.floor(Math.random() * 101);
						star.style.top = `${randomN1}%`;
						let randomN2 = Math.floor(Math.random() * 101);
						star.style.left = `${randomN2}%`;
						let randomN3 = Math.floor(Math.random() * 9 + 2);
						let randomN5 = Math.floor(Math.random() * 10);
						star.style.animation = `starAnim 1.${randomN5}s ease-in-out`;
						star.style.opacity = `0.${randomN3}`;
						starsBackground.appendChild(star);
						const deleteStar = () => {
							star.remove();
						}
						setTimeout(deleteStar, 2000);
					}
					for (let i = 0; i < 15; i++) {
						let randomN4 = Math.floor(Math.random() * 1000 + 2000);
						setInterval(genRanStar, randomN4);
					}	
				getElements(`.${tech} .swt`)[i].appendChild(starsBackground);
			} 
			section.appendChild(h4);	
			getElements(`.${tech} .swt`)[i].appendChild(section);
		}
	},
	generateLink: function (subTech, swt, linkerClass) {
		for (let i = 0; i < 25; i++) {
			const linker = document.createElement('a');
			const div = document.createElement('div');
			const b = document.createElement('b');
			const span = document.createElement('span');
			linker.classList.add(`${linkerClass}${i+1}`, 'alllinks');
			linker.setAttribute('target', '_blank');
			/*if (i >= 5) {
				linker.classList.add('extra2');
			}*/
			getElements(subTech)[swt - 1].appendChild(linker);
			linker.appendChild(div);
			linker.appendChild(b);
			if (i === 9) {
				linker.addEventListener('mouseover', function() {
			      linker.style.backgroundImage = 'linear-gradient(to top, var(--bg8) 0%, var(--bg1) 3%, var(--bg1) 97%, var(--bg8) 100%)';
			      span.style.backgroundImage = 'linear-gradient(to top, var(--bg8) 0%, var(--bg1) 3%, var(--bg1) 97%, var(--bg8) 100%)';
			    });			
			    linker.addEventListener('mouseout', function() {
			      linker.style.backgroundImage = 'none';
			      span.style.backgroundImage = 'none';
			    });
			}
			span.innerHTML = i < 9 ? `0${i+1}` : `${i+1}`;
			linker.appendChild(span);
		}
	}
}
function RLM(side, tech, swt, subTech, numero, txt, href, title, bg, state) {
	//obtiene la direccion del linker
	const classElementSelector = '.' + side + tech + swt + subTech + numero;
	//añade el titulo
	const getLinker = (txt) => getElement(classElementSelector + ' b').innerHTML = txt;
	//añade el subtitulo
	const getLinkerAttribute = () => {getElement(classElementSelector).href = href; getElement(classElementSelector).title = title;};
	//añade el color de la luz / tipo de enlace 
	const getLinkerStyle = (bg) => {getElement(classElementSelector + ' div').style.background = bg; getElement(classElementSelector + ' div').style.boxShadow = bg === cssVar.lbw ? cssVar.lbwb : bg === cssVar.lbv ? cssVar.lbvb : bg === cssVar.lbl ? cssVar.lblb : 'none';};
	//verifica si se quiere que la luz este activa o inactiva
	const getLinkerState = (state) => { stateValue = bg == cssVar.lbw && state == true ? state = cssVar.abw : bg == cssVar.lbv && state == true ? state = cssVar.abv : bg == cssVar.lbl && state == true ? state = cssVar.abl : 'none'; getElement(classElementSelector + ' div').style.animation = stateValue;};
	return 	getLinker(txt) + getLinkerAttribute() + getLinkerStyle(bg) + getLinkerState(state);
};






