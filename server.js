var express = require('express');

//Create our app
var app = express();
//allows heroku to run the app
const PORT = process.env.PORT || 3000;
//For the openweathermap api. heroku cannot run on HTTP, only HTTPS.
//This code will direct traffic from HTTPS to HTTP.
//Express Middleware
app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'http') {
      res.redirect('http://' + req.hostname + req.url);
    } else {
      next();
    }
});

//use the public folder
app.use(express.static('public'));

//start the server
app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});
