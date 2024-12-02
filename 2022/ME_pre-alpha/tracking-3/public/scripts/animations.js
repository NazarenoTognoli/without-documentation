
let titleSpans = getElements(".navtitle span");
console.log(titleSpans);
console.log("length: " + titleSpans.length);
function titleSpansAnim (ts,time) {
	ts.style.color = "#fff";
	ts.style.textShadow = `0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8), 0px 0px 5px var(--bg8)`;
	const resetMeStyles = () => {
		ts.style.textShadow = `
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9),
		0px 0px 5px var(--bg9)`;
		ts.style.color = "var(--txt2)";
	}
	setTimeout(function () {resetMeStyles()}, time);
}
function titleSpansRepeat () {
	for (let i = 0; i < titleSpans.length; i++) {
		(function (index) {
	    setTimeout(function () {
	      titleSpansAnim(titleSpans[index],100);
	    }, index * 100);
	  })(i);
	}	
}
setInterval(titleSpansRepeat,1400);
let phraseMovSpa = getElements(".phrase-movement span");

console.log("length: " + phraseMovSpa.length);
function PMSrepeat () {	
	for (let i = 0; i < 5; i++) {
		let randomPMS = Math.floor(Math.random() * phraseMovSpa.length);
		setTimeout(function () {
			titleSpansAnim(phraseMovSpa[randomPMS],50);
		}, 50 * i);
	}
}
setInterval(PMSrepeat, 100);

