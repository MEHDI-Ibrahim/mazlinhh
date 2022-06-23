var express = require('express')
var app = express()
var path = require("path");

const port =3001;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));

var fetch = require('node-fetch')
var exec = require('child_process').exec;



mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
const Item = require('../models/Item');

app.get('/test', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});


app.get('/', function(req,res){
	var test = ['a'];
	Item.find().then(items => items.forEach(function(item) {
		console.log(`le test array is : ${item.cfrm} is a ${typeof item.cfrm}`);
    test.push(item.cfrm)
      }));
	
    if(test[0] == 'yes' && test[1] == 'yes'){
    	exec('../Scripts/ScriptTestApp.sh',
    function (error, stdout, stderr) {
        console.log(stdout);
        console.log( stderr);
        if (error !== null) {
             console.log(error);
        }
    });
    }
});


app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
})