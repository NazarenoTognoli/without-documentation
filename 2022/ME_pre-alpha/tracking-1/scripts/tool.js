
//------------ BUTTON ------------------------------------

/*const webcoreButton = document.querySelector("#dev-web-core");
const webframeworkButton = document.querySelector("#dev-web-framework");
const weblibrariesButton = document.querySelector("#dev-web-libraries");
const webothersButton = document.querySelector("#dev-web-others");*/


//---------------- toDisplay ----------------------

const embed = document.querySelector(".embed");	
const embed0 = document.querySelector(".embed-0");
const embed1 = document.querySelector(".embed-1");
const embed2 = document.querySelector(".embed-2");
const embed3 = document.querySelector(".embed-3");
const embed4 = document.querySelector(".embed-4");
const embed5 = document.querySelector(".embed-5");

//------------------ BUTTON -------------------------

const boton = document.querySelectorAll(".aside__button, .header__button");
const boton0 = document.querySelector("#b-0");
const boton1 = document.querySelector("#b-1");
const boton2 = document.querySelector("#b-2");
const boton3 = document.querySelector("#b-3");
const boton4 = document.querySelector("#b-4");
const boton5 = document.querySelector("#b-5");


function displayer(a,b,c,d,e,f,g,h,i){
	
	e = e.style.display = "none";
	f = f.style.display = "none";
	g = g.style.display = "none";
	h = h.style.display = "none";
	i = i.style.display = "none";
	a = a.style.display = "none";
	b = b.style.display = "flex";
	c = c.disabled = true;
	d = d.disabled = false;
	
	
	return  c + d + a + e + f + g + h + i + b;
}


//-------------- toDisplay --------------------

const webcore = document.querySelector(".dev-web__core");
const webframe = document.querySelector(".dev-web__framework");
const weblibrary = document.querySelector(".dev-web__libraries");
const webother = document.querySelector(".dev-web__others");



function devwebDisplayer(a,b,c,d,e){

	a = a.style.display = "none";
	b = b.style.display = "none";
	c = c.style.display = "none";
	d = d.style.display = "none";
	e = e.style.display = "flex";

	return a + b + c + d + e;

}

