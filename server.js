var express = require('express')
var path = require('path')
var moment = require('moment')
var app = express()
var port = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname, '')));

app.get('/:time', function (req, res) {
  var time = Number(req.params.time) ? moment.unix(req.params.time) : moment(req.params.time);
  var unixTime = time.isValid() ? +time.format('X') : null;
  var natural = time.isValid() ? time.format('MMMM D, YYYY') : null;
  
  var obj = {
    unix: unixTime,
    natural: natural
  };
  
  try {
    res.json(obj);
  } catch (err) {
    res.send(500);
  }
  
})

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})