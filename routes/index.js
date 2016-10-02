var express = require('express');
var router = express.Router();
var accountSid = 'XXXXXX';
var authToken = 'XXXXXX';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});
router.get('/map', function(req, res, next) {
  	res.render('map', { title: 'Express' });
});

router.get('/sms', function(req, res, next) {
	//res.json(JSON.stringify(client.messages));
	client.messages.create({
		to: "+XXXXXXXXX",
	  	from: "+XXXXXXXXX",
	  	body: "The Access Van is arriving in less than a minute!",
	  	mediaUrl: "https://access2.herokuapp.com/images/Bates-McAfee%20Stop.png"
	}, function(err, message) {
	  	console.log(message.sid);
	  	res.json(message.sid);
	});
});

module.exports = router;

exports.index = function(req, res){
res.render('index', { title: 'ejs' });};