const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoteSchema = new Schema(
  {
    title: String,
    note: String,
  }
);

module.exports = mongoose.model('Note', NoteSchema);
