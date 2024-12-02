



//---------------- toDisplayPageAsideAndHeader ----------------------

const embed = document.querySelector(".embed");	
const embed0 = document.querySelector(".embed-0");
const embed1 = document.querySelector(".embed-1");
const embed2 = document.querySelector(".embed-2");
const embed3 = document.querySelector(".embed-3");
const embed4 = document.querySelector(".embed-4");
const embed5 = document.querySelector(".embed-5");

function displayer(a,b,c,d,e,f,g){
	
	a = a.style.display = "flex";
	b = b.style.display = "none";
	c = c.style.display = "none";
	d = d.style.display = "none";
	e = e.style.display = "none";
	f = f.style.display = "none";

	return  b + c + d + e + f + a;
}


//-------------- toDisplayPageDevWeb --------------------

const webcore = document.querySelector(".dev-web__js");
const webframe = document.querySelector(".dev-web__css");
const weblibrary = document.querySelector(".dev-web__php");
const webother = document.querySelector(".dev-web__python");

function devwebDisplayer(a,b,c,d,e){

	a = a.style.display = "none";
	b = b.style.display = "none";
	c = c.style.display = "none";
	d = d.style.display = "none";
	e = e.style.display = "flex";

	return a + b + c + d + e;
}

//----------- toDisplayPageLang ------------------------

const langengl = document.querySelector(".lang__engl");
const langdeutsch = document.querySelector(".lang__deutsch");

function langDisplayer(a,b,c){

	a = a.style.display = "flex";
	b = b.style.display = "none";

	return b + a;
}