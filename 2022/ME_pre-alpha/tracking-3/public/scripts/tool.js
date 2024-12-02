//subTech flexBasis generator
actualizarFlexBasisSubTech = () => {
	var swt = getElements('.swt');
	var subTech;
	for (let i = 0; i < swt.length; i++) {
		subTech = swt[i].querySelectorAll('.subTech');
		for (let j = 0; j < subTech.length; j++) {
			subTech[j].style.width = `${100 / subTech.length}%`;
		}
	}	
};
actualizarFlexBasisSubTech();

//focus aside button styles
actualizarAsideFocus = () => {
	function resetAsideButtons () {
		for (let i = 0; i < getElements('.habtn').length; i++) {
			getElements('.habtn')[i].addEventListener('click', function() {
				for (let b = 0; b < getElements('.aside__button').length; b++) {
					getElements('.aside__button')[b].style.color = 'var(--bg8)';
					getElements('.aside__button')[b].style.outlineColor = 'var(--bg8)';
					getElements('.aside__button')[b].style.background = 'var(--bg2)';
				};	
			});
		}
	}
	resetAsideButtons();
	for (let i = 0; i < getElements('.aside__button').length; i++) {
		getElements('.aside__button')[i].addEventListener('click', function() {
			this.style.color = "var(--txt2)";
			this.style.outlineColor = "var(--txt2)";
			this.style.background = "var(--bg5)";
		});
	}	
};
actualizarAsideFocus();
document.addEventListener('DOMContentLoaded', function () {	
let starsBoxWidth = 1240.2;
let startsBoxHeight = 561.97 - 34;
let starsBoxMarginTop = 34 + 24.22 + 4;
for (let i = 0; i < getElements(".starsBackground").length; i++) {
	//getElements(".starsBackground")[i].style.width = `${starsBoxWidth}px`;
	getElements(".starsBackground")[i].style.width = `calc(100% - ${window.getComputedStyle(getElement('.phrase')).getPropertyValue('flex-basis')} - 5px)`;
	//getElements(".starsBackground")[i].style.height = `${startsBoxHeight}px`;
	getElements(".starsBackground")[i].style.height = `calc(100% - 44px - 37px - 20px)`;
	getElements(".starsBackground")[i].style.marginTop = `${starsBoxMarginTop}px`;
	getElements(".starsBackground")[i].style.background = "var(--bg2)";
	getElements(".starsBackground")[i].style.zIndex = "100";
}
});



