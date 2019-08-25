const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));


app.get(
   '/',//websitename.com/ websitename.com
   (request, response) =>
   response.render('home', {})
);
app.get(
  '/about',
  (request, response) => {
    response.sendFile(path.join(__dirname + '/html/about.html'))
    //response.send("Somehow I learned to dance. and i code. and sleep. (no food required)")
  }
);
app.post(
  '/submitformdata',
  (request, response) => {
    console.log(request.body);
    response.send("You sent data congrats I now have your personal info.");
  }
)

app.listen(
  3000,
  ()=>console.log("app started")
);
