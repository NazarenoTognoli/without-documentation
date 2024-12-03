const clear = require('clear');

var cycle = 0;
var num = 0.1;
var paperReachedMoon = false;
function cycles () {
	if (cycle === 0) {
		console.log(" ");
		console.log("simulation of a sheet of paper being folded");
		console.log(" ");
	}
	cycle ++;
	num *= 2;
	if (num < 1 * 10) {
		console.log("mm: " + num + " number of duplications on itself: " + cycle);
	}
	else if (num >= 1 * 10 && num < (1 * 10) * 100) {
		cm = num / 10;
		console.log("cm: " + cm + " number of duplications on itself: " + cycle);
	}
	else if (num >= 1 * 10 * 100 && num <= 1 * 10 * 100 * 1000) {
		mt = num / 10 / 100;
		console.log("mt: " + mt + " number of duplications on itself: " + cycle)
	}
	else if (num >= 1 * 10 * 100 * 1000) {
		km = num / 10 / 100 / 1000
		console.log("km: " + km + " number of duplications on itself: " + cycle);
		if (num / 10 / 100 / 1000 >= 384400 && !paperReachedMoon) {
			console.log(" ")
			console.log("The paper has reached the moon");
			console.log(" ")
			setTimeout(function () {
				console.log(" ");
			}, 60000);
			paperReachedMoon = true;
		}
	}
}
var setInt = setInterval(cycles, 100)
// class Person {
// 	talk() {
// 		console.log('Talking');
// 	}
// 	denver() {
// 		console.log('coldDenver');
// 	}
// 	euphoria() {
// 		console.log('Entrophy');
// 	}
// }
// class Human {
// 	robot() {
// 		console.log("AI's");
// 	}
// 	machine() {
// 		console.log('Doomer Metal');
// 	}
// }
