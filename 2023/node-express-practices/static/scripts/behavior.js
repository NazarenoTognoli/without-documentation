let port = 5000;
let inputValues = {};
let inputData = {};
let inputN = 20;
async function sendData(url, req) {
  try {
    const response = await fetch(url, req);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {console.error('An error occurred:', error);}
}
async function validateExistence (value, comprobante) {
	for (let j = 0; j < inputN; j++) {	
		if (inputValues[`inputN${j}`] !== undefined && `inputN${j}` === comprobante) {
			try {
				const bodyData = {headers: {"Content-Type": 'application/json'}, method: 'post', body: value};
				let response = await sendData(`http://localhost:${port}/n${j}/`,bodyData);
				let data = await response;
				inputData[`inputN${j}`] = data;
			} catch(error) {console.error(`Error sending request ${j}:`, error);}
		}
	}
}
//let incomingData = '';
for (let i = 0; i < inputN; i++) {
	//Create Elements
	const inputField = document.createElement("input");
	inputField.type = 'text';
	if (i >= 2) {
		inputField.classList.add('input-field', `input-n${i}`, 'disabled');	
	} else {
		inputField.classList.add('input-field', `input-n${i}`);
	}
	inputField.placeholder = `input-n${i}`
	document.querySelector('.fields-container').appendChild(inputField);
	//Add Event Listener
	inputField.addEventListener('keydown', async (event)=>{
		if (event.key === 'Enter') {
			inputValues[`inputN${i}`] = inputField.value;
			try {
				class LN {
					async sendAddData(data) {
						await validateExistence(JSON.stringify({value: data, inputName: `inputN${i}`}), `inputN${i}`);
					}
					displayData() {
						console.log('response: ' + JSON.stringify(inputData[`inputN${i}`]));
						inputField.value = '';	
					}
				}
				let LNvar = [];
				for (let i = 0; i < inputN; i++) {
					LNvar.push(new LN());
				}
				switch(i) {	
					case 0:
						await LNvar[0].sendAddData(inputField.value)
						LNvar[0].displayData()
						break;
					case 1:
						await LNvar[1].sendAddData(inputField.value)
						inputField.value = '';
						let osOBJ = JSON.parse(inputData[`inputN${i}`].userInfo);
						console.log("response: username-" + osOBJ.username);
						break;
				}
			} catch (error) {console.log(error)}
		}
	})
}
let cleaner = document.querySelector('#cleaner');
cleaner.addEventListener('click', async ()=> {
	let response = await fetch(`http://localhost:${port}/default/`,
								{headers: {"Content-Type": 'application/json'}, 
								method: 'post', 
								body: JSON.stringify({value: '0976'})});
	console.log(response);
});