window.addEventListener('DOMContentLoaded', function() {
	activateButtons = () => {
		//activate and fix buttons
		//activate-tech-buttons
		for (let tech in generator.tech) {
			globaldisplayer(getElement(`#nav${tech}`), getElement(`.tech${tech}`), getElements('.tech'));
		};			
		//activate-swt-buttons(switcher-display)
		function globaldisplayerAllauxiliar(button, display) {
			for (let i = 0; i < button.length; i++) {
					button[i].addEventListener('click', function() {
					for (let j = 0; j < display.length; j++) {
						display[j].style.display = "flex";
					}	
				});
			}
		};
		globaldisplayerAllauxiliar(getElements('.side__switcher'), getElements('.side__switcher-display'));			
		function displayerforswt(button, display) {
			button.addEventListener('click', function() {
				for (let h = 0; h < getElements('.swt').length; h++) {
					getElements('.swt')[h].style.display = "none";
				}
				for (let j = 0; j < display.length; j++) {
				display[j].firstElementChild.style.display = "flex";	
				}
			});
		};
		for (let side in generator.side) {
			globaldisplayer(getElement(`#nav${side}`), getElement(`.${side}`), getElements('.display'));
			//fix-for-swt-display
			displayerforswt(getElement(`#nav${side}`), getElements('.tech')); //DOM LOADED NEEDED
			//fix-for-tech-display
			globaldisplayerauxiliar(getElement(`#nav${side}`), getElements(`.side--boxcontainer > .tech:nth-child(2)`), getElements('.tech'));
		};
	};
	activateButtons();
	getElement('.navtitle').addEventListener('click', function() {
		//console-display-allvalues
		/*console.log('side: ' + JSON.stringify(generator.side));
		console.log('tech: ' + JSON.stringify(generator.tech));
		console.log('switch: ' + JSON.stringify(generator.switch));
		console.log('subTech: ' + JSON.stringify(generator.subTech));*/
		getElement('.consolebox').style.display = 'flex';
		getElement('.boxOfBoxes-desktop').style.filter = 'blur(0px)';
    	getElement('.boxOfBoxes-desktop').style.pointerEvents = 'none';
    });
    closeconsolebox = () => {
    	getElement('.consolebox').style.display = "none";
    	getElement('.boxOfBoxes-desktop').style.filter = 'none';
    	getElement('.boxOfBoxes-desktop').style.pointerEvents = 'auto';
    	for (let i = 0; i < getElements('.phrase-movement span').length; i++) {
    		if (getElements('.phrase-movement')[i]) {
    			getElements('.phrase-movement')[i].style.display = "inherit";
    		}
    	}
    }
    openconsolebox = () => {
    	getElement('.consolebox').style.display = "flex";
    	getElement('.boxOfBoxes-desktop').style.filter = 'blur(0px)';
    	getElement('.boxOfBoxes-desktop').style.pointerEvents = 'none';
    	for (let i = 0; i < getElements('.phrase-movement span').length; i++) {
    		if (getElements('.phrase-movement')[i]) {
    			getElements('.phrase-movement')[i].style.display = "none";
    		}
    	}
    	getElement('.console').focus();
    }
    // get the console input element
	const consoleInput = getElement('.console');	
    document.addEventListener("keydown", function(event) {
  		if (event.key === "Escape" || event.key === "Esc") {
  			if (window.getComputedStyle(getElement('.consolebox')).getPropertyValue('display') == "flex") {
  				closeconsolebox();
  			}
  			else if (window.getComputedStyle(getElement('.consolebox')).getPropertyValue('display') == "none") {
  				openconsolebox();
    		}
  		}
	});
	getElement('.navtitle').addEventListener('mousedown', function() {
		getElement('.header__h1').classList.add('header--active');
	});
	getElement('.navtitle').addEventListener('mouseup', function() {
		getElement('.header__h1').classList.remove('header--active');
	});
	//console.log('side: ' + JSON.stringify(generator.side));
});
var consoleValue = getElement('.console').value;
var consoleHistory = '';
var side = false;
pushHistory = (consoleValue) => {
    	consoleHistory += (consoleValue) + '<br>';
    	getElement('.consolehistory').innerHTML = consoleHistory;
    }
//---------------tool functions----------------------
resetPlaceholder = () => {
	document.documentElement.style.setProperty('--phc', 'var(--bg8)');
 	getElement('.console').placeholder = `type 'list' and press 'enter' to see command reference`;
};
