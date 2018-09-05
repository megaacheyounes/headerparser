// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/whoami', function(req, res) {

  var ip = req.get('x-forwarded-for') ;
  var userAgent = req.get('User-Agent');
  var lang = req.get('Accept-Language');
  if(ip && ip.indexOf(',')!=-1){
    ip = ip.split(',')[0];
  }
  var r={"ipaddress":ip,
         "language":lang,
        "software":userAgent};
  console.dir(r);
  res.json(r);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
