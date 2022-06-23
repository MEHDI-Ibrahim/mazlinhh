const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  yname: {
    type: String,
    required: true
  },
  pname: {
    type: String,
    required: true
  },
  cfrm: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);