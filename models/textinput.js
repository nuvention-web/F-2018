var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var textinputSchema = new Schema({
  text: String,
});

module.exports =mongoose.model('textinput', textinputSchema);
