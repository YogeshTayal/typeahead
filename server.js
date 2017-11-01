const express = require('express');
const app = express();
const path = require('path');

var list = ['Yogesh Tayal', 'John Doe', 'Jane Doe', 'Amitabh Bachchan', 'Abhishek Bachchan'];
app.get('/data', function (req, res) {
	var data = list.filter(function(obj){
		return obj.toLowerCase().match(req.query.str.toLowerCase());
	});
	console.log(req.query.str);
	res.send(JSON.stringify(data));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client', 'index.html'));
// });

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});
