var express = require('express');
var path = require('path');
var router = express.Router();
var viewPath = __dirname + '/../views/';

router.get('/hello', function (req, res) {
})

router.get('/', function (req, res) {
  console.log(path.join(__dirname + '/index.html'));
  res.sendFile(path.join(viewPath+'home.html'));
})


router.post('/', function (req, res) {
  res.send('Got a POST request')
})

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
