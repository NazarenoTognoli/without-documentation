//generate-side (nombre del side, nombre del boton)

//generate-tech (nombre del side, nombre del tech)

//genrate-switch (nombre del side, nombre del switch) (los ultimos seran primeros y los primeros seran ultimos)

//generate-subTech (nombre del tech, nombre del subTech)

//generate-link (nombre del subTech, numero del switch, identificacion del linker) (los ultimos seran primeros y los primeros seran ultimos)

//RLM('networks', 'osi', 'reference', 'others-osi', 1, 'completereference', '', '', bv, false);

//(side, tech, swt, subTech, numero, txt, href, title, bg, state)

//rudimentary linker modifier



//hacer funciones descriptivas
//minimizar los errores al max

















































/*
-----------------------------------------------------
|n: tech 	 	|n: swt 				|n: subTech		|
|	0 = JS;		|	0 = articles;	|	0 = core;	|
|	2 = CSS;	| 	2 = articles;	|	2 = frame;	|
|	2 = PHP;	| 					|	2 = others;	|
|	3 = PY;		| 					|	3 = RDBMS;	|
|	4 = DB;		| 					|	4 = NoSQL;	|
|	5 = RUBY;	|					|	5 = CDB;	|
-----------------------------------------------------
|n: identifier										|
|	2 > 29;											|
-----------------------------------------------------
*/

/*mth reference

ARITMETIswt
	- References
	- Theory and Logic
	- OThers
ALGEBRA
	- Elemental
	- Lineal
	- Asbtracta
	- Booleana
	- Otros
ANÁLISIS MATEMÁTICO
	- Cálculo diferencial
	- Cálculo integral
	- Ecuaciones diferenciales
	- Análisis complejo
	- Análisis funcional
	- Análisis numérico
	- Otros

generator.generateLink('.subTechcaldif-amt', 2, 'mathematicsamtarticlescaldif');
	generator.generateLink('.subTechcalint-amt', 2, 'mathematicsamtarticlescalint');
	generator.generateLink('.subTeched-amt', 2, 'mathematicsamtarticlesed');
	generator.generateLink('.subTechac-amt', 2, 'mathematicsamtarticlesac');
	generator.generateLink('.subTechaf-amt', 2, 'mathematicsamtarticlesaf');
	generator.generateLink('.subTechan-amt', 2, 'mathematicsamtarticlesan');
	generator.generateLink('.subTechothers-amt', 2, 'mathematicsamtarticlesothers');













	const linkermod = document.querySelectorAll('.linker-mod');
	const linkermodicon = document.querySelectorAll('.linker-mod__icon');
	for (let i = 0; i < linkermod.length; i++) {
		linkermod[i].style.height = '60%';
		linkermod[i].style.flexBasis = '32%';
		linkermod[i].style.clipPath = 'polygon(22% 0, 200% 0, 200% 200%, 22% 200%, 0 50%)';
		linkermod[i].style.background = 'var(--bg4)';
		
	}

	for (let i = 0; i < linkermodicon.length; i++) {
		linkermodicon[i].style.height = '70%';
		linkermodicon[i].style.background = 'var(--bg5)';
		linkermodicon[i].style.clipPath = 'polygon(27% 0; 200% 0, 200% 200%, 27% 200%, 7% 50%)';
	}
	devwebswitcherdisplay.style.display = "none";
*/







/*

Hay secciones dentro de secciones dentro de secciones. estas secciones tienen elementos especificos pero todos comparten las mismas clases. 
¿Como lo genero dinamiswtmente con matrices? 

2 - Identifiswtr las accioines que se utilizan para ser generados

	a - creacion de elementos
	b - asignacion de clases
	c - asignacion de ID's especificos 
	d - codigo repetitivo
	e -   


INTERRUMPCION: "Esto deberia ser generado dinamiswtmente como las swtpas de un pastel. primero se hicieron los links, se sigue con los subTech, swt,
Y por ultimos SIDE, con funciones que automaticen los procesos de creacion, con parametros como comandos"












*/
function RLM(side, tech, swt, subTech, numero, txt, href, title, bg, state) {
	const classElementSelector = '.' + eC.side[side] + eC.tech[tech] + eC.swt[swt] + eC.subTech[subTech] + '-linker-' + numero;
	const getLinker = (txt) => getElement(classElementSelector + ' b').innerHTML = txt;
	const getLinkerAttribute = () => {getElement(classElementSelector).href = href; getElement(classElementSelector).title = title;};
	const getLinkerStyle = (bg) => {getElement(classElementSelector + ' div').style.background = bg; getElement(classElementSelector + ' div').style.boxShadow = bg === cssVar.lbw ? cssVar.lbwb : bg === cssVar.lbv ? cssVar.lbvb : bg === cssVar.lbl ? cssVar.lblb : 'none';};
	const getLinkerState = (state) => { stateValue = bg == cssVar.lbw && state == true ? state = cssVar.abw : bg == cssVar.lbv && state == true ? state = cssVar.abv : bg == cssVar.lbl && state == true ? state = cssVar.abl : 'none'; getElement(classElementSelector + ' div').style.animation = stateValue;};
	return 	getLinker(txt) + getLinkerAttribute() + getLinkerStyle(bg) + getLinkerState(state);
};