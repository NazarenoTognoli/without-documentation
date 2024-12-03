
const dwsdbutton2 = document.querySelector('.dwsdbutton-2');

const articles = document.querySelectorAll('.articles');
const courses = document.querySelectorAll('.courses');




dwsdbutton2.addEventListener('click', function() {
	for (let i = 0; i < courses.length; i++) {
		courses[i].style.display = 'none';
	}
	for (let i = 0; i < courses.length; i++) {
		articles[i].style.display = 'inherit';
		articles[i].style.flexBasis = '100%';
	}
	function stylechanger(element, style, value) {
		for (let i = 0; i < element.length; i++) {
			element[i].style[style] = value;
		}
	}
	function getElements(selector) {
  		return document.querySelectorAll(selector);
	}
	const devwebArtOBJ = {
		articleslink: getElements('.alllinksdebweb'),
		articleslinkb: getElements('.alllinksdevweb b'),
		articleslinkdiv: getElements('.alllinksdebweb div')

	};
	//--------------- articles JS ------------------------------------
	stylechanger(devwebArtOBJ.articleslink, 'height', '3.3em');
	//------------- articlesjslink B -----------------------------------
	stylechanger(devwebArtOBJ.articleslinkb, 'fontSize', '1.1em');
	stylechanger(devwebArtOBJ.articleslinkb, 'paddingLeft', '5%');
	//----------------articleslink div------------------------------------------
	stylechanger(devwebArtOBJ.articleslinkdiv, 'height', '60%');
	stylechanger(devwebArtOBJ.articleslinkdiv, 'flexBasis', '4px');

	const linkermod = document.querySelectorAll('.linker-mod');
	for (let i = 0; i < linkermod.length; i++) {
		linkermod[i].style.height = '60%';
		linkermod[i].style.flexBasis = '32%';
		linkermod[i].style.clipPath = 'polygon(12% 0, 100% 0, 100% 100%, 12% 100%, 0 50%)';
		linkermod[i].style.background = 'var(--bg4)';
	}
	const linkermodicon = document.querySelectorAll('.linker-mod__icon');
	for (let i = 0; i < linkermodicon.length; i++) {
		linkermodicon[i].style.height = '70%';
		linkermodicon[i].style.background = 'var(--bg5)';
		linkermodicon[i].style.clipPath = 'polygon(17% 0; 100% 0, 100% 100%, 17% 100%, 7% 50%)';
	}
	devwebswitcherdisplay.style.display = "none";

});