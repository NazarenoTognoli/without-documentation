const express = require('express');
const os = require('os');
const fs = require('fs');
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.static('../static'));

app.post('/default', (req,res) => {
	if (req.body.value === '0976') {
		console.clear();
	}
	else {
		console.log('bad request at /default')
	}
})


app.post('/n0', (req,res) => {
	let requestData = req.body;
	console.log(`Request: ${JSON.stringify(requestData)}`);
	console.log(' ');
	res.json(`${JSON.stringify(requestData)}`);
});
app.post('/n1', (req,res)=>{
	let userInfo = JSON.stringify(os.userInfo());
	console.log(`Request: ${JSON.stringify(req.body)}`);
	console.log(' ');
	res.json({userInfo});
});
app.post('/n2', (req,res)=>{
	console.log(`Object: ${JSON.stringify(req.body)}`);
	res.json({message: `Logic of N2: ${JSON.stringify(req.body)}`});
});
app.post('/n3', (req,res)=>{
	console.log(`Object: ${JSON.stringify(req.body)}`);
	res.json({message: `Logic of N3: ${JSON.stringify(req.body)}`});
});
app.post('/n4', (req,res)=>{
	console.log(`Object: ${JSON.stringify(req.body)}`);
	res.json({message: `Logic of N4: ${JSON.stringify(req.body)}`});
});
app.post('/n5', (req,res)=>{
	console.log(`Object: ${JSON.stringify(req.body)}`);
	res.json({message: `Logic of N5: ${JSON.stringify(req.body)}`});
});
app.post('/n6', (req,res)=>{
	console.log(`Object: ${JSON.stringify(req.body)}`);
	res.json({message: `Logic of N6: ${JSON.stringify(req.body)}`});
});
app.post('/n7', (req,res)=>{});
app.post('/n8', (req,res)=>{});
app.post('/n9', (req,res)=>{});
app.post('/n10', (req,res)=>{});
app.post('/n11', (req,res)=>{});
app.post('/n12', (req,res)=>{});
app.post('/n13', (req,res)=>{});
app.post('/n14', (req,res)=>{});
app.post('/n15', (req,res)=>{});
app.post('/n16', (req,res)=>{});
app.post('/n17', (req,res)=>{});
app.post('/n18', (req,res)=>{});
app.post('/n19', (req,res)=>{});
app.listen(port, ()=>{console.log(`server listening on port: ${port}`)});
console.log(os.uptime);