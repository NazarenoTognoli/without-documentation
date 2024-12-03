
function globaldisplayerAll(button, display, nodisplay, extra) {
	for (let i = 0; i < button.length; i++) {
			button[i].addEventListener('click', function() {
			for (let k = 0; k < nodisplay.length; k++) {
				nodisplay[k].style.display = "none";
			}
			for (let j = 0; j < display.length; j++) {
				display[j].style.display = "flex";
			}
			for (let r = 0; r < extra.length; r++) {
				extra[r].style.display = "none";
			}	
		});
	}
};
actualizarDisplays = () => {
	globaldisplayer(getElement('#navtimetable'), getElement('.timetable'), getElements('.display'));
	globaldisplayer(getElement('#navmain'), getElement('.main'), getElements('.display'));
};
actualizarDisplays();
//----------- subTech -------------------
//switcher
/*globaldisplayerAll(getElements('.devweb__switcher'), getElements('.devweb__switcher-display'), 0, 0)
globaldisplayerAll(getElements('.dwsdbutton-1'), getElements('.courses'), getElements('.articles'), getElements('.devweb__switcher-display'));
globaldisplayerAll(getElements('.dwsdbutton-2'), getElements('.articles'), getElements('.courses'), getElements('.devweb__switcher-display'));*/


