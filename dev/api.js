var express = require('express')
var app = express()
var path = require("path");
const port =3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var fetch = require('node-fetch')


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));

mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
const Item = require('../models/Item');

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});


app.post('/Service', function(req,res){
  const newItem = new Item({
    yname: req.body.yname,
    pname: req.body.pname,
    cfrm: req.body.cfrm
  });

  newItem.save();
  /*fetch('http:/vm-launcher:81/vm');*/
  /*res.status(301).redirect(`http://${req.hostname}:81/`)*/
  res.redirect('/')

});


app.listen(port, ()=> {
  console.log(`Server listening on port ${port}`)
})


