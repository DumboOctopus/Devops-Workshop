const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const winston = require('winston');
const compression = require('compression');
const helmet = require('helmet');
let  transports =[ ]
if(process.env.NODE_ENV === "production"){
	transports = [
		//
		// - Write to all logs with level `info` and below to `combined.log` 
		// - Write all logs error (and below) to `error.log`.
		//
		new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
		new winston.transports.File({ filename: 'logs/combined.log', format: winston.format.simple() })
	]

} else {
	transports = [
		new winston.transports.Console({
			format: winston.format.simple()
		})
	]
}

const logger = winston.createLogger({
  transports: transports,
  level: 'info',
});

let mongoDB = "";
if(process.env.NODE_ENV === "production"){
	mongoDB = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_IP+':27017/'+process.env.DB_DBNAME;
} else{
	mongoDB = 'mongodb://localhost:27017/notes_db';
}
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
const Note = require("./models/notes.js");
function log_error(message){
	logger.log("error", message);
}
console.log(logger.log)
db.on('error', log_error);

app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'pug')


app.get('/', (req, res) => {
	logger.log('info', "GET /");
	res.render('home', {} )
})

app.get('/notes', (req, res) => {
	logger.log('info', "GET /notes");
	Note.find({}, function (err, notes) {
		if (err) {
			logger.log('error', 'app.get(/note) failed to find all notes');	
			res.send("Error!");
		} else {
			logger.log('info', 'app.get(/note) successfully fetched notes');
			res.render('notes', {vals: notes})
		}
	});
});

app.get('/note/:id', (request, response) => {
	logger.log('info', "GET /notes/:id");
	Note.findOne({"_id": request.params.id}, (err, note) => {
		if(note === undefined){
			logger.log("warn", "No Note found");
			response.send("no note found :(")
		} else {
			logger.log("info", "Retrieved note with _id " + request.params.id);
			response.render("note", {val: note});
		}
	});

});

app.post('/formdata', (req, res) => {
	console.log(req.body);
	let n = new Note({ title: req.body.title, note: req.body.note });
	n.save( (err) => {
		if(err){
			console.log(err);
			res.send("Error!");
			return;
		}

		console.log("note saved!" + n.id);
//		res.send("Test");
		res.redirect("/notes");
	})
  	//res.send("Title was " + req.body.title + "; Note was " + req.body.note);
})


app.listen(process.env.PORT, () => {
	console.log('listening on '+ process.env.PORT)
})
