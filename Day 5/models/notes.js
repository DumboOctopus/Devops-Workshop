var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema  = new Schema(
  {
    title: {type: String, required: true},
    note: {type: String, required: true},
  }
);


//Export model
module.exports = mongoose.model('Note', NoteSchema);
