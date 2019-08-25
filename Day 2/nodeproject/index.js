const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//               mongodb://username:password@ipaddress/dbname
const mongoDB = 'mongodb://127.0.0.1/notes_db';
mongoose.connect(mongoDB, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
const Note = require('./models/note');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

app.get(
  '/',
  (request, response) => {
    response.render('home', {});
  }
)

app.get(
  '/notes',
   (request, response) => {
     Note.find({}, (err, vals) => {
       if(err) {
         console.log("error in /notes");
         response.send("Could not retrieve notes");
       } else{
         response.render('notes', {notes: vals});
       }
     });
   }
)

app.get(
  "/delete/:id",
  (request, response) =>{
    let id = request.params.id;
    Note.deleteOne({"_id": id}, (err) =>{
      if(err) {
        response.send("Error! ");
      }
      response.redirect("/notes");
    })
  }
)

app.post(
  '/submitformdata',
  (request, response) => {
    console.log(request.body);
    let n = new Note({title: request.body.title, note: request.body.note});
    n.save( (err) => {
      if(err){
        console.log(err);
        response.send("Error!");
      } else {
        console.log("note saved! " + n._id)
        response.redirect('/notes');
      }
    });

  }
)

app.listen(
  3000,
  ()=>console.log("app started")
);
