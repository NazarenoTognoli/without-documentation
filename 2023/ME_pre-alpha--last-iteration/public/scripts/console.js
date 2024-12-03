//---------------theme conditionals----------------- 
if (localStorage.getItem('thMin') === null) {
  localStorage.setItem('thMin', 'false');
}
if (localStorage.getItem('thDef') === null) {
  localStorage.setItem('thDef', 'false');
}
changeCSSVar = (name, value) => {document.documentElement.style.setProperty(name, value)};
let theme = {
	functions: {
		reset: () => {
			localStorage.setItem('thMin', 'false');
			localStorage.setItem('thDef', 'false');
			theme.booleanos.themeMinimal = false;
			theme.booleanos.themeDefault = false;
		},
		default: () => {
			changeCSSVar('--bg1', '#0a0a0a');
			changeCSSVar('--bg2', '#0e0e0e');
			changeCSSVar('--bg4', '#15151e');
			changeCSSVar('--bg5', '#34344c');
			changeCSSVar('--bg7', '#080808');
			changeCSSVar('--bg8', '#809bff');
			changeCSSVar('--bg9', '#2e2f76');
			changeCSSVar('--txt1', '#34344c');
			changeCSSVar('--txt2', '#ddd');
		},
		minimal: () => {
			changeCSSVar('--bg1', '#FFF');
			changeCSSVar('--bg2', '#FFF');
			changeCSSVar('--bg4', '#555')
			changeCSSVar('--bg5', '#FFF');
			changeCSSVar('--bg7', '#555');
			changeCSSVar('--bg8', '#222');
			changeCSSVar('--bg9', '#222');
			changeCSSVar('--txt1', '#222');
			changeCSSVar('--txt2', '#222');
			getElement('body').style.boxShadow = "none";
			getElement('body').style.textShadow = "none";
		}
	},
	booleanos: {
		themeMinimal: JSON.parse(localStorage.getItem('thMin')),
		themeDefault: JSON.parse(localStorage.getItem('thDef'))
	}
}
/*let rancio = {};
localStorage.setItem("rlmValues", JSON.stringify(rancio));*/
document.addEventListener("keydown", function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		switch (consoleValue) {
		//side Long / side Short
		case "generate.side": 
			if (generateSideConsole) {
				allConsoleFunc(false);
				conGenSide();
			}
			break;
		// side Long / side Short
		case "remove.side":
			if (removeSideConsole) {
				allConsoleFunc(false);
				conRemSide();
			}
			break;
		//side/tech
		case "generate.tech":
			if (generateTechConsole) {
				allConsoleFunc(false);
				conGenTech();
			} 
			break;
		//side/tech
		case "remove.tech":
			if (removeTechConsole) {
				allConsoleFunc(false);
				conRemTech();
			}
			break;
		//side/swt
		case "generate.swt": 
			if (generateSwtConsole) {
				allConsoleFunc(false);
				conGenSwt();
			}
			break;
		//side/swt
		case "remove.swt":
			if (removeSwtConsole) {
				allConsoleFunc(false);
				conRemSwt();
			}
			break;
		//tech/subTech
		case "generate.subTech": 
			if (generateSubTechConsole) {
				allConsoleFunc(false);
				conGenSubTech();
			}
			break;
		//tech/subTech
		case "remove.subTech":
			if (removeSubTechConsole) {
				allConsoleFunc(false);
				conRemSubTech();
			}
			break;
		//subTech/swtNum/ID
		case "generate.link":
			if (generateLinkConsole) {
				allConsoleFunc(false);
				conGenLink();
			}
			break;
		case "remove.link":
			if (removeLinkConsole) {
				allConsoleFunc(false);
				conRemLink();
			}
			break;
		//side/tech/swt/subTech/numero/txt/href/title/bg/state
		case "rlm":
			if (generateRlmConsole) {
				allConsoleFunc(false);
				conGenRLM();
			}
			break;
		case "remove.rlm":
			if (removeRlmConsole) {
				allConsoleFunc(false);
				conRemRLM();
			}
			break;
		case "theme.minimal":
			resetPlaceholder();
			pushHistory(consoleValue);
			getElement('.consolebox').reset();
			if (theme.booleanos.themeMinimal === false) {
				theme.functions.reset();
				localStorage.setItem('thMin', 'true');	
				theme.functions.minimal();
			}
			break;
		case "theme.default":
			resetPlaceholder();
			pushHistory(consoleValue);
			getElement('.consolebox').reset();
			if (theme.booleanos.themeDefault === false) {
				theme.functions.reset();
				localStorage.setItem('thDef', 'true');	
				theme.booleanos.themeDefault = true;
				theme.functions.default();
			}
			break;
		case "exit":
			getElement('.consolebox').reset();
			getElement('.console').value = '';
			resetPlaceholder();
			closeconsolebox();
			break;
		case "clean":
			resetPlaceholder();
			consoleHistory = '';
			getElement('.consolehistory').innerHTML = consoleHistory;
			getElement('.consolebox').reset();
		break;
		default:
			getElement('.console').placeholder = `Invalid Value '${consoleValue}'`;
			document.documentElement.style.setProperty('--phc', '#F00');
			getElement('.console').value = '';
			getElement('.consolebox').reset();
			break;
		}
	}
});
if (theme.booleanos.themeMinimal === true) {
	theme.functions.minimal();
}
if (theme.booleanos.themeDefault === true) {
	theme.functions.default();
}
/*let vv = {};
localStorage.setItem("rlmValues", JSON.stringify(vv));
delete localStorage.getItem("rlm");*/

